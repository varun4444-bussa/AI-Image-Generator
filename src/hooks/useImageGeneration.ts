import { useState } from 'react';
import { ImageGenerationService, GenerationOptions, GeneratedImageResult } from '../services/imageGeneration';

export interface UseImageGenerationReturn {
  generateImage: (options: GenerationOptions) => Promise<GeneratedImageResult | null>;
  isGenerating: boolean;
  error: string | null;
  clearError: () => void;
}

export const useImageGeneration = (): UseImageGenerationReturn => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateImage = async (options: GenerationOptions): Promise<GeneratedImageResult | null> => {
    setIsGenerating(true);
    setError(null);
    try {
      const result = await ImageGenerationService.generateImage(options);
      return result;
    } catch (err) {
      console.error('Image generation failed:', err);
      setError('Failed to generate image. Please try again.');
      return null;
    } finally {
      setIsGenerating(false);
    }
  };

  const clearError = () => {
    setError(null);
  };

  return {
    generateImage,
    isGenerating,
    error,
    clearError
  };
};