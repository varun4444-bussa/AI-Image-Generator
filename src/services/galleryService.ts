export interface SavedImage {
  id: string;
  prompt: string;
  imageUrl: string;
  style: 'realistic' | 'anime' | '3d' | 'artistic';
  createdAt: Date;
  userId: string;
}

export class GalleryService {
  private static readonly STORAGE_KEY = 'ai-canvas-gallery';

  static saveImage(image: Omit<SavedImage, 'id' | 'createdAt'>): SavedImage {
    const savedImage: SavedImage = {
      ...image,
      id: this.generateId(),
      createdAt: new Date()
    };

    const existingImages = this.getAllImages();
    const updatedImages = [savedImage, ...existingImages];
    
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updatedImages));
    return savedImage;
  }

  static getAllImages(): SavedImage[] {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (!stored) return [];
      
      const images = JSON.parse(stored);
      // Convert date strings back to Date objects
      return images.map((img: any) => ({
        ...img,
        createdAt: new Date(img.createdAt)
      }));
    } catch (error) {
      console.error('Error loading gallery images:', error);
      return [];
    }
  }

  static getImagesByUser(userId: string): SavedImage[] {
    return this.getAllImages().filter(img => img.userId === userId);
  }

  static deleteImage(imageId: string): boolean {
    try {
      const existingImages = this.getAllImages();
      const updatedImages = existingImages.filter(img => img.id !== imageId);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updatedImages));
      return true;
    } catch (error) {
      console.error('Error deleting image:', error);
      return false;
    }
  }

  static clearGallery(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }

  private static generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
}