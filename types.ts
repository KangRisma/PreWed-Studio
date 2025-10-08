export interface GenerationConfig {
  photoType: 'Pre-wedding' | 'Wedding';
  poseStyle: string;
  customPoseStyle?: string;
  backgroundStyle: string;
  customBackgroundStyle?: string;
  lightingStyle: string;
  customLightingStyle?: string;
  outfitStyle: string;
  customOutfitStyle?: string;
  extraInstructions: string;
  useWatermark: boolean;
  customWatermark: string;
}

export interface GeneratedImage {
  imageUrl: string;
  prompt: string;
}

export interface ResultItem {
  id: number;
  status: 'empty' | 'generating' | 'completed' | 'error' | 'upscaling';
  data?: GeneratedImage;
  errorMessage?: string;
  upscaledImageUrl?: string;
}
