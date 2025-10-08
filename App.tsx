
import React, { useState, useCallback, useEffect } from 'react';
import { Header } from './components/Header';
import { ImageUploader } from './components/ImageUploader';
import { StyleConfigurator } from './components/StyleConfigurator';
import { ResultsGrid } from './components/ResultDisplay';
import { FeaturesModal } from './components/FeaturesModal';
import { FaqModal } from './components/FaqModal';
import type { GenerationConfig, ResultItem } from './types';
import { generatePhotography, upscaleImage } from './services/geminiService';
import { RANDOM_POSE_OPTION, RANDOM_BACKGROUND_OPTION, RANDOM_LIGHTING_OPTION, RANDOM_OUTFIT_OPTION } from './constants';
import { LogoIcon, WandIcon } from './components/IconComponents';
import { getCookie, setCookie } from './utils/cookies';
import { locales, Locale } from './i18n/locales';

declare const JSZip: any;

const initialConfig: GenerationConfig = {
    photoType: 'Pre-wedding',
    poseStyle: RANDOM_POSE_OPTION.name_id,
    customPoseStyle: '',
    backgroundStyle: RANDOM_BACKGROUND_OPTION.name_id,
    customBackgroundStyle: '',
    lightingStyle: RANDOM_LIGHTING_OPTION.name_id,
    customLightingStyle: '',
    outfitStyle: RANDOM_OUTFIT_OPTION.name_id,
    customOutfitStyle: '',
    extraInstructions: '',
    useWatermark: false,
    customWatermark: '',
};

const App: React.FC = () => {
    const [sourceImages, setSourceImages] = useState<[File | null, File | null]>([null, null]);
    const [results, setResults] = useState<ResultItem[]>(
        Array.from({ length: 6 }, (_, i) => ({ id: i, status: 'empty' }))
    );
    const [isGenerating, setIsGenerating] = useState<boolean>(false);
    const [isUpscaling, setIsUpscaling] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [isFeaturesModalOpen, setIsFeaturesModalOpen] = useState(false);
    const [isFaqModalOpen, setIsFaqModalOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const [language, setLanguage] = useState<'id' | 'en'>(() => {
        const savedLang = getCookie('language');
        return savedLang === 'en' ? 'en' : 'id';
    });

    const t: Locale = locales[language];

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [theme]);
    
    useEffect(() => {
        setCookie('language', language, 365);
        document.documentElement.lang = language;
    }, [language]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };
    
    const toggleLanguage = () => {
        setLanguage(prevLang => prevLang === 'id' ? 'en' : 'id');
    };

    const [config, setConfig] = useState<GenerationConfig>(initialConfig);

    const handleReset = useCallback(() => {
        setSourceImages([null, null]);
        setResults(Array.from({ length: 6 }, (_, i) => ({ id: i, status: 'empty' })));
        setError(null);
        setConfig(initialConfig);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const handleImageSelect = (file: File, index: 0 | 1) => {
        setSourceImages(prev => {
            const newImages: [File | null, File | null] = [prev[0], prev[1]];
            newImages[index] = file;
            return newImages;
        });
        setResults(Array.from({ length: 6 }, (_, i) => ({ id: i, status: 'empty' })));
        setError(null);
    };

    const handleImageRemove = (index: 0 | 1) => {
        setSourceImages(prev => {
            const newImages: [File | null, File | null] = [prev[0], prev[1]];
            newImages[index] = null;
            return newImages;
        });
        if (sourceImages.every(img => img === null)) {
            setResults(Array.from({ length: 6 }, (_, i) => ({ id: i, status: 'empty' })));
        }
    };
    
    const handleGenerate = useCallback(async () => {
        if (!sourceImages[0] || !sourceImages[1]) {
            setError(t.app.uploadError);
            return;
        }

        setIsGenerating(true);
        setError(null);
        setResults(prev => prev.map(r => ({ ...r, status: 'generating' })));

        try {
            const generatedData = await generatePhotography([sourceImages[0], sourceImages[1]], config);
            setResults(prev => prev.map((item, index) => ({
                ...item,
                status: 'completed',
                data: generatedData[index],
            })));
        } catch (e) {
            let errorMessage = e instanceof Error ? e.message : t.app.generationErrorGeneral;
            console.error(e);
            setError(errorMessage);
            setResults(prev => prev.map(item => ({
                ...item,
                status: 'error',
                errorMessage: t.app.generationErrorSpecific,
            })));
        } finally {
            setIsGenerating(false);
        }
    }, [sourceImages, config, t]);

    const handleUpscaleAll = useCallback(async () => {
        const targets = results.filter(r => r.status === 'completed' && !r.upscaledImageUrl);
        if (targets.length === 0) return;

        setIsUpscaling(true);
        setError(null);

        setResults(prev => prev.map(r => 
            targets.some(t => t.id === r.id) ? { ...r, status: 'upscaling' } : r
        ));

        const upscalePromises = targets.map(async (result) => {
            try {
                if (!result.data?.imageUrl) throw new Error("Source image URL not found for upscaling.");
                const base64Data = result.data.imageUrl.split(',')[1];
                const mimeType = result.data.imageUrl.split(';')[0].split(':')[1];
                const upscaledImageUrl = await upscaleImage(base64Data, mimeType);
                return { id: result.id, upscaledImageUrl, error: null };
            } catch (e) {
                console.error(`Upscale failed for result ${result.id}:`, e);
                return { id: result.id, upscaledImageUrl: null, error: e as Error };
            }
        });

        const settledResults = await Promise.all(upscalePromises);

        setResults(prev => {
            const newResults = [...prev];
            settledResults.forEach(res => {
                const index = newResults.findIndex(r => r.id === res.id);
                if (index !== -1) {
                    newResults[index] = {
                        ...newResults[index],
                        status: 'completed',
                        upscaledImageUrl: res.upscaledImageUrl ?? newResults[index].upscaledImageUrl,
                    };
                }
            });
            return newResults;
        });
        
        if (settledResults.some(res => res.error)) {
            setError(t.app.upscaleError);
        }

        setIsUpscaling(false);
    }, [results, t]);

    const handleDownloadAll = async () => {
        const completedResults = results.filter(r => r.status === 'completed' && (r.data?.imageUrl || r.upscaledImageUrl));
        if (completedResults.length === 0) return;

        const zip = new JSZip();
        const timestamp = new Date().getTime();

        await Promise.all(completedResults.map(async (result, index) => {
            const imageUrl = result.upscaledImageUrl || result.data!.imageUrl;
            const response = await fetch(imageUrl);
            const blob = await response.blob();
            zip.file(`ano_prewed_studio_${timestamp}_v${index + 1}.png`, blob);
        }));

        zip.generateAsync({ type: "blob" }).then((content: Blob) => {
            const link = document.createElement('a');
            link.href = URL.createObjectURL(content);
            link.download = `ano_prewed_studio_${timestamp}.zip`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    };

    const updateConfig = <K extends keyof GenerationConfig>(key: K, value: GenerationConfig[K]) => {
      setConfig(prev => ({ ...prev, [key]: value }));
    };

    return (
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 transition-colors duration-300 flex flex-col">
            <Header 
                theme={theme}
                toggleTheme={toggleTheme}
                language={language}
                toggleLanguage={toggleLanguage}
                onReset={handleReset}
                t={t.header}
            />
            <main className="flex-grow max-w-7xl mx-auto px-6 py-8 w-full">
                <div className="grid grid-cols-12 gap-8 items-start">
                    {/* Left Panel: Input & Configuration */}
                    <div className="col-span-12 lg:col-span-5">
                        <div className="space-y-6">
                            <ImageUploader 
                                onImageSelect={handleImageSelect} 
                                onImageRemove={handleImageRemove}
                                sourceImages={sourceImages}
                                t={t.imageUploader}
                            />
                            <StyleConfigurator 
                              config={config}
                              onConfigChange={updateConfig}
                              t={t.styleConfigurator}
                              lang={language}
                            />
                            <button 
                                onClick={handleGenerate}
                                disabled={isGenerating || !sourceImages[0] || !sourceImages[1]}
                                className="w-full bg-gradient-to-r from-primary-pink to-primary-blue text-white font-semibold py-3 px-6 rounded-xl hover:from-primary-pink-dark hover:to-primary-blue-dark transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-px disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-md"
                            >
                               {isGenerating ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        <span>{t.app.processing}</span>
                                    </>
                                ) : (
                                    <>
                                        <WandIcon />
                                        <span>{t.app.generateButton}</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                    
                    {/* Right Panel: Results Grid */}
                    <div className="col-span-12 lg:col-span-7">
                        <div className="lg:sticky lg:top-28">
                            <ResultsGrid
                                results={results}
                                onDownloadAll={handleDownloadAll}
                                onUpscaleAll={handleUpscaleAll}
                                isUpscaling={isUpscaling}
                                t={t.resultsGrid}
                            />
                        </div>
                    </div>
                </div>
            </main>
             <footer className="bg-neutral-100 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Column 1: Brand */}
                        <div className="col-span-1">
                            <div className="flex items-center gap-3">
                                <LogoIcon />
                                <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">Ano PreWed Studio</h2>
                            </div>
                            <p className="mt-4 text-sm">{t.footer.tagline}</p>
                        </div>
                        
                        {/* Column 2: Links */}
                        <div className="col-span-1">
                            <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">{t.footer.product}</h3>
                            <ul className="space-y-3 mt-4 text-sm">
                                <li><button onClick={() => setIsFeaturesModalOpen(true)} className="hover:text-primary-pink transition-colors">{t.footer.features}</button></li>
                                <li><button onClick={() => setIsFaqModalOpen(true)} className="hover:text-primary-pink transition-colors">{t.footer.faq}</button></li>
                            </ul>
                        </div>
                        
                        {/* Column 3: Social */}
                        <div className="col-span-1">
                            <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">{t.footer.followUs}</h3>
                            <div className="flex items-center gap-4 mt-4">
                                <a href="https://www.instagram.com/anotechhub/" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-75" aria-label="Instagram">
                                    <img src="https://cdn.simpleicons.org/instagram/9ca3af" alt="Instagram Icon" className="w-6 h-6" />
                                </a>
                                <a href="https://www.threads.net/@anotechhub" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-75" aria-label="Threads">
                                    <img src="https://cdn.simpleicons.org/threads/9ca3af" alt="Threads Icon" className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-700 text-center text-sm">
                        <p>&copy; {new Date().getFullYear()} Anotechhub. {t.footer.rights}</p>
                    </div>
                </div>
            </footer>

            {error && (
                <div role="alert" className="fixed bottom-8 right-8 z-50 max-w-md w-full p-4 bg-error text-white rounded-xl shadow-2xl transition-transform">
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <strong className="block font-medium">{t.app.errorTitle}</strong>
                            <p className="mt-1 text-sm">{error}</p>
                        </div>
                        <button onClick={() => setError(null)} className="ml-auto text-white/80 hover:text-white">&times;</button>
                    </div>
                </div>
            )}
            <FeaturesModal isOpen={isFeaturesModalOpen} onClose={() => setIsFeaturesModalOpen(false)} t={t.featuresModal} />
            <FaqModal isOpen={isFaqModalOpen} onClose={() => setIsFaqModalOpen(false)} t={t.faqModal} />
        </div>
    );
};

export default App;
