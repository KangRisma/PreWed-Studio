import React, { useState, useCallback, useMemo } from 'react';
import { UploadCloudIcon, XIcon, ImageIcon } from './IconComponents';
import type { ImageUploaderLocale } from '../i18n/locales';

interface ImageUploaderProps {
    onImageSelect: (file: File, index: 0 | 1) => void;
    onImageRemove: (index: 0 | 1) => void;
    sourceImages: [File | null, File | null];
    t: ImageUploaderLocale;
}

const ImageInput: React.FC<{
    file: File | null;
    onSelect: (file: File) => void;
    onRemove: () => void;
    title: string;
    t: ImageUploaderLocale;
}> = ({ file, onSelect, onRemove, title, t }) => {
    const [isDragging, setIsDragging] = useState(false);

    const imageUrl = useMemo(() => {
        return file ? URL.createObjectURL(file) : null;
    }, [file]);

    const handleFileChange = (files: FileList | null) => {
        if (files && files.length > 0) {
            const selectedFile = files[0];
            if (['image/png', 'image/jpeg'].includes(selectedFile.type) && selectedFile.size <= 10 * 1024 * 1024) {
                onSelect(selectedFile);
            } else {
                alert(t.fileError);
            }
        }
    };

    const handleDragEnter = useCallback((e: React.DragEvent<HTMLElement>) => {
        e.preventDefault(); e.stopPropagation(); setIsDragging(true);
    }, []);
    const handleDragLeave = useCallback((e: React.DragEvent<HTMLElement>) => {
        e.preventDefault(); e.stopPropagation(); setIsDragging(false);
    }, []);
    const handleDrop = useCallback((e: React.DragEvent<HTMLElement>) => {
        e.preventDefault(); e.stopPropagation(); setIsDragging(false); handleFileChange(e.dataTransfer.files);
    }, [handleFileChange]);

    return (
        <div className="flex-1">
            <h3 className="text-sm font-semibold text-center text-neutral-800 dark:text-neutral-200 mb-2">{title}</h3>
            {!imageUrl ? (
                <label
                    className={`group block w-full cursor-pointer`}
                    onDragEnter={handleDragEnter} onDragLeave={handleDragLeave} onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }} onDrop={handleDrop}
                >
                    <div className={`border-2 border-dashed border-neutral-200 dark:border-neutral-600 rounded-xl p-6 text-center transition-all duration-200 ${isDragging ? 'border-primary-pink bg-pink-50/50 dark:bg-pink-900/20' : 'group-hover:border-primary-pink group-hover:bg-pink-50/30 dark:group-hover:bg-pink-900/10'}`}>
                        <UploadCloudIcon isHovered={isDragging} />
                        <p className="mt-2 text-xs font-medium text-neutral-700 dark:text-neutral-300">{t.dragAndDrop}</p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">{t.fileConstraints}</p>
                    </div>
                    <input type="file" className="hidden" accept="image/png, image/jpeg" onChange={(e) => handleFileChange(e.target.files)} />
                </label>
            ) : (
                <div className="relative rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800">
                    <img src={imageUrl} alt={t.imagePreviewAlt} className="w-full h-32 object-contain" />
                    <button onClick={onRemove} className="absolute top-1.5 right-1.5 p-1.5 bg-white/80 dark:bg-black/50 backdrop-blur-sm rounded-full hover:bg-white dark:hover:bg-black/80 transition-colors" aria-label={t.removeImage}>
                        <XIcon />
                    </button>
                </div>
            )}
        </div>
    );
};

export const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageSelect, onImageRemove, sourceImages, t }) => {
    return (
        <div className="bg-white dark:bg-neutral-800/50 rounded-xl border border-neutral-200 dark:border-neutral-700">
            <div className="px-6 pt-6 pb-4">
                <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-7 h-7 bg-primary-pink/10 text-primary-pink rounded-full text-sm font-bold flex-shrink-0">1</span>
                    <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{t.title}</h2>
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1 ml-10">{t.subtitle}</p>
            </div>
            
            <div className="px-6 pb-6 flex flex-col sm:flex-row gap-4">
                <ImageInput 
                    file={sourceImages[0]}
                    onSelect={(file) => onImageSelect(file, 0)}
                    onRemove={() => onImageRemove(0)}
                    title={t.person1}
                    t={t}
                />
                <ImageInput 
                    file={sourceImages[1]}
                    onSelect={(file) => onImageSelect(file, 1)}
                    onRemove={() => onImageRemove(1)}
                    title={t.person2}
                    t={t}
                />
            </div>
        </div>
    );
};