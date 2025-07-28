import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Animated,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { useTheme } from '@/contexts/ThemeContext';
import { FamilyAvatar } from './FamilyAvatar';
import { ThemeToggle } from './ThemeToggle';
import { useRouter } from 'expo-router';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const { colorScheme } = useTheme();
  const colors = Colors[colorScheme ?? 'light'];
  const router = useRouter();
  
  // Calculate drawer width based on screen size
  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);
  const drawerWidth = Math.min(screenWidth * 0.75, 320); // Max 320px on large screens
  
  const translateX = useRef(new Animated.Value(-drawerWidth)).current;
  const overlayOpacity = useRef(new Animated.Value(0)).current;

  // Update screen width on dimension change
  useEffect(() => {
    const updateDimensions = ({ window }: { window: { width: number } }) => {
      setScreenWidth(window.width);
    };
    
    const subscription = Dimensions.addEventListener('change', updateDimensions);
    return () => subscription?.remove();
  }, []);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(translateX, {
        toValue: isOpen ? 0 : -drawerWidth,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(overlayOpacity, {
        toValue: isOpen ? 0.5 : 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, [isOpen, drawerWidth]);

  const navigation = [
    {
      id: 'chat',
      label: 'Family Chat',
      icon: 'chatbubbles-outline' as const,
      route: '/chat',
    },
    {
      id: 'timeline',
      label: 'Timeline',
      icon: 'time-outline' as const,
      route: '/timeline',
    },
    {
      id: 'members',
      label: 'Family Members',
      icon: 'people-outline' as const,
      route: '/members',
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: 'settings-outline' as const,
      route: '/settings',
    },
  ];

  const handleNavigate = (route: string) => {
    router.push(route as any);
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      <Animated.View
        style={[
          styles.overlay,
          {
            opacity: overlayOpacity,
            pointerEvents: isOpen ? 'auto' : 'none',
          },
        ]}
      >
        <Pressable style={StyleSheet.absoluteFill} onPress={onClose} />
      </Animated.View>

      {/* Drawer */}
      <Animated.View
        style={[
          styles.drawer,
          {
            width: drawerWidth,
            backgroundColor: colors.background,
            transform: [{ translateX }],
          },
        ]}
      >
        <SafeAreaView style={styles.safeArea}>
          {/* Header */}
          <View style={styles.header}>
            <FamilyAvatar
              name="The Martinez Family"
              size="large"
              backgroundColor={Colors.primary[600]}
            />
            <Text style={[styles.familyName, { color: colors.text }]}>
              The Martinez Family
            </Text>
            <Text style={[styles.memberCount, { color: colors.textSecondary }]}>
              12 members
            </Text>
          </View>

          {/* Navigation Items */}
          <View style={styles.navContainer}>
            {navigation.map((item) => (
              <Pressable
                key={item.id}
                style={({ pressed }) => [
                  styles.navItem,
                  pressed && styles.navItemPressed,
                ]}
                onPress={() => handleNavigate(item.route)}
              >
                <Ionicons
                  name={item.icon}
                  size={24}
                  color={colors.icon}
                />
                <Text style={[styles.navText, { color: colors.text }]}>
                  {item.label}
                </Text>
              </Pressable>
            ))}
          </View>

          {/* Bottom Section */}
          <View style={styles.bottomSection}>
            <Pressable
              style={({ pressed }) => [
                styles.navItem,
                pressed && styles.navItemPressed,
              ]}
              onPress={() => handleNavigate('/profile')}
            >
              <FamilyAvatar
                name="You"
                size="small"
                imageUrl="https://i.pravatar.cc/150?u=currentuser"
              />
              <View style={styles.profileInfo}>
                <Text style={[styles.profileName, { color: colors.text }]}>
                  Your Name
                </Text>
                <Text style={[styles.profileStatus, { color: colors.textSecondary }]}>
                  View Profile
                </Text>
              </View>
            </Pressable>
            
            {/* Theme Toggle */}
            <View style={styles.themeToggleContainer}>
              <Text style={[styles.themeLabel, { color: colors.textSecondary }]}>
                Theme
              </Text>
              <ThemeToggle size="small" />
            </View>
          </View>
        </SafeAreaView>
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
    zIndex: 998,
  },
  drawer: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    zIndex: 999,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
  },
  safeArea: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
  familyName: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 16,
  },
  memberCount: {
    fontSize: 14,
    marginTop: 4,
  },
  navContainer: {
    flex: 1,
    paddingTop: 8,
  },
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    gap: 16,
  },
  navItemPressed: {
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  navText: {
    fontSize: 16,
    fontWeight: '500',
  },
  bottomSection: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.1)',
    paddingVertical: 8,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 16,
    fontWeight: '600',
  },
  profileStatus: {
    fontSize: 14,
    marginTop: 2,
  },
  themeToggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: 8,
  },
  themeLabel: {
    fontSize: 16,
    fontWeight: '500',
  },
});