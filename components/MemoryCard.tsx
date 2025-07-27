import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

interface MemoryCardProps {
  id: string;
  authorName: string;
  authorAvatar?: string;
  timestamp: string;
  content: string;
  mediaUrl?: string;
  mediaType?: 'photo' | 'video';
  reactions?: {
    type: string;
    count: number;
  }[];
  isFavorited?: boolean;
  onPress?: () => void;
  onFavorite?: () => void;
  onReact?: () => void;
}

export function MemoryCard({
  authorName,
  authorAvatar,
  timestamp,
  content,
  mediaUrl,
  mediaType,
  reactions = [],
  isFavorited = false,
  onPress,
  onFavorite,
  onReact,
}: MemoryCardProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return (
    <Pressable 
      style={[
        styles.container,
        { 
          backgroundColor: colors.cardBackground,
          borderColor: colors.border,
        }
      ]}
      onPress={onPress}
    >
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.authorInfo}>
          {authorAvatar ? (
            <Image source={{ uri: authorAvatar }} style={styles.avatar} />
          ) : (
            <View style={[styles.avatarPlaceholder, { backgroundColor: Colors.primary[200] }]}>
              <Text style={[styles.avatarInitial, { color: Colors.primary[700] }]}>
                {authorName.charAt(0).toUpperCase()}
              </Text>
            </View>
          )}
          <View style={styles.authorDetails}>
            <Text style={[styles.authorName, { color: colors.text }]}>{authorName}</Text>
            <Text style={[styles.timestamp, { color: colors.textSecondary }]}>{timestamp}</Text>
          </View>
        </View>
        {isFavorited && (
          <View style={[styles.favoriteBadge, { backgroundColor: Colors.secondary[100] }]}>
            <Ionicons name="heart" size={16} color={Colors.secondary[600]} />
          </View>
        )}
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={[styles.contentText, { color: colors.text }]}>{content}</Text>
      </View>

      {/* Media */}
      {mediaUrl && (
        <View style={styles.mediaContainer}>
          {mediaType === 'photo' ? (
            <Image source={{ uri: mediaUrl }} style={styles.media} resizeMode="cover" />
          ) : (
            <View style={[styles.videoPlaceholder, { backgroundColor: colors.backgroundSecondary }]}>
              <Ionicons name="play-circle" size={48} color={colors.icon} />
            </View>
          )}
        </View>
      )}

      {/* Actions */}
      <View style={[styles.actions, { borderTopColor: colors.border }]}>
        <Pressable style={styles.actionButton} onPress={onReact}>
          <Ionicons name="heart-outline" size={20} color={colors.icon} />
          <Text style={[styles.actionText, { color: colors.textSecondary }]}>
            {reactions.reduce((sum, r) => sum + r.count, 0) || 'React'}
          </Text>
        </Pressable>
        
        <Pressable style={styles.actionButton} onPress={onFavorite}>
          <Ionicons 
            name={isFavorited ? "heart" : "heart-outline"} 
            size={20} 
            color={isFavorited ? Colors.secondary[600] : colors.icon} 
          />
          <Text style={[
            styles.actionText, 
            { color: isFavorited ? Colors.secondary[600] : colors.textSecondary }
          ]}>
            {isFavorited ? 'Favorited' : 'Favorite'}
          </Text>
        </Pressable>
        
        <Pressable style={styles.actionButton}>
          <Ionicons name="share-outline" size={20} color={colors.icon} />
          <Text style={[styles.actionText, { color: colors.textSecondary }]}>Share</Text>
        </Pressable>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  authorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  avatarPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarInitial: {
    fontSize: 18,
    fontWeight: '600',
  },
  authorDetails: {
    flex: 1,
  },
  authorName: {
    fontSize: 16,
    fontWeight: '600',
  },
  timestamp: {
    fontSize: 14,
    marginTop: 2,
  },
  favoriteBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  contentText: {
    fontSize: 16,
    lineHeight: 24,
  },
  mediaContainer: {
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  media: {
    width: '100%',
    height: 200,
  },
  videoPlaceholder: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actions: {
    flexDirection: 'row',
    borderTopWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 16,
  },
  actionText: {
    fontSize: 14,
    marginLeft: 6,
  },
});