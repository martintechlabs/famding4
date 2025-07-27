import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

interface FamilyAvatarProps {
  name: string;
  imageUrl?: string;
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  showName?: boolean;
  isOnline?: boolean;
  onPress?: () => void;
  backgroundColor?: string;
}

const SIZES = {
  small: 32,
  medium: 40,
  large: 56,
  xlarge: 80,
};

const FONT_SIZES = {
  small: 14,
  medium: 18,
  large: 24,
  xlarge: 32,
};

export function FamilyAvatar({
  name,
  imageUrl,
  size = 'medium',
  showName = false,
  isOnline = false,
  onPress,
  backgroundColor,
}: FamilyAvatarProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const avatarSize = SIZES[size];
  const fontSize = FONT_SIZES[size];

  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  const defaultBackgroundColor = backgroundColor || Colors.primary[200];
  const textColor = backgroundColor ? Colors.white : Colors.primary[700];

  const avatarContent = (
    <>
      {imageUrl ? (
        <Image source={{ uri: imageUrl }} style={[styles.image, { width: avatarSize, height: avatarSize }]} />
      ) : (
        <View 
          style={[
            styles.placeholder, 
            { 
              width: avatarSize, 
              height: avatarSize,
              backgroundColor: defaultBackgroundColor,
            }
          ]}
        >
          <Text style={[styles.initials, { fontSize, color: textColor }]}>{initials}</Text>
        </View>
      )}
      {isOnline && (
        <View 
          style={[
            styles.onlineIndicator, 
            { 
              width: avatarSize * 0.25,
              height: avatarSize * 0.25,
              borderWidth: avatarSize * 0.05,
              right: -avatarSize * 0.05,
              bottom: -avatarSize * 0.05,
            }
          ]} 
        />
      )}
    </>
  );

  return (
    <View style={styles.container}>
      {onPress ? (
        <Pressable onPress={onPress} style={styles.avatarWrapper}>
          {avatarContent}
        </Pressable>
      ) : (
        <View style={styles.avatarWrapper}>
          {avatarContent}
        </View>
      )}
      {showName && (
        <Text style={[styles.name, { color: colors.text }]} numberOfLines={1}>
          {name.split(' ')[0]}
        </Text>
      )}
    </View>
  );
}

interface AvatarGroupProps {
  avatars: Array<{
    name: string;
    imageUrl?: string;
  }>;
  max?: number;
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  onPressMore?: () => void;
}

export function AvatarGroup({ avatars, max = 3, size = 'small', onPressMore }: AvatarGroupProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const avatarSize = SIZES[size];
  const overlap = avatarSize * 0.3;

  const displayAvatars = avatars.slice(0, max);
  const remainingCount = avatars.length - max;

  return (
    <View style={styles.groupContainer}>
      {displayAvatars.map((avatar, index) => (
        <View 
          key={index} 
          style={[
            styles.groupAvatar,
            { 
              marginLeft: index === 0 ? 0 : -overlap,
              zIndex: displayAvatars.length - index,
            }
          ]}
        >
          <FamilyAvatar {...avatar} size={size} />
        </View>
      ))}
      {remainingCount > 0 && (
        <Pressable 
          onPress={onPressMore}
          style={[
            styles.moreButton,
            {
              width: avatarSize,
              height: avatarSize,
              marginLeft: -overlap,
              backgroundColor: colors.backgroundSecondary,
            }
          ]}
        >
          <Text style={[styles.moreText, { color: colors.text }]}>+{remainingCount}</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  avatarWrapper: {
    position: 'relative',
  },
  image: {
    borderRadius: 999,
  },
  placeholder: {
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  initials: {
    fontWeight: '600',
  },
  onlineIndicator: {
    position: 'absolute',
    backgroundColor: Colors.success[500],
    borderRadius: 999,
    borderColor: Colors.white,
  },
  name: {
    fontSize: 12,
    marginTop: 4,
    fontWeight: '500',
  },
  groupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  groupAvatar: {
    borderRadius: 999,
    borderWidth: 2,
    borderColor: Colors.white,
  },
  moreButton: {
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.white,
  },
  moreText: {
    fontSize: 14,
    fontWeight: '600',
  },
});