import React, { useState } from 'react';
import { 
  ScrollView, 
  StyleSheet, 
  View, 
  SafeAreaView, 
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Pressable,
  Text
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/contexts/ThemeContext';
import { Colors } from '@/constants/Colors';
import { MessageBubble } from '@/components/MessageBubble';
import { FamilyAvatar } from '@/components/FamilyAvatar';
import { MobileDrawer } from '@/components/MobileDrawer';

// Sample chat messages
const SAMPLE_MESSAGES = [
  {
    id: '1',
    message: 'Hey everyone! Just wanted to check in and see how everyone is doing 😊',
    timestamp: '10:23 AM',
    authorName: 'Mom',
    authorAvatar: 'https://i.pravatar.cc/150?u=mom',
    isOwn: false,
    type: 'text' as const,
    status: 'read' as const,
  },
  {
    id: '2',
    message: 'Doing great! Just finished my morning run. How about you?',
    timestamp: '10:25 AM',
    authorName: 'You',
    isOwn: true,
    type: 'text' as const,
    status: 'read' as const,
  },
  {
    id: '3',
    message: 'Good morning! I\'m at the farmer\'s market. Look at these beautiful flowers!',
    timestamp: '10:28 AM',
    authorName: 'Grandma Rose',
    authorAvatar: 'https://i.pravatar.cc/150?u=grandma',
    isOwn: false,
    type: 'image' as const,
    mediaUrl: 'https://picsum.photos/300/200',
    status: 'read' as const,
  },
  {
    id: '4',
    message: 'Those are gorgeous! 🌻',
    timestamp: '10:30 AM',
    authorName: 'You',
    isOwn: true,
    type: 'text' as const,
    status: 'read' as const,
  },
  {
    id: '5',
    message: 'Just recorded a message for little Timmy\'s birthday!',
    timestamp: '10:32 AM',
    authorName: 'Uncle Mike',
    isOwn: false,
    type: 'voice' as const,
    duration: '0:45',
    status: 'read' as const,
  },
  {
    id: '6',
    message: 'That\'s so sweet! He\'s going to love it. Can\'t believe he\'s turning 8 already!',
    timestamp: '10:35 AM',
    authorName: 'Mom',
    authorAvatar: 'https://i.pravatar.cc/150?u=mom',
    isOwn: false,
    type: 'text' as const,
    status: 'read' as const,
  },
  {
    id: '7',
    message: 'Time flies! Remember when he was just learning to walk? 🥺',
    timestamp: '10:36 AM',
    authorName: 'You',
    isOwn: true,
    type: 'text' as const,
    status: 'delivered' as const,
  },
  {
    id: '8',
    message: 'I found this old video of his first steps!',
    timestamp: '10:38 AM',
    authorName: 'Dad',
    authorAvatar: 'https://i.pravatar.cc/150?u=dad',
    isOwn: false,
    type: 'video' as const,
    status: 'read' as const,
  },
];

const TYPING_MEMBERS = [
  { name: 'Cousin Sarah', imageUrl: 'https://i.pravatar.cc/150?u=sarah' },
];

export default function ChatScreen() {
  const { colorScheme } = useTheme();
  const colors = Colors[colorScheme ?? 'light'];
  const [inputText, setInputText] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const scrollViewRef = React.useRef<ScrollView>(null);

  React.useEffect(() => {
    // Scroll to bottom on mount
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: false });
    }, 100);
  }, []);

  const sendMessage = () => {
    if (inputText.trim()) {
      console.log('Sending message:', inputText);
      setInputText('');
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <MobileDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
      />
      
      {/* Chat Header - Outside KeyboardAvoidingView */}
      <View style={[styles.header, { backgroundColor: colors.background, borderBottomColor: colors.border }]}>
        <Pressable 
          style={styles.menuButton}
          onPress={() => setIsDrawerOpen(true)}
        >
          <Ionicons name="menu" size={28} color={colors.icon} />
        </Pressable>
        <View style={styles.headerContent}>
          <View style={styles.headerInfo}>
            <View style={styles.headerTitle}>
              <Text style={[styles.chatName, { color: colors.text }]}>Family Chat</Text>
              <Ionicons name="shield-checkmark" size={16} color={Colors.primary[600]} />
            </View>
            <Text style={[styles.memberCount, { color: colors.textSecondary }]}>
              12 members • 5 online
            </Text>
          </View>
        </View>
        <Pressable style={styles.headerButton}>
          <Ionicons name="videocam-outline" size={24} color={colors.icon} />
        </Pressable>
        <Pressable style={styles.headerButton}>
          <Ionicons name="information-circle-outline" size={24} color={colors.icon} />
        </Pressable>
      </View>

      <KeyboardAvoidingView 
        style={styles.keyboardAvoid}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
      >
        {/* Messages */}
        <View style={styles.messagesWrapper}>
          <ScrollView 
            ref={scrollViewRef}
            style={styles.messagesContainer}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.messagesContent}
          >
          {SAMPLE_MESSAGES.map(message => (
            <MessageBubble
              key={message.id}
              {...message}
              onPress={() => console.log('Message pressed:', message.id)}
              onLongPress={() => console.log('Message long pressed:', message.id)}
            />
          ))}
          
          {/* Typing Indicator */}
          {TYPING_MEMBERS.length > 0 && (
            <View style={styles.typingContainer}>
              <FamilyAvatar
                name={TYPING_MEMBERS[0].name}
                imageUrl={TYPING_MEMBERS[0].imageUrl}
                size="small"
              />
              <View style={[styles.typingBubble, { backgroundColor: colors.backgroundSecondary }]}>
                <View style={styles.typingDots}>
                  <View style={[styles.dot, { backgroundColor: colors.textSecondary }]} />
                  <View style={[styles.dot, { backgroundColor: colors.textSecondary }]} />
                  <View style={[styles.dot, { backgroundColor: colors.textSecondary }]} />
                </View>
              </View>
            </View>
          )}
          </ScrollView>
        </View>

        {/* Input Bar */}
        <View style={[styles.inputBar, { backgroundColor: colors.background, borderTopColor: colors.border }]}>
          <Pressable style={styles.attachButton}>
            <Ionicons name="add-circle" size={28} color={Colors.primary[600]} />
          </Pressable>
          
          <View style={[styles.inputContainer, { backgroundColor: colors.backgroundSecondary }]}>
            <TextInput
              style={[styles.textInput, { color: colors.text }]}
              placeholder="Type a message..."
              placeholderTextColor={colors.textSecondary}
              value={inputText}
              onChangeText={setInputText}
              multiline
              maxLength={1000}
            />
            <Pressable style={styles.emojiButton}>
              <Ionicons name="happy-outline" size={24} color={colors.icon} />
            </Pressable>
          </View>

          {inputText.trim() ? (
            <Pressable style={styles.sendButton} onPress={sendMessage}>
              <Ionicons name="send" size={20} color={Colors.white} />
            </Pressable>
          ) : (
            <Pressable style={styles.voiceButton}>
              <Ionicons name="mic" size={24} color={Colors.primary[600]} />
            </Pressable>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardAvoid: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  menuButton: {
    padding: 8,
    marginRight: 8,
  },
  headerContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerInfo: {
    flex: 1,
  },
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  chatName: {
    fontSize: 18,
    fontWeight: '600',
  },
  memberCount: {
    fontSize: 14,
    marginTop: 2,
  },
  headerButton: {
    padding: 8,
    marginLeft: 8,
  },
  messagesWrapper: {
    flex: 1,
  },
  messagesContainer: {
    flex: 1,
  },
  messagesContent: {
    paddingTop: 16,
    paddingBottom: 20,
  },
  typingContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginVertical: 4,
    marginHorizontal: 16,
  },
  typingBubble: {
    marginLeft: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 16,
    borderBottomLeftRadius: 4,
  },
  typingDots: {
    flexDirection: 'row',
    gap: 4,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    opacity: 0.6,
  },
  inputBar: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 12,
    paddingTop: 8,
    paddingBottom: Platform.OS === 'ios' ? 34 : 8,
    borderTopWidth: 1,
    backgroundColor: 'transparent',
  },
  attachButton: {
    paddingBottom: 4,
    paddingRight: 8,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
    minHeight: 40,
    maxHeight: 120,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    lineHeight: 20,
    paddingTop: 0,
    paddingBottom: 0,
  },
  emojiButton: {
    marginLeft: 8,
    paddingBottom: 2,
  },
  sendButton: {
    marginLeft: 8,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.primary[600],
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 2,
  },
  voiceButton: {
    marginLeft: 8,
    paddingBottom: 4,
    paddingLeft: 8,
  },
});