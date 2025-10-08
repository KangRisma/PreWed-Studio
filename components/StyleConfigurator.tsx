
import React, { useMemo } from 'react';
import type { GenerationConfig } from '../types';
import { 
    PHOTO_TYPES, 
    PREWEDDING_BACKGROUNDS,
    WEDDING_BACKGROUNDS,
    PREWEDDING_POSE_STYLES,
    WEDDING_POSE_STYLES,
    LIGHTING_STYLES,
    PREWEDDING_OUTFIT_STYLES,
    WEDDING_OUTFIT_STYLES,
    OTHER_OPTION,
    RANDOM_OUTFIT_OPTION,
    RANDOM_POSE_OPTION,
    RANDOM_BACKGROUND_OPTION,
    RANDOM_LIGHTING_OPTION,
    OUTFIT_RECOMMENDATIONS,
    StyleOption 
} from '../constants';
import { MessageSquareIcon, ShieldIcon } from './IconComponents';
import type { StyleConfiguratorLocale } from '../i18n/locales';

interface StyleConfiguratorProps {
    config: GenerationConfig;
    onConfigChange: <K extends keyof GenerationConfig>(key: K, value: GenerationConfig[K]) => void;
    t: StyleConfiguratorLocale;
    lang: 'id' | 'en';
}

const ToggleSwitch: React.FC<{ checked: boolean; onChange: (checked: boolean) => void }> = ({ checked, onChange }) => (
    <div className="relative cursor-pointer" onClick={() => onChange(!checked)}>
        <input type="checkbox" className="sr-only" checked={checked} readOnly />
        <div className={`block w-10 h-6 rounded-full transition-colors ${checked ? 'bg-primary-pink' : 'bg-neutral-300 dark:bg-neutral-600'}`}></div>
        <div className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${checked ? 'transform translate-x-4' : ''}`}></div>
    </div>
);

const SelectInput: React.FC<{ label: string, value: string, onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void, options: StyleOption[], lang: 'id' | 'en' }> = ({ label, value, onChange, options, lang }) => (
    <div>
        <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block">
            {label}
        </label>
        <select 
            value={value} 
            onChange={onChange}
            className="w-full px-3 py-2.5 bg-neutral-50 dark:bg-neutral-700/50 border border-neutral-200 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-pink/20 text-neutral-900 dark:text-neutral-100 transition appearance-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
              backgroundPosition: 'right 0.5rem center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '1.5em 1.5em',
            }}
        >
            {options.map(opt => <option key={opt.id} value={opt[lang === 'id' ? 'name_id' : 'name_en']}>{opt[lang === 'id' ? 'name_id' : 'name_en']}</option>)}
        </select>
    </div>
);

const CustomInput: React.FC<{ placeholder: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; }> = ({ placeholder, value, onChange }) => (
    <div className="mt-2">
        <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full px-3 py-2 bg-neutral-50 dark:bg-neutral-700/50 border border-neutral-200 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-pink/20 text-neutral-900 dark:text-neutral-100 text-sm transition"
        />
    </div>
);

export const StyleConfigurator: React.FC<StyleConfiguratorProps> = ({ config, onConfigChange, t, lang }) => {
    const otherOptionName = OTHER_OPTION[lang === 'id' ? 'name_id' : 'name_en'];
    
    const backgroundOptions = useMemo(() => {
        return config.photoType === 'Wedding' ? WEDDING_BACKGROUNDS : PREWEDDING_BACKGROUNDS;
    }, [config.photoType]);
    
    const poseOptions = useMemo(() => {
        return config.photoType === 'Wedding' ? WEDDING_POSE_STYLES : PREWEDDING_POSE_STYLES;
    }, [config.photoType]);
    
    const outfitOptions = useMemo(() => {
        return config.photoType === 'Wedding' ? WEDDING_OUTFIT_STYLES : PREWEDDING_OUTFIT_STYLES;
    }, [config.photoType]);

    const lightingOptions = LIGHTING_STYLES;

    const showCustomPose = config.poseStyle === otherOptionName;
    const showCustomBackground = config.backgroundStyle === otherOptionName;
    const showCustomLighting = config.lightingStyle === otherOptionName;
    const showCustomOutfit = config.outfitStyle === otherOptionName;

    const handlePhotoTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newType = e.target.value as GenerationConfig['photoType'];
        onConfigChange('photoType', newType);
        
        onConfigChange('outfitStyle', RANDOM_OUTFIT_OPTION[lang === 'id' ? 'name_id' : 'name_en']);
        onConfigChange('poseStyle', RANDOM_POSE_OPTION[lang === 'id' ? 'name_id' : 'name_en']);
        onConfigChange('backgroundStyle', RANDOM_BACKGROUND_OPTION[lang === 'id' ? 'name_id' : 'name_en']);
        onConfigChange('lightingStyle', RANDOM_LIGHTING_OPTION[lang === 'id' ? 'name_id' : 'name_en']);
    };

    const handleOutfitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newOutfitName = e.target.value;
        onConfigChange('outfitStyle', newOutfitName);

        const selectedOutfit = outfitOptions.find(o => o.name_id === newOutfitName || o.name_en === newOutfitName);

        if (!selectedOutfit || selectedOutfit.id.startsWith('random') || selectedOutfit.id === 'other') {
            return; 
        }

        const recommendation = OUTFIT_RECOMMENDATIONS[selectedOutfit.id];
        if (recommendation) {
            const recommendedPose = poseOptions.find(p => p.id === recommendation.poseId);
            const recommendedBg = backgroundOptions.find(b => b.id === recommendation.backgroundId);
            const recommendedLighting = lightingOptions.find(l => l.id === recommendation.lightingId);

            if (recommendedPose) {
                onConfigChange('poseStyle', recommendedPose[lang === 'id' ? 'name_id' : 'name_en']);
            }
            if (recommendedBg) {
                onConfigChange('backgroundStyle', recommendedBg[lang === 'id' ? 'name_id' : 'name_en']);
            }
            if (recommendedLighting) {
                onConfigChange('lightingStyle', recommendedLighting[lang === 'id' ? 'name_id' : 'name_en']);
            }
        }
    };

    return (
        <div className="bg-white dark:bg-neutral-800/50 rounded-xl border border-neutral-200 dark:border-neutral-700 p-6">
             <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-7 h-7 bg-primary-pink/10 text-primary-pink rounded-full text-sm font-bold flex-shrink-0">2</span>
                <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{t.title}</h2>
            </div>
             <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1 ml-10 -mt-4 mb-6">
                {t.subtitle}
            </p>
            
            <div className="space-y-4">
                <div>
                    <SelectInput 
                        label={t.photoType}
                        value={config.photoType}
                        onChange={handlePhotoTypeChange}
                        options={PHOTO_TYPES}
                        lang={lang}
                    />
                </div>
                <div>
                    <SelectInput 
                        label={t.outfitStyle}
                        value={config.outfitStyle}
                        onChange={handleOutfitChange}
                        options={outfitOptions}
                        lang={lang}
                    />
                    {showCustomOutfit && (
                        <CustomInput
                            placeholder={t.customOutfitPlaceholder}
                            value={config.customOutfitStyle || ''}
                            onChange={(e) => onConfigChange('customOutfitStyle', e.target.value)}
                        />
                    )}
                </div>
                <div>
                    <SelectInput 
                        label={t.poseStyle}
                        value={config.poseStyle}
                        onChange={(e) => onConfigChange('poseStyle', e.target.value)}
                        options={poseOptions}
                        lang={lang}
                    />
                    {showCustomPose && (
                        <CustomInput
                            placeholder={t.customPosePlaceholder}
                            value={config.customPoseStyle || ''}
                            onChange={(e) => onConfigChange('customPoseStyle', e.target.value)}
                        />
                    )}
                </div>
                <div>
                    <SelectInput 
                        label={t.backgroundStyle}
                        value={config.backgroundStyle}
                        onChange={(e) => onConfigChange('backgroundStyle', e.target.value)}
                        options={backgroundOptions}
                        lang={lang}
                    />
                    {showCustomBackground && (
                        <CustomInput
                            placeholder={t.customBackgroundPlaceholder}
                            value={config.customBackgroundStyle || ''}
                            onChange={(e) => onConfigChange('customBackgroundStyle', e.target.value)}
                        />
                    )}
                </div>
                 <div>
                    <SelectInput 
                        label={t.lightingStyle}
                        value={config.lightingStyle}
                        onChange={(e) => onConfigChange('lightingStyle', e.target.value)}
                        options={lightingOptions}
                        lang={lang}
                    />
                    {showCustomLighting && (
                        <CustomInput
                            placeholder={t.customLightingPlaceholder}
                            value={config.customLightingStyle || ''}
                            onChange={(e) => onConfigChange('customLightingStyle', e.target.value)}
                        />
                    )}
                </div>
                <div>
                    <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block flex items-center">
                      <MessageSquareIcon />
                      <span className="ml-1.5">{t.extraInstructions}</span>
                    </label>
                    <textarea
                      placeholder={t.extraInstructionsPlaceholder}
                      className="w-full px-3 py-2 bg-neutral-50 dark:bg-neutral-700/50 border border-neutral-200 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-pink/20 text-neutral-900 dark:text-neutral-100 text-sm resize-none custom-scrollbar"
                      rows={3}
                      value={config.extraInstructions}
                      onChange={(e) => onConfigChange('extraInstructions', e.target.value)}
                    />
                </div>
                 <div>
                    <div className="flex items-center justify-between">
                         <label className={`text-sm font-medium flex items-center transition-colors ${config.useWatermark ? 'text-neutral-800 dark:text-neutral-200' : 'text-neutral-700 dark:text-neutral-300'}`}>
                            <ShieldIcon checked={config.useWatermark} />
                            <span className="ml-1.5">{t.useCustomWatermark}</span>
                        </label>
                        <ToggleSwitch checked={config.useWatermark} onChange={(checked) => onConfigChange('useWatermark', checked)} />
                    </div>
                     <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1.5 ml-7">
                        {t.watermarkNote}
                    </p>
                    {config.useWatermark && (
                        <div className="mt-2">
                             <input
                                type="text"
                                placeholder={t.customWatermarkPlaceholder}
                                value={config.customWatermark}
                                onChange={(e) => onConfigChange('customWatermark', e.target.value)}
                                className="w-full px-3 py-2 bg-neutral-50 dark:bg-neutral-700/50 border border-neutral-200 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-pink/20 text-neutral-900 dark:text-neutral-100 text-sm transition"
                             />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
