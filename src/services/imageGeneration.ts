export interface GenerationOptions {
  prompt: string;
  style: 'realistic' | 'anime' | '3d' | 'artistic';
  width?: number;
  height?: number;
}

export interface GeneratedImageResult {
  imageUrl: string;
  prompt: string;
  style: string;
  timestamp: number;
}

// Style modifiers to enhance prompts based on selected style
const styleModifiers = {
  realistic: 'photorealistic, high quality, detailed, professional photography',
  anime: 'anime style, manga art, japanese animation, vibrant colors',
  '3d': '3D render, cinema4d, blender, octane render, volumetric lighting',
  artistic: 'digital art, painting, artistic, creative, expressive brushstrokes'
};

export class ImageGenerationService {
  static async generateImage(options: GenerationOptions): Promise<GeneratedImageResult> {
    const { prompt, style, width = 1024, height = 1024 } = options;
    // Enhance prompt with style modifiers
    const enhancedPrompt = `${prompt}, ${styleModifiers[style]}`;
    // Pollinations API URL
    const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(enhancedPrompt)}?width=${width}&height=${height}`;
    return {
      imageUrl,
      prompt: enhancedPrompt,
      style,
      timestamp: Date.now()
    };
  }
}

export const downloadImage = async (imageUrl: string, filename: string): Promise<void> => {
  try {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Download failed:', error);
    window.open(imageUrl, '_blank');
  }
};