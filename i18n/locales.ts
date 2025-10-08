
export interface Locale {
    header: HeaderLocale;
    app: AppLocale;
    imageUploader: ImageUploaderLocale;
    styleConfigurator: StyleConfiguratorLocale;
    resultsGrid: ResultsGridLocale;
    featuresModal: FeaturesModalLocale;
    faqModal: FaqModalLocale;
    footer: FooterLocale;
}

export interface HeaderLocale {
    support: string;
    toggleTheme: string;
    reset: string;
}

export interface AppLocale {
    uploadError: string;
    generationErrorGeneral: string;
    generationErrorSpecific: string;
    upscaleError: string;
    processing: string;
    generateButton: string;
    errorTitle: string;
}

export interface ImageUploaderLocale {
    title: string;
    subtitle: string;
    person1: string;
    person2: string;
    dragAndDrop: string;
    fileConstraints: string;
    fileError: string;
    imagePreviewAlt: string;
    removeImage: string;
}

export interface StyleConfiguratorLocale {
    title: string;
    subtitle:string;
    photoType: string;
    poseStyle: string;
    customPosePlaceholder: string;
    backgroundStyle: string;
    customBackgroundPlaceholder: string;
    lightingStyle: string;
    customLightingPlaceholder: string;
    outfitStyle: string;
    customOutfitPlaceholder: string;
    extraInstructions: string;
    extraInstructionsPlaceholder: string;
    useCustomWatermark: string;
    watermarkNote: string;
    customWatermarkPlaceholder: string;
}

export interface ResultsGridLocale {
    title: string;
    subtitle: string;
    downloadAll: string;
    emptyState: string;
    generatingState: string;
    upscalingState: string;
    upscaled: string;
    errorState: string;
    altText: string;
    download: string;
    copied: string;
    copyPrompt: string;
    upscaleAll: string;
}

export interface FeaturesModalLocale {
    title: string;
    features: { title: string; description: string }[];
    close: string;
}

export interface FaqModalLocale {
    title: string;
    questions: { question: string; answer: string }[];
    close: string;
}

export interface FooterLocale {
    tagline: string;
    product: string;
    features: string;
    faq: string;
    followUs: string;
    rights: string;
}


const id: Locale = {
    header: {
        support: "Dukungan Admin",
        toggleTheme: "Ganti tema",
        reset: "Atur Ulang",
    },
    app: {
        uploadError: "Harap unggah foto Anda dan foto pasangan Anda.",
        generationErrorGeneral: "Terjadi kesalahan saat membuat gambar.",
        generationErrorSpecific: "Gagal membuat gambar.",
        upscaleError: "Beberapa gambar gagal di-upscale.",
        processing: "Memproses...",
        generateButton: "Buat Foto Romantis",
        errorTitle: "Terjadi Kesalahan",
    },
    imageUploader: {
        title: "Unggah Foto Anda & Pasangan",
        subtitle: "Unggah foto terpisah untuk Anda dan pasangan Anda.",
        person1: "Foto Anda",
        person2: "Foto Pasangan",
        dragAndDrop: "Klik atau seret foto",
        fileConstraints: "PNG/JPG (maks. 10MB)",
        fileError: "Hanya file PNG atau JPG (maks. 10MB) yang diperbolehkan.",
        imagePreviewAlt: "Pratinjau Foto",
        removeImage: "Hapus gambar",
    },
    styleConfigurator: {
        title: "Konfigurasi Gaya Foto",
        subtitle: "Pilih tema, pakaian, pose, latar, dan pencahayaan.",
        photoType: "Jenis Foto",
        poseStyle: "Gaya Pose",
        customPosePlaceholder: "Tulis gaya pose kustom...",
        backgroundStyle: "Latar Belakang",
        customBackgroundPlaceholder: "Tulis latar belakang kustom...",
        lightingStyle: "Gaya Pencahayaan",
        customLightingPlaceholder: "Tulis gaya pencahayaan kustom...",
        outfitStyle: "Gaya Pakaian",
        customOutfitPlaceholder: "Tulis gaya pakaian kustom...",
        extraInstructions: "Instruksi Tambahan (Opsional)",
        extraInstructionsPlaceholder: "Contoh: keduanya tersenyum lebar, gaun wanita berwarna merah",
        useCustomWatermark: "Gunakan Watermark Kustom",
        watermarkNote: 'Jika dinonaktifkan, watermark "Anotechhub" akan digunakan secara default.',
        customWatermarkPlaceholder: "Tulis watermark Anda (kosongkan = tanpa watermark)",
    },
    resultsGrid: {
        title: "Hasil Foto Anda",
        subtitle: "Enam variasi akan dibuat di sini.",
        downloadAll: "Unduh Semua",
        emptyState: "Hasil akan muncul di sini",
        generatingState: "Membuat foto...",
        upscalingState: "Meningkatkan resolusi...",
        upscaled: "Resolusi Tinggi",
        errorState: "Gagal membuat gambar",
        altText: "Foto pre-wedding hasil AI",
        download: "Unduh",
        copied: "Disalin!",
        copyPrompt: "Salin Prompt",
        upscaleAll: "Tingkatkan Semua ke 2K",
    },
    featuresModal: {
        title: "Fitur Unggulan Ano PreWed Studio",
        close: "Tutup",
        features: [
            { title: "Penggabungan Foto AI", description: "Unggah dua foto terpisah dan biarkan AI kami menggabungkan Anda dan pasangan ke dalam satu foto yang indah dan kohesif." },
            { title: "Kustomisasi Tema Lengkap", description: "Pilih antara tema Pre-wedding atau Wedding, lalu sesuaikan dengan puluhan pilihan gaya pakaian, pose, latar belakang, dan pencahayaan yang romantis." },
            { title: "Upscale ke Resolusi 2K", description: "Tingkatkan resolusi gambar hasil generate menjadi 2K. Dapatkan detail yang lebih tajam dan kualitas yang lebih tinggi, cocok untuk dicetak atau dibagikan." },
            { title: "Enam Variasi Sekaligus", description: "Setiap proses generate menghasilkan enam variasi foto yang unik, memberikan Anda kebebasan untuk memilih momen terbaik." },
            { title: "Kontrol Watermark Profesional", description: 'Lindungi karya Anda dengan watermark. Gunakan watermark default "Anotechhub", watermark kustom Anda sendiri, atau hilangkan sama sekali.' },
        ],
    },
    faqModal: {
        title: "Pertanyaan yang Sering Diajukan (FAQ)",
        close: "Tutup",
        questions: [
            { question: "Apa itu Ano PreWed Studio?", answer: "Ini adalah aplikasi web berbasis AI untuk menggabungkan dua foto terpisah dari sepasang kekasih menjadi satu foto pre-wedding atau wedding berkualitas tinggi." },
            { question: "Bagaimana cara kerjanya?", answer: "Anda mengunggah foto Anda, lalu foto pasangan Anda. Kemudian pilih gaya yang diinginkan (pakaian, pose, latar, pencahayaan), lalu klik 'Buat'. AI akan menggabungkan kedua subjek ke dalam satu adegan baru sambil mengganti pakaian mereka." },
            { question: "Jenis foto seperti apa yang memberikan hasil terbaik?", answer: "Gunakan foto portrait (dari dada ke atas) dengan wajah yang terlihat jelas dan pencahayaan yang baik. Pastikan tidak ada objek yang menutupi wajah." },
            { question: "Apakah privasi saya aman?", answer: "Kami sangat menjaga privasi Anda. Foto yang diunggah hanya digunakan untuk proses pembuatan gambar saat itu juga. Kami <b>tidak menyimpan</b> atau membagikan foto Anda kepada pihak lain." },
            { question: "Bisakah saya menggunakan foto grup?", answer: "Untuk hasil terbaik, gunakan foto yang hanya berisi satu orang di setiap unggahan. AI dilatih untuk mengidentifikasi satu subjek dari setiap gambar yang diberikan." }
        ],
    },
    footer: {
        tagline: "Studio foto AI untuk potret pre-wedding dan wedding yang menakjubkan.",
        product: "Produk",
        features: "Fitur",
        faq: "FAQ",
        followUs: "Ikuti Kami",
        rights: "Semua hak dilindungi undang-undang.",
    },
};

const en: Locale = {
    header: {
        support: "Support Admin",
        toggleTheme: "Toggle theme",
        reset: "Reset",
    },
    app: {
        uploadError: "Please upload your photo and your partner's photo.",
        generationErrorGeneral: "An error occurred while generating images.",
        generationErrorSpecific: "Failed to create image.",
        upscaleError: "Some images failed to upscale.",
        processing: "Processing...",
        generateButton: "Create Romantic Photos",
        errorTitle: "An Error Occurred",
    },
    imageUploader: {
        title: "Upload Your & Your Partner's Photo",
        subtitle: "Upload separate photos for you and your partner.",
        person1: "Your Photo",
        person2: "Partner's Photo",
        dragAndDrop: "Click or drag photo",
        fileConstraints: "PNG/JPG (max 10MB)",
        fileError: "Only PNG or JPG files (max. 10MB) are allowed.",
        imagePreviewAlt: "Photo Preview",
        removeImage: "Remove image",
    },
    styleConfigurator: {
        title: "Photo Style Configuration",
        subtitle: "Choose theme, outfit, pose, background, and lighting.",
        photoType: "Photo Type",
        poseStyle: "Pose Style",
        customPosePlaceholder: "Enter custom pose style...",
        backgroundStyle: "Background",
        customBackgroundPlaceholder: "Enter custom background...",
        lightingStyle: "Lighting Style",
        customLightingPlaceholder: "Enter custom lighting style...",
        outfitStyle: "Outfit Style",
        customOutfitPlaceholder: "Enter custom outfit style...",
        extraInstructions: "Additional Instructions (Optional)",
        extraInstructionsPlaceholder: "e.g., both smiling widely, bride's dress is red",
        useCustomWatermark: "Use Custom Watermark",
        watermarkNote: 'If disabled, the "Anotechhub" watermark will be used by default.',
        customWatermarkPlaceholder: "Enter your watermark (leave blank = no watermark)",
    },
    resultsGrid: {
        title: "Your Photo Results",
        subtitle: "Six variations will be generated here.",
        downloadAll: "Download All",
        emptyState: "Results will appear here",
        generatingState: "Generating photos...",
        upscalingState: "Upscaling...",
        upscaled: "Upscaled",
        errorState: "Failed to create image",
        altText: "AI-generated pre-wedding photo",
        download: "Download",
        copied: "Copied!",
        copyPrompt: "Copy Prompt",
        upscaleAll: "Upscale All to 2K",
    },
    featuresModal: {
        title: "Ano PreWed Studio Key Features",
        close: "Close",
        features: [
            { title: "AI Photo Merging", description: "Upload two separate photos and let our AI merge you and your partner into one beautiful, cohesive picture." },
            { title: "Full Theme Customization", description: "Choose between Pre-wedding or Wedding themes, then customize with dozens of romantic outfits, poses, backgrounds, and lighting styles." },
            { title: "Upscale to 2K Resolution", description: "Enhance your generated images to 2K resolution. Get sharper details and higher quality, perfect for printing or sharing." },
            { title: "Six Variations at Once", description: "Each generation process produces six unique photo variations, giving you the freedom to choose the perfect moment." },
            { title: "Professional Watermark Control", description: 'Protect your work with a watermark. Use the default "Anotechhub" watermark, your own custom watermark, or remove it entirely.' },
        ],
    },
    faqModal: {
        title: "Frequently Asked Questions (FAQ)",
        close: "Close",
        questions: [
            { question: "What is Ano PreWed Studio?", answer: "It's an AI-powered web app to merge two separate photos of a couple into a single, high-quality pre-wedding or wedding photograph." },
            { question: "How does it work?", answer: "You upload your photo, then your partner's photo. Then, select your desired styles (outfit, pose, background, lighting) and click 'Create'. The AI will combine both subjects into one new scene while changing their outfits." },
            { question: "What kind of photos work best?", answer: "Use portrait photos (from the chest up) with a clear view of the face and good lighting. Ensure no objects are obscuring the face." },
            { question: "Is my privacy protected?", answer: "We take your privacy very seriously. Uploaded photos are only used for the image generation process. We <b>do not store</b> or share your photos with any third parties." },
            { question: "Can I use group photos?", answer: "For the best results, use a photo with only one person in each upload. The AI is trained to identify one subject from each provided image." }
        ],
    },
    footer: {
        tagline: "AI photo studio for stunning pre-wedding and wedding portraits.",
        product: "Product",
        features: "Features",
        faq: "FAQ",
        followUs: "Follow Us",
        rights: "All rights reserved.",
    },
};

export const locales = { id, en };
