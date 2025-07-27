import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { AvatarGroup } from './FamilyAvatar';

interface TimelineHeaderProps {
  familyName: string;
  memberCount: number;
  activeMembers: Array<{
    name: string;
    imageUrl?: string;
  }>;
  currentFilter?: 'all' | 'favorites' | 'photos' | 'videos';
  onFilterChange?: (filter: 'all' | 'favorites' | 'photos' | 'videos') => void;
  onSettingsPress?: () => void;
  onMembersPress?: () => void;
}

const FILTERS = [
  { id: 'all', label: 'All', icon: 'home' },
  { id: 'favorites', label: 'Favorites', icon: 'heart' },
  { id: 'photos', label: 'Photos', icon: 'image' },
  { id: 'videos', label: 'Videos', icon: 'videocam' },
] as const;

export function TimelineHeader({
  familyName,
  memberCount,
  activeMembers,
  currentFilter = 'all',
  onFilterChange,
  onSettingsPress,
  onMembersPress,
}: TimelineHeaderProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header Row */}
      <View style={styles.headerRow}>
        <View style={styles.familyInfo}>
          <Text style={[styles.familyName, { color: colors.text }]}>{familyName}</Text>
          <Pressable onPress={onMembersPress} style={styles.memberInfo}>
            <AvatarGroup 
              avatars={activeMembers} 
              max={3} 
              size="small" 
              onPressMore={onMembersPress}
            />
            <Text style={[styles.memberCount, { color: colors.textSecondary }]}>
              {memberCount} members
            </Text>
          </Pressable>
        </View>
        
        <Pressable onPress={onSettingsPress} style={styles.settingsButton}>
          <Ionicons name="settings-outline" size={24} color={colors.icon} />
        </Pressable>
      </View>

      {/* Filter Pills */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.filterContainer}
        contentContainerStyle={styles.filterContent}
      >
        {FILTERS.map((filter) => {
          const isActive = currentFilter === filter.id;
          return (
            <Pressable
              key={filter.id}
              style={[
                styles.filterPill,
                {
                  backgroundColor: isActive 
                    ? Colors.primary[100] 
                    : colors.backgroundSecondary,
                  borderColor: isActive 
                    ? Colors.primary[600] 
                    : colors.border,
                },
              ]}
              onPress={() => onFilterChange?.(filter.id as any)}
            >
              <Ionicons 
                name={filter.icon as any} 
                size={16} 
                color={isActive ? Colors.primary[600] : colors.icon} 
              />
              <Text
                style={[
                  styles.filterLabel,
                  {
                    color: isActive ? Colors.primary[600] : colors.text,
                    fontWeight: isActive ? '600' : '400',
                  },
                ]}
              >
                {filter.label}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      {/* Divider */}
      <View style={[styles.divider, { backgroundColor: colors.border }]} />
    </View>
  );
}

interface DateSeparatorProps {
  date: string;
}

export function DateSeparator({ date }: DateSeparatorProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return (
    <View style={styles.dateSeparatorContainer}>
      <View style={[styles.dateLine, { backgroundColor: colors.border }]} />
      <View style={[styles.dateLabel, { backgroundColor: colors.backgroundSecondary }]}>
        <Text style={[styles.dateText, { color: colors.textSecondary }]}>{date}</Text>
      </View>
      <View style={[styles.dateLine, { backgroundColor: colors.border }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
    paddingBottom: 0,
    borderBottomWidth: 1,
    borderBottomColor: 'transparent',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  familyInfo: {
    flex: 1,
  },
  familyName: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 4,
  },
  memberInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  memberCount: {
    fontSize: 14,
  },
  settingsButton: {
    padding: 8,
  },
  filterContainer: {
    maxHeight: 48,
  },
  filterContent: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 8,
  },
  filterPill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    gap: 6,
    marginRight: 8,
  },
  filterLabel: {
    fontSize: 14,
  },
  divider: {
    height: 1,
    marginTop: 8,
  },
  dateSeparatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  dateLine: {
    flex: 1,
    height: 1,
  },
  dateLabel: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 12,
    marginHorizontal: 8,
  },
  dateText: {
    fontSize: 12,
    fontWeight: '500',
  },
});