import React, { useState } from 'react';
import { Sparkles, Download, Copy, Save, Palette, Zap, TrendingUp } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useImageGeneration } from '../hooks/useImageGeneration';
import { downloadImage } from '../services/imageGeneration';
import { GalleryService } from '../services/galleryService';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Dashboard: React.FC = () => {
  const { user, updateUser } = useAuth();
  const { generateImage, isGenerating, error, clearError } = useImageGeneration();
  const [prompt, setPrompt] = useState('');
  const [style] = useState<'realistic'>('realistic'); // Fixed style for Pollinations
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [generatedPrompt, setGeneratedPrompt] = useState<string>('');
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const styles = [
    { value: 'realistic', label: 'Realistic', icon: '📸' },
    { value: 'anime', label: 'Anime', icon: '🎨' },
    { value: '3d', label: '3D', icon: '🎭' },
    { value: 'artistic', label: 'Artistic', icon: '🖼️' }
  ];

  const trendingPrompts = [
    "A cyberpunk city at night with neon lights",
    "A magical forest with glowing flowers",
    "A futuristic spaceship in deep space",
    "A cozy cabin by a mountain lake",
    "A steampunk airship flying through clouds",
    // Extra trending prompts
    "A majestic lion wearing a crown, digital art",
    "A surreal dreamscape with floating islands",
    "A robot painting a self-portrait in an art studio",
    "A fantasy castle on top of a giant turtle",
    "A retro 80s synthwave landscape with palm trees",
    "A hyper-realistic portrait of a woman with galaxy hair",
    "A tiny astronaut exploring a giant flower",
    "A neon-lit rainy street in Tokyo, anime style",
    "A magical library with books flying around",
    "A dragon curled around a crystal mountain at sunset"
  ];

  const canGenerate = user && user.generationsToday < user.maxGenerations;

  const handleGenerate = async () => {
    if (!canGenerate || !prompt.trim()) return;

    clearError();
    
    try {
      const result = await generateImage({
        prompt: prompt.trim(),
        style: 'realistic', // Fixed style
        width: 512, // Reduced size
        height: 512
      });
      
      if (result) {
        setGeneratedImage(result.imageUrl);
        setGeneratedPrompt(result.prompt);
        
        // Update user's generation count
        if (user) {
          updateUser({ generationsToday: user.generationsToday + 1 });
        }
      }
    } catch (err) {
      console.error('Generation failed:', err);
    }
  };

  const handleDownload = () => {
    if (generatedImage) {
      const filename = `ai-canvas-${prompt.slice(0, 30).replace(/[^a-zA-Z0-9]/g, '-')}-${Date.now()}.jpg`;
      downloadImage(generatedImage, filename);
    }
  };

  const handleCopy = () => {
    if (generatedImage) {
      navigator.clipboard.writeText(generatedImage);
      alert('Image URL copied to clipboard!');
    }
  };

  const handleSave = () => {
    if (!generatedImage || !user) return;
    
    setIsSaving(true);
    try {
      GalleryService.saveImage({
        prompt: generatedPrompt || prompt,
        imageUrl: generatedImage,
        style,
        userId: user.id
      });
      
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (error) {
      console.error('Failed to save image:', error);
      alert('Failed to save image. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: '#e0f2fe' }}>
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 text-purple-700 dark:text-purple-300 mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Creative Dashboard</span>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-2">
            Welcome back, {user.displayName}! ✨
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Let's create something amazing today.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 shadow-xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Generations Today</p>
                <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {user.generationsToday}/{user.maxGenerations}
                </p>
              </div>
              <div className="p-4 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl shadow-lg">
                <Zap className="w-7 h-7 text-purple-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Plan</p>
                <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent capitalize">
                  {user.subscription}
                </p>
              </div>
              <div className="p-4 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-2xl shadow-lg">
                <Sparkles className="w-7 h-7 text-blue-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Images Created</p>
                <p className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">0</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-2xl shadow-lg">
                <Palette className="w-7 h-7 text-green-600" />
              </div>
            </div>
          </Card>
        </div>

        {/* Main two-column layout for generation form and image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Generation Form Panel */}
          <div className="flex flex-col h-full">
            <Card className="p-8 shadow-xl relative overflow-hidden flex flex-col justify-center h-full min-h-[500px]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full -translate-y-16 translate-x-16"></div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-8 flex items-center">
                <Sparkles className="w-6 h-6 mr-2 text-purple-600" />
                Create New Image
              </h2>
              {/* Prompt Input */}
              <div className="mb-6 flex-1 flex flex-col">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Describe your image
                </label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="A futuristic city floating in space with neon lights and flying cars..."
                  className="w-full h-32 px-4 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none shadow-inner flex-1"
                  maxLength={500}
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {prompt.length}/500 characters
                </p>
              </div>
              {/* Generate Button and error */}
              <div>
                <Button
                  onClick={handleGenerate}
                  disabled={!canGenerate || !prompt.trim()}
                  isLoading={isGenerating}
                  size="lg"
                  className="w-full text-lg py-4"
                >
                  {isGenerating ? 'Generating...' : 'Generate Image'}
                  <Sparkles className="ml-2 w-5 h-5" />
                </Button>
                {!canGenerate && (
                  <p className="text-sm text-amber-600 dark:text-amber-400 mt-2">
                    You've reached your daily generation limit. Upgrade to Pro for unlimited generations.
                  </p>
                )}
                {error && (
                  <div className="mt-4 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border border-red-200/50 dark:border-red-800/50 rounded-xl p-4 backdrop-blur-sm">
                    <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
                    <Button
                      onClick={clearError}
                      variant="ghost"
                      size="sm"
                      className="mt-2 text-red-600 dark:text-red-400"
                    >
                      Dismiss
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* Generated Image Panel */}
          <div className="flex flex-col h-full">
            <Card className="p-8 shadow-xl relative overflow-hidden flex flex-col justify-center h-full min-h-[500px]">
              <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full -translate-y-12 -translate-x-12"></div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6 flex items-center">
                <Palette className="w-5 h-5 mr-2 text-blue-600" />
                Generated Image
              </h3>
              <div className="flex flex-col items-center flex-1">
                <div className="aspect-square w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center shadow-inner mb-4">
                  {isGenerating ? (
                    <div className="flex flex-col items-center justify-center w-full h-full">
                      <img
                        src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
                        alt="Loading..."
                        className="w-32 h-32 object-contain mx-auto mb-6 opacity-80"
                      />
                      <p className="text-lg font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Creating your masterpiece...</p>
                    </div>
                  ) : generatedImage ? (
                    <img
                      src={generatedImage}
                      alt="Generated artwork"
                      className="w-full h-full object-contain rounded-2xl"
                    />
                  ) : (
                    <div className="text-gray-400 dark:text-gray-600 text-center w-full">No image generated yet.</div>
                  )}
                </div>
                {/* Details and actions always visible below the image/loading */}
                <div className="space-y-4 w-full">
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Button onClick={handleDownload} variant="outline" size="sm" disabled={!generatedImage}>
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                    <Button onClick={handleCopy} variant="outline" size="sm" disabled={!generatedImage}>
                      <Copy className="w-4 h-4 mr-2" />
                      Copy URL
                    </Button>
                    <Button onClick={handleSave} variant="outline" size="sm" disabled={!generatedImage}>
                      <Save className={`w-4 h-4 mr-2 ${saveSuccess ? 'text-green-600' : ''}`} />
                      {isSaving ? 'Saving...' : saveSuccess ? 'Saved!' : 'Save to Gallery'}
                    </Button>
                  </div>
                  {saveSuccess && (
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200/50 dark:border-green-800/50 rounded-xl p-3 backdrop-blur-sm">
                      <p className="text-sm text-green-600 dark:text-green-400 flex items-center">
                        <Save className="w-4 h-4 mr-2" />
                        Image saved to your gallery successfully!
                      </p>
                    </div>
                  )}
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100/50 dark:from-gray-800 dark:to-gray-700/50 rounded-xl p-4 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong>Original Prompt:</strong> {prompt}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      <strong>Enhanced Prompt:</strong> {generatedPrompt}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      <strong>Style:</strong> Realistic
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      <strong>Resolution:</strong> 512x512px
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Trending Prompts below both panels */}
        <div className="mt-8">
          <Card className="p-8 shadow-xl relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full translate-y-20 translate-x-20"></div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2" />
              Trending Prompts
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {trendingPrompts.map((trendingPrompt, index) => (
                <button
                  key={index}
                  onClick={() => setPrompt(trendingPrompt)}
                  className="text-left p-4 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100/50 dark:from-gray-800 dark:to-gray-700/50 border border-gray-200/50 dark:border-gray-700/50 transition-all duration-200 shadow-sm hover:shadow-xl hover:scale-105 hover:z-10 hover:bg-blue-100 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  style={{ boxShadow: '0 2px 8px 0 rgba(0, 120, 255, 0.08)' }}
                >
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {trendingPrompt}
                  </p>
                </button>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;