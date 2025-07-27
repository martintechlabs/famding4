import React from 'react';
import { Pressable, Text, StyleSheet, ActivityIndicator, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

interface FamDingButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  icon?: keyof typeof Ionicons.glyphMap;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
}

const SIZES = {
  small: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    fontSize: 14,
    iconSize: 16,
  },
  medium: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    fontSize: 16,
    iconSize: 20,
  },
  large: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    fontSize: 18,
    iconSize: 24,
  },
};

export function FamDingButton({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  icon,
  iconPosition = 'left',
  loading = false,
  disabled = false,
  fullWidth = false,
}: FamDingButtonProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const sizeConfig = SIZES[size];

  const getButtonStyles = () => {
    const baseStyles = {
      paddingVertical: sizeConfig.paddingVertical,
      paddingHorizontal: sizeConfig.paddingHorizontal,
      opacity: disabled || loading ? 0.6 : 1,
    };

    switch (variant) {
      case 'primary':
        return {
          ...baseStyles,
          backgroundColor: Colors.primary[600],
        };
      case 'secondary':
        return {
          ...baseStyles,
          backgroundColor: Colors.secondary[500],
        };
      case 'outline':
        return {
          ...baseStyles,
          backgroundColor: 'transparent',
          borderWidth: 2,
          borderColor: Colors.primary[600],
        };
      case 'ghost':
        return {
          ...baseStyles,
          backgroundColor: 'transparent',
        };
    }
  };

  const getTextStyles = () => {
    const baseStyles = {
      fontSize: sizeConfig.fontSize,
      fontWeight: '600' as const,
    };

    switch (variant) {
      case 'primary':
      case 'secondary':
        return {
          ...baseStyles,
          color: Colors.white,
        };
      case 'outline':
        return {
          ...baseStyles,
          color: Colors.primary[600],
        };
      case 'ghost':
        return {
          ...baseStyles,
          color: colors.text,
        };
    }
  };

  const getIconColor = () => {
    switch (variant) {
      case 'primary':
      case 'secondary':
        return Colors.white;
      case 'outline':
        return Colors.primary[600];
      case 'ghost':
        return colors.text;
    }
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        getButtonStyles(),
        fullWidth && styles.fullWidth,
        pressed && styles.pressed,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color={getIconColor()} size="small" />
      ) : (
        <View style={styles.content}>
          {icon && iconPosition === 'left' && (
            <Ionicons
              name={icon}
              size={sizeConfig.iconSize}
              color={getIconColor()}
              style={styles.iconLeft}
            />
          )}
          <Text style={getTextStyles()}>{title}</Text>
          {icon && iconPosition === 'right' && (
            <Ionicons
              name={icon}
              size={sizeConfig.iconSize}
              color={getIconColor()}
              style={styles.iconRight}
            />
          )}
        </View>
      )}
    </Pressable>
  );
}

interface ButtonGroupProps {
  children: React.ReactNode;
  direction?: 'horizontal' | 'vertical';
  spacing?: number;
}

export function ButtonGroup({ children, direction = 'horizontal', spacing = 8 }: ButtonGroupProps) {
  return (
    <View style={[
      styles.buttonGroup,
      direction === 'horizontal' ? styles.horizontal : styles.vertical,
      { gap: spacing }
    ]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  fullWidth: {
    width: '100%',
  },
  pressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
  buttonGroup: {
    flexWrap: 'wrap',
  },
  horizontal: {
    flexDirection: 'row',
  },
  vertical: {
    flexDirection: 'column',
  },
});