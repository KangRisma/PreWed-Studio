
import { GoogleGenAI, Modality } from "@google/genai";
import type { GenerationConfig, GeneratedImage } from '../types';
import { SYSTEM_PROMPT_TEMPLATE, OTHER_OPTION, RANDOM_POSE_OPTION, LIGHTING_STYLES } from '../constants';

const fileToGenerativePart = async (file: File) => {
    const base64EncodedDataPromise = new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve((reader.result as string).split(',')[1]);
        reader.readAsDataURL(file);
    });
    return {
        inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
    };
};

const buildPrompt = (config: GenerationConfig): string => {
    let watermarkInstruction: string;

    if (config.useWatermark) {
        if (config.customWatermark && config.customWatermark.trim() !== '') {
            watermarkInstruction = `PENTING: Tambahkan watermark teks kecil "${config.customWatermark.trim()}" dengan gaya font skrip (script/handwriting) yang elegan, sedikit miring (italic), dan semi-transparan di pojok kanan bawah gambar. Watermark harus halus dan tidak mengganggu.`;
        } else {
            watermarkInstruction = 'PENTING: Jangan tambahkan watermark teks apa pun ke gambar. Gambar harus benar-benar bersih tanpa teks tambahan.';
        }
    } else {
        watermarkInstruction = `PENTING: Tambahkan watermark teks kecil "Anotechhub" dengan gaya font skrip (script/handwriting) yang elegan, sedikit miring (italic), dan semi-transparan di pojok kanan bawah gambar. Watermark harus halus dan tidak mengganggu.`;
    }
    
    const otherOptionNameId = OTHER_OPTION.name_id;
    const otherOptionNameEn = OTHER_OPTION.name_en;
    const randomPoseNameId = RANDOM_POSE_OPTION.name_id;
    const randomPoseNameEn = RANDOM_POSE_OPTION.name_en;

    let finalPoseStyle = config.poseStyle;
    if (config.poseStyle === otherOptionNameId || config.poseStyle === otherOptionNameEn) {
        finalPoseStyle = config.customPoseStyle || 'Gaya pose yang ditentukan oleh pengguna';
    } else if (config.poseStyle === randomPoseNameId || config.poseStyle === randomPoseNameEn) {
        finalPoseStyle = 'Pose yang kreatif dan natural yang dipilih oleh AI, yang paling sesuai dengan subjek dan suasana foto.';
    }

    const finalBackgroundStyle = (config.backgroundStyle === otherOptionNameId || config.backgroundStyle === otherOptionNameEn)
        ? config.customBackgroundStyle || 'Latar belakang yang ditentukan oleh pengguna'
        : config.backgroundStyle;
        
    const finalLightingStyle = (config.lightingStyle === otherOptionNameId || config.lightingStyle === otherOptionNameEn)
        ? config.customLightingStyle || 'Pencahayaan yang ditentukan oleh pengguna'
        : config.lightingStyle;

    const finalOutfitStyle = (config.outfitStyle === otherOptionNameId || config.outfitStyle === otherOptionNameEn)
        ? config.customOutfitStyle || 'Pakaian yang ditentukan oleh pengguna'
        : config.outfitStyle;

    return SYSTEM_PROMPT_TEMPLATE
        .replace('{{photo_type}}', config.photoType || 'Pre-wedding')
        .replace('{{pose_style}}', finalPoseStyle)
        .replace('{{background_style}}', finalBackgroundStyle)
        .replace('{{lighting_style}}', finalLightingStyle)
        .replace('{{outfit_style}}', finalOutfitStyle)
        .replace('{{extra_instructions}}', config.extraInstructions || 'Tidak ada instruksi tambahan.')
        .replace('{{watermark_instruction}}', watermarkInstruction);
};

export const generatePhotography = async (imageFiles: [File, File], config: GenerationConfig): Promise<GeneratedImage[]> => {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      throw new Error("API Key tidak dikonfigurasi di environment variables.");
    }
    const ai = new GoogleGenAI({ apiKey });
    const model = 'gemini-2.5-flash-image-preview';
    
    const imagePart1 = await fileToGenerativePart(imageFiles[0]);
    const imagePart2 = await fileToGenerativePart(imageFiles[1]);
    const textPrompt = buildPrompt(config);
    const textPart = { text: textPrompt };

    const generateSingleImage = async (): Promise<string> => {
        const result = await ai.models.generateContent({
            model: model,
            contents: { parts: [imagePart1, imagePart2, textPart] },
            config: {
                responseModalities: [Modality.IMAGE, Modality.TEXT],
            },
        });

        if (!result.candidates || result.candidates.length === 0) {
            throw new Error("API response does not contain any candidates.");
        }
        
        const imagePartResponse = result.candidates[0]?.content?.parts.find(part => part.inlineData);

        if (imagePartResponse && imagePartResponse.inlineData) {
            const base64ImageBytes = imagePartResponse.inlineData.data;
            return `data:${imagePartResponse.inlineData.mimeType};base64,${base64ImageBytes}`;
        } else {
            const textResponsePart = result.candidates[0]?.content?.parts.find(part => part.text);
            const textResponse = textResponsePart?.text?.trim() || "No text response found.";
            
            console.warn("API did not return an image. Text response:", textResponse);
            let errorMessage = "Gagal menghasilkan gambar. Coba sesuaikan prompt Anda atau gunakan gambar lain.";
            if (textResponse && textResponse.length > 5) {
                errorMessage = `Gagal menghasilkan gambar. Pesan dari AI: "${textResponse}"`;
            }
            throw new Error(errorMessage);
        }
    };

    const imagePromises = Array(6).fill(null).map(() => generateSingleImage());
    const imageResults = await Promise.all(imagePromises);
    
    return imageResults.map(imageUrl => ({
        imageUrl,
        prompt: textPrompt,
    }));
};

export const upscaleImage = async (base64ImageData: string, mimeType: string): Promise<string> => {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      throw new Error("API Key tidak dikonfigurasi di environment variables.");
    }
    const ai = new GoogleGenAI({ apiKey });
    const model = 'gemini-2.5-flash-image-preview';

    const imagePart = {
        inlineData: {
            data: base64ImageData,
            mimeType: mimeType,
        },
    };
    const textPart = {
        text: 'Tingkatkan resolusi gambar ini menjadi 2K. Pertajam detail, tingkatkan kualitas dan pencahayaan secara keseluruhan, namun JANGAN mengubah subjek, komposisi, atau elemen asli apa pun di dalam gambar. Hasil harus terlihat seperti versi resolusi tinggi dari gambar asli.',
    };

    const result = await ai.models.generateContent({
        model: model,
        contents: { parts: [imagePart, textPart] },
        config: {
            responseModalities: [Modality.IMAGE, Modality.TEXT],
        },
    });

    if (!result.candidates || result.candidates.length === 0) {
        throw new Error("API response for upscale does not contain any candidates.");
    }

    const imagePartResponse = result.candidates[0]?.content?.parts.find(part => part.inlineData);

    if (imagePartResponse && imagePartResponse.inlineData) {
        const base64ImageBytes = imagePartResponse.inlineData.data;
        return `data:${imagePartResponse.inlineData.mimeType};base64,${base64ImageBytes}`;
    } else {
        const textResponse = result.text || "API did not return an upscaled image.";
        console.warn("Upscale failed. Text response:", textResponse);
        throw new Error(`Gagal melakukan upscale: ${textResponse}`);
    }
};
