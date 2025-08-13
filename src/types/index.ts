export interface User {
  id: string;
  email: string;
  displayName: string;
  photoURL?: string;
  subscription: 'free' | 'pro';
  generationsToday: number;
  maxGenerations: number;
}

export interface GeneratedImage {
  id: string;
  prompt: string;
  imageUrl: string;
  style: 'realistic' | 'anime' | '3d' | 'artistic';
  createdAt: Date;
  userId: string;
}

export interface SavedImage {
  id: string;
  prompt: string;
  imageUrl: string;
  style: 'realistic' | 'anime' | '3d' | 'artistic';
  createdAt: Date;
  userId: string;
}

export interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, displayName: string) => Promise<void>;
  logout: () => Promise<void>;
  updateUser: (updates: Partial<User>) => void;
  loginWithGoogle: () => Promise<void>;
}

export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}