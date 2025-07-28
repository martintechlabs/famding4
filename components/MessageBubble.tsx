import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { useTheme } from '@/contexts/ThemeContext';
import { FamilyAvatar } from './FamilyAvatar';

interface MessageBubbleProps {
  id: string;
  message: string;
  timestamp: string;
  authorName: string;
  authorAvatar?: string;
  isOwn?: boolean;
  type?: 'text' | 'voice' | 'image' | 'video';
  mediaUrl?: string;
  duration?: string; // For voice messages
  status?: 'sending' | 'sent' | 'delivered' | 'read';
  onPress?: () => void;
  onLongPress?: () => void;
}

export function MessageBubble({
  message,
  timestamp,
  authorName,
  authorAvatar,
  isOwn = false,
  type = 'text',
  mediaUrl,
  duration,
  status = 'sent',
  onPress,
  onLongPress,
}: MessageBubbleProps) {
  const { colorScheme } = useTheme();
  const colors = Colors[colorScheme ?? 'light'];

  const bubbleBackgroundColor = isOwn 
    ? Colors.primary[600] 
    : colorScheme === 'dark' 
      ? Colors.gray[700] 
      : Colors.gray[100];

  const textColor = isOwn 
    ? Colors.white 
    : colors.text;

  const timestampColor = isOwn 
    ? Colors.primary[100] 
    : colors.textSecondary;

  const renderContent = () => {
    switch (type) {
      case 'text':
        return (
          <Text style={[styles.messageText, { color: textColor }]}>
            {message}
          </Text>
        );
      
      case 'voice':
        return (
          <View style={styles.voiceMessage}>
            <Ionicons 
              name="mic" 
              size={20} 
              color={textColor} 
            />
            <View style={[styles.voiceWaveform, { backgroundColor: textColor }]} />
            <Text style={[styles.voiceDuration, { color: textColor }]}>
              {duration || '0:00'}
            </Text>
          </View>
        );
      
      case 'image':
        return (
          <View style={styles.mediaContainer}>
            {mediaUrl && (
              <Image 
                source={{ uri: mediaUrl }} 
                style={styles.messageImage}
                resizeMode="cover"
              />
            )}
            {message && (
              <Text style={[styles.mediaCaption, { color: textColor }]}>
                {message}
              </Text>
            )}
          </View>
        );
      
      case 'video':
        return (
          <View style={styles.mediaContainer}>
            <View style={styles.videoPlaceholder}>
              <Ionicons 
                name="play-circle" 
                size={48} 
                color={Colors.white} 
              />
            </View>
            {message && (
              <Text style={[styles.mediaCaption, { color: textColor }]}>
                {message}
              </Text>
            )}
          </View>
        );
    }
  };

  const renderStatus = () => {
    if (!isOwn) return null;

    const iconName = 
      status === 'sending' ? 'time-outline' :
      status === 'sent' ? 'checkmark' :
      status === 'delivered' ? 'checkmark-done' :
      'checkmark-done';

    const iconColor = 
      status === 'read' ? Colors.primary[300] : timestampColor;

    return (
      <Ionicons 
        name={iconName as any} 
        size={14} 
        color={iconColor} 
        style={styles.statusIcon}
      />
    );
  };

  return (
    <View style={[styles.container, isOwn && styles.ownContainer]}>
      {!isOwn && (
        <FamilyAvatar
          name={authorName}
          imageUrl={authorAvatar}
          size="small"
        />
      )}
      
      <View style={styles.bubbleContainer}>
        {!isOwn && (
          <Text style={[styles.authorName, { color: colors.textSecondary }]}>
            {authorName}
          </Text>
        )}
        
        <Pressable
          style={[
            styles.bubble,
            { backgroundColor: bubbleBackgroundColor },
            isOwn ? styles.ownBubble : styles.otherBubble,
          ]}
          onPress={onPress}
          onLongPress={onLongPress}
        >
          {renderContent()}
        </Pressable>
        
        <View style={[styles.metadata, isOwn && styles.ownMetadata]}>
          <Text style={[styles.timestamp, { color: timestampColor }]}>
            {timestamp}
          </Text>
          {renderStatus()}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 4,
    marginHorizontal: 16,
    alignItems: 'flex-end',
  },
  ownContainer: {
    flexDirection: 'row-reverse',
  },
  bubbleContainer: {
    maxWidth: '75%',
    marginHorizontal: 8,
  },
  bubble: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  ownBubble: {
    borderBottomRightRadius: 4,
  },
  otherBubble: {
    borderBottomLeftRadius: 4,
  },
  authorName: {
    fontSize: 12,
    marginBottom: 4,
    marginLeft: 4,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 22,
  },
  metadata: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginLeft: 4,
  },
  ownMetadata: {
    justifyContent: 'flex-end',
    marginLeft: 0,
    marginRight: 4,
  },
  timestamp: {
    fontSize: 12,
  },
  statusIcon: {
    marginLeft: 4,
  },
  voiceMessage: {
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: 160,
  },
  voiceWaveform: {
    flex: 1,
    height: 2,
    marginHorizontal: 8,
    opacity: 0.3,
  },
  voiceDuration: {
    fontSize: 14,
  },
  mediaContainer: {
    overflow: 'hidden',
  },
  messageImage: {
    width: 200,
    height: 200,
    borderRadius: 8,
  },
  videoPlaceholder: {
    width: 200,
    height: 200,
    borderRadius: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mediaCaption: {
    marginTop: 8,
    fontSize: 14,
  },
});