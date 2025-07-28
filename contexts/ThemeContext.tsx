import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme as useSystemColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

type ColorScheme = 'light' | 'dark';

interface ThemeContextType {
  colorScheme: ColorScheme;
  toggleColorScheme: () => void;
  isSystemTheme: boolean;
  setSystemTheme: (useSystem: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const systemColorScheme = useSystemColorScheme() ?? 'light';
  const [isSystemTheme, setIsSystemTheme] = useState(true);
  const [userColorScheme, setUserColorScheme] = useState<ColorScheme>('light');
  
  const colorScheme = isSystemTheme ? systemColorScheme : userColorScheme;

  useEffect(() => {
    // Load saved theme preference
    loadThemePreference();
  }, []);

  const loadThemePreference = async () => {
    if (Platform.OS === 'web') {
      // Use localStorage for web
      try {
        const savedTheme = localStorage.getItem('userTheme');
        const savedIsSystem = localStorage.getItem('isSystemTheme');
        
        if (savedTheme) {
          setUserColorScheme(savedTheme as ColorScheme);
        }
        if (savedIsSystem !== null) {
          setIsSystemTheme(savedIsSystem === 'true');
        }
      } catch (error) {
        console.error('Error loading theme preference:', error);
      }
    } else {
      // Use AsyncStorage for mobile
      try {
        const savedTheme = await AsyncStorage.getItem('userTheme');
        const savedIsSystem = await AsyncStorage.getItem('isSystemTheme');
        
        if (savedTheme) {
          setUserColorScheme(savedTheme as ColorScheme);
        }
        if (savedIsSystem !== null) {
          setIsSystemTheme(savedIsSystem === 'true');
        }
      } catch (error) {
        console.error('Error loading theme preference:', error);
      }
    }
  };

  const toggleColorScheme = async () => {
    const newScheme = colorScheme === 'light' ? 'dark' : 'light';
    setUserColorScheme(newScheme);
    setIsSystemTheme(false);
    
    if (Platform.OS === 'web') {
      // Use localStorage for web
      try {
        localStorage.setItem('userTheme', newScheme);
        localStorage.setItem('isSystemTheme', 'false');
      } catch (error) {
        console.error('Error saving theme preference:', error);
      }
    } else {
      // Use AsyncStorage for mobile
      try {
        await AsyncStorage.setItem('userTheme', newScheme);
        await AsyncStorage.setItem('isSystemTheme', 'false');
      } catch (error) {
        console.error('Error saving theme preference:', error);
      }
    }
  };

  const setSystemTheme = async (useSystem: boolean) => {
    setIsSystemTheme(useSystem);
    
    if (Platform.OS === 'web') {
      // Use localStorage for web
      try {
        localStorage.setItem('isSystemTheme', useSystem.toString());
      } catch (error) {
        console.error('Error saving theme preference:', error);
      }
    } else {
      // Use AsyncStorage for mobile
      try {
        await AsyncStorage.setItem('isSystemTheme', useSystem.toString());
      } catch (error) {
        console.error('Error saving theme preference:', error);
      }
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        colorScheme,
        toggleColorScheme,
        isSystemTheme,
        setSystemTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}