import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContextType, User } from '../types';
import { auth, googleProvider } from '../services/firebase';
import { signInWithPopup } from 'firebase/auth';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate checking for existing session
    const checkAuth = async () => {
      try {
        const savedUser = localStorage.getItem('ai-canvas-user');
        if (savedUser) {
          setUser(JSON.parse(savedUser));
        }
      } catch (error) {
        console.error('Error checking auth:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Mock login - replace with actual Firebase auth if needed
      const mockUser: User = {
        id: '1',
        email,
        displayName: email.split('@')[0],
        subscription: 'free',
        generationsToday: 0,
        maxGenerations: 20
      };
      setUser(mockUser);
      localStorage.setItem('ai-canvas-user', JSON.stringify(mockUser));
    } catch (error) {
      throw new Error('Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const firebaseUser = result.user;
      const appUser: User = {
        id: firebaseUser.uid,
        email: firebaseUser.email || '',
        displayName: firebaseUser.displayName || '',
        photoURL: firebaseUser.photoURL || '',
        subscription: 'free',
        generationsToday: 0,
        maxGenerations: 20
      };
      setUser(appUser);
      localStorage.setItem('ai-canvas-user', JSON.stringify(appUser));
    } catch (error) {
      throw new Error('Google login failed');
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (email: string, password: string, displayName: string) => {
    setIsLoading(true);
    try {
      // Mock registration - replace with actual Firebase auth
      const mockUser: User = {
        id: '1',
        email,
        displayName,
        subscription: 'free',
        generationsToday: 0,
        maxGenerations: 20
      };
      setUser(mockUser);
      localStorage.setItem('ai-canvas-user', JSON.stringify(mockUser));
    } catch (error) {
      throw new Error('Registration failed');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setUser(null);
    localStorage.removeItem('ai-canvas-user');
    navigate('/');
  };

  const updateUser = (updates: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      localStorage.setItem('ai-canvas-user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout, updateUser, loginWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};