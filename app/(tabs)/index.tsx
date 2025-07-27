import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, SafeAreaView } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { MemoryCard } from '@/components/MemoryCard';
import { TimelineHeader, DateSeparator } from '@/components/TimelineHeader';
import { FloatingActionButton } from '@/components/FloatingActionButton';

// Sample data for timeline
const SAMPLE_MEMORIES = [
  {
    id: '1',
    authorName: 'Grandma Rose',
    timestamp: '2 hours ago',
    content: 'Look who learned to ride a bike today! So proud of my little champion 🚴‍♂️',
    mediaUrl: 'https://picsum.photos/400/300',
    mediaType: 'photo' as const,
    reactions: [{ type: 'heart', count: 5 }],
    isFavorited: true,
  },
  {
    id: '2',
    authorName: 'Dad',
    timestamp: '5 hours ago',
    content: 'Family BBQ this weekend was amazing! Thanks everyone for coming. The kids had such a great time in the pool.',
    reactions: [{ type: 'heart', count: 3 }, { type: 'thumbs', count: 2 }],
    isFavorited: false,
  },
  {
    id: '3',
    authorName: 'Mom',
    timestamp: 'Yesterday',
    content: 'Happy 8th birthday to our sunshine! Time flies so fast. Remember when you were just learning to walk? Now you\'re teaching your little brother! 🎂🎉',
    mediaUrl: 'https://picsum.photos/400/400',
    mediaType: 'photo' as const,
    reactions: [{ type: 'heart', count: 12 }],
    isFavorited: true,
  },
  {
    id: '4',
    authorName: 'Uncle Mike',
    timestamp: '2 days ago',
    content: 'Caught this beautiful sunset at the lake house. Wish you all could have been here!',
    mediaUrl: 'https://picsum.photos/400/250',
    mediaType: 'photo' as const,
    reactions: [{ type: 'heart', count: 7 }],
    isFavorited: false,
  },
  {
    id: '5',
    authorName: 'Cousin Sarah',
    timestamp: '3 days ago',
    content: 'Just wanted to share this funny video of the kids playing together last Christmas. They\'re growing up so fast! Miss you all.',
    mediaType: 'video' as const,
    reactions: [{ type: 'heart', count: 4 }, { type: 'laugh', count: 6 }],
    isFavorited: false,
  },
];

const ACTIVE_MEMBERS = [
  { name: 'Grandma Rose', imageUrl: 'https://i.pravatar.cc/150?u=grandma' },
  { name: 'Dad', imageUrl: 'https://i.pravatar.cc/150?u=dad' },
  { name: 'Mom', imageUrl: 'https://i.pravatar.cc/150?u=mom' },
  { name: 'Uncle Mike' },
  { name: 'Cousin Sarah' },
];

export default function TimelineScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const [currentFilter, setCurrentFilter] = useState<'all' | 'favorites' | 'photos' | 'videos'>('all');

  const filteredMemories = SAMPLE_MEMORIES.filter(memory => {
    switch (currentFilter) {
      case 'favorites':
        return memory.isFavorited;
      case 'photos':
        return memory.mediaType === 'photo';
      case 'videos':
        return memory.mediaType === 'video';
      default:
        return true;
    }
  });

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <TimelineHeader
        familyName="The Martinez Family"
        memberCount={12}
        activeMembers={ACTIVE_MEMBERS}
        currentFilter={currentFilter}
        onFilterChange={setCurrentFilter}
        onSettingsPress={() => console.log('Settings pressed')}
        onMembersPress={() => console.log('Members pressed')}
      />
      
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <DateSeparator date="Today" />
        
        {filteredMemories.slice(0, 2).map(memory => (
          <MemoryCard
            key={memory.id}
            {...memory}
            onPress={() => console.log('Memory pressed:', memory.id)}
            onFavorite={() => console.log('Favorite pressed:', memory.id)}
            onReact={() => console.log('React pressed:', memory.id)}
          />
        ))}

        <DateSeparator date="This Week" />
        
        {filteredMemories.slice(2).map(memory => (
          <MemoryCard
            key={memory.id}
            {...memory}
            onPress={() => console.log('Memory pressed:', memory.id)}
            onFavorite={() => console.log('Favorite pressed:', memory.id)}
            onReact={() => console.log('React pressed:', memory.id)}
          />
        ))}

        <View style={styles.bottomSpacer} />
      </ScrollView>

      <FloatingActionButton
        onPress={() => console.log('FAB pressed - Create new memory')}
        icon="heart"
        size="medium"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 80, // Space for FAB
  },
  bottomSpacer: {
    height: 20,
  },
});
