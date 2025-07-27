import React from 'react';
import { Pressable, StyleSheet, Animated, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

interface FloatingActionButtonProps {
  onPress: () => void;
  icon?: keyof typeof Ionicons.glyphMap;
  size?: 'small' | 'medium' | 'large';
  color?: string;
  position?: {
    bottom?: number;
    right?: number;
    left?: number;
    top?: number;
  };
  mini?: boolean;
  extended?: boolean;
  label?: string;
}

const SIZES = {
  small: 40,
  medium: 56,
  large: 72,
};

const ICON_SIZES = {
  small: 20,
  medium: 24,
  large: 32,
};

export function FloatingActionButton({
  onPress,
  icon = 'flag',
  size = 'medium',
  color,
  position = { bottom: 24, right: 24 },
  mini = false,
}: FloatingActionButtonProps) {
  const colorScheme = useColorScheme();
  const [scaleValue] = React.useState(new Animated.Value(1));

  const buttonSize = mini ? SIZES.small : SIZES[size];
  const iconSize = mini ? ICON_SIZES.small : ICON_SIZES[size];
  const backgroundColor = color || Colors.secondary[500];

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      style={[
        styles.container,
        position,
        {
          transform: [{ scale: scaleValue }],
        },
      ]}
    >
      <Pressable
        style={[
          styles.button,
          {
            width: buttonSize,
            height: buttonSize,
            backgroundColor,
          },
        ]}
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Ionicons name={icon} size={iconSize} color={Colors.white} />
      </Pressable>
    </Animated.View>
  );
}

interface SpeedDialProps {
  open: boolean;
  onToggle: () => void;
  actions: Array<{
    icon: keyof typeof Ionicons.glyphMap;
    label: string;
    onPress: () => void;
    color?: string;
  }>;
  mainIcon?: keyof typeof Ionicons.glyphMap;
  position?: {
    bottom?: number;
    right?: number;
    left?: number;
    top?: number;
  };
}

export function SpeedDial({
  open,
  onToggle,
  actions,
  mainIcon = 'add',
  position = { bottom: 24, right: 24 },
}: SpeedDialProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const [animation] = React.useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.timing(animation, {
      toValue: open ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [open]);

  const rotation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '45deg'],
  });

  return (
    <>
      {/* Backdrop */}
      {open && (
        <Pressable 
          style={styles.backdrop} 
          onPress={onToggle}
        />
      )}

      {/* Speed Dial Actions */}
      {actions.map((action, index) => {
        const translateY = animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -(index + 1) * 64],
        });

        const opacity = animation.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [0, 0, 1],
        });

        return (
          <Animated.View
            key={index}
            style={[
              styles.speedDialAction,
              position,
              {
                opacity,
                transform: [{ translateY }],
              },
            ]}
          >
            <View style={styles.labelContainer}>
              <View style={[styles.label, { backgroundColor: colors.cardBackground }]}>
                <Animated.Text style={[styles.labelText, { color: colors.text }]}>
                  {action.label}
                </Animated.Text>
              </View>
            </View>
            <Pressable
              style={[
                styles.miniButton,
                { backgroundColor: action.color || Colors.primary[600] },
              ]}
              onPress={() => {
                action.onPress();
                onToggle();
              }}
            >
              <Ionicons name={action.icon} size={20} color={Colors.white} />
            </Pressable>
          </Animated.View>
        );
      })}

      {/* Main FAB */}
      <Animated.View style={[styles.container, position]}>
        <Pressable
          style={[
            styles.button,
            { backgroundColor: Colors.secondary[500] },
          ]}
          onPress={onToggle}
        >
          <Animated.View style={{ transform: [{ rotate: rotation }] }}>
            <Ionicons name={mainIcon} size={24} color={Colors.white} />
          </Animated.View>
        </Pressable>
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 999,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 998,
  },
  speedDialAction: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 999,
  },
  labelContainer: {
    marginRight: 8,
  },
  label: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  labelText: {
    fontSize: 14,
    fontWeight: '500',
  },
  miniButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});