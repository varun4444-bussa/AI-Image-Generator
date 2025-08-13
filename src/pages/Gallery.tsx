import React, { useState } from 'react';
import { Download, Copy, Trash2, Eye, Calendar, Search, Filter, Camera } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { downloadImage } from '../services/imageGeneration';
import { GalleryService } from '../services/galleryService';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Gallery: React.FC = () => {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStyle, setSelectedStyle] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [galleryImages, setGalleryImages] = useState(() => {
    return user ? GalleryService.getImagesByUser(user.id) : [];
  });

  // Refresh gallery when component mounts or user changes
  React.useEffect(() => {
    if (user) {
      setGalleryImages(GalleryService.getImagesByUser(user.id));
    }
  }, [user]);

  const filteredImages = galleryImages.filter(image => {
    const matchesSearch = image.prompt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStyle = selectedStyle === 'all' || image.style === selectedStyle;
    return matchesSearch && matchesStyle;
  });

  const handleDownload = (imageUrl: string, prompt: string) => {
    const filename = `ai-canvas-${prompt.slice(0, 30).replace(/[^a-zA-Z0-9]/g, '-')}-${Date.now()}.jpg`;
    downloadImage(imageUrl, filename);
  };

  const handleCopy = (imageUrl: string) => {
    navigator.clipboard.writeText(imageUrl);
    alert('Image URL copied to clipboard!');
  };

  const handleDelete = (imageId: string) => {
    if (confirm('Are you sure you want to delete this image?')) {
      const success = GalleryService.deleteImage(imageId);
      if (success) {
        setGalleryImages(prev => prev.filter(img => img.id !== imageId));
      } else {
        alert('Failed to delete image. Please try again.');
      }
    }
  };

  const styles = [
    { value: 'all', label: 'All Styles' },
    { value: 'realistic', label: 'Realistic' },
    { value: 'anime', label: 'Anime' },
    { value: '3d', label: '3D' },
    { value: 'artistic', label: 'Artistic' },
  ];

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: '#e0f2fe' }}>
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 text-blue-700 dark:text-blue-300 mb-4">
            <Camera className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Your Creative Collection</span>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent mb-2">
            My Gallery
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            All your AI-generated masterpieces in one place
          </p>
        </div>

        {/* Filters */}
        <Card className="p-6 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search your images..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-inner"
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={selectedStyle}
                onChange={(e) => setSelectedStyle(e.target.value)}
                className="px-4 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-inner"
              >
                {styles.map(style => (
                  <option key={style.value} value={style.value}>
                    {style.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </Card>

        {/* Gallery Grid */}
        {filteredImages.length === 0 ? (
          <Card className="p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-blue-50/30 dark:from-gray-800/50 dark:to-blue-900/20"></div>
            <div className="text-gray-400 mb-4">
              <Calendar className="w-16 h-16 mx-auto mb-4" />
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-600 to-blue-600 bg-clip-text text-transparent mb-2">
              No images found
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {searchTerm || selectedStyle !== 'all' 
                ? 'Try adjusting your search or filter criteria'
                : 'Start creating some amazing AI art in the Dashboard to build your gallery!'
              }
            </p>
          </Card>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <Card key={image.id} className="overflow-hidden group hover:shadow-2xl hover:shadow-blue-500/10">
                <div className="relative">
                  <img
                    src={image.imageUrl}
                    alt={image.prompt}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <Button
                      onClick={() => setSelectedImage(image.imageUrl)}
                      variant="secondary"
                      size="sm"
                      className="bg-white/95 backdrop-blur-sm text-gray-900 hover:bg-white shadow-lg"
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="p-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 line-clamp-2">
                    {image.prompt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-3">
                    <span className="capitalize bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-600 px-3 py-1 rounded-full font-medium">
                      {image.style}
                    </span>
                    <span>{image.createdAt.toLocaleDateString()}</span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button
                      onClick={() => handleDownload(image.imageUrl, image.prompt)}
                      variant="outline"
                      size="sm"
                      className="flex-1"
                    >
                      <Download className="w-3 h-3 mr-1" />
                      Download
                    </Button>
                    <Button
                      onClick={() => handleCopy(image.imageUrl)}
                      variant="outline"
                      size="sm"
                    >
                      <Copy className="w-3 h-3" />
                    </Button>
                    <Button
                      onClick={() => handleDelete(image.id)}
                      variant="outline"
                      size="sm"
                      className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
                    >
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl max-h-full rounded-2xl overflow-hidden">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200 z-10"
              >
                ×
              </button>
              <img
                src={selectedImage}
                alt="Full size"
                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;