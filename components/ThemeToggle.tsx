import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/contexts/ThemeContext';
import { Colors } from '@/constants/Colors';

interface ThemeToggleProps {
  size?: 'small' | 'medium' | 'large';
}

export function ThemeToggle({ size = 'medium' }: ThemeToggleProps) {
  const { colorScheme, toggleColorScheme } = useTheme();
  const isDark = colorScheme === 'dark';
  
  const iconSize = size === 'small' ? 20 : size === 'medium' ? 24 : 28;
  const buttonSize = size === 'small' ? 36 : size === 'medium' ? 44 : 52;
  
  return (
    <Pressable
      style={[
        styles.button,
        {
          width: buttonSize,
          height: buttonSize,
          backgroundColor: isDark ? Colors.gray[800] : Colors.gray[200],
        }
      ]}
      onPress={toggleColorScheme}
    >
      <Ionicons
        name={isDark ? 'sunny' : 'moon'}
        size={iconSize}
        color={isDark ? Colors.warning[400] : Colors.gray[700]}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});