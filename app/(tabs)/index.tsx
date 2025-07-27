import { ScrollView, StyleSheet, View, Text, Pressable } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';

// FamDing Design System Colors
const FamDingColors = {
  primary: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
  },
  secondary: {
    50: "#fef7f0",
    100: "#feecdc",
    200: "#fcd9bd",
    300: "#fdba8c",
    400: "#ff8a4c",
    500: "#ff6b35",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
  },
  success: "#22c55e",
  warning: "#f59e0b",
  error: "#ef4444",
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
  },
};

const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

const BorderRadius = {
  sm: 8,
  md: 16,
  lg: 24,
  full: 9999,
};

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: isDark ? '#0f172a' : '#ffffff' }]}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.logo, { color: FamDingColors.primary[600] }]}>FamDing</Text>
        <Text style={[styles.tagline, { color: isDark ? FamDingColors.gray[300] : FamDingColors.gray[600] }]}>
          Design System Showcase
        </Text>
      </View>

      {/* Design Philosophy */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: isDark ? '#ffffff' : FamDingColors.gray[900] }]}>
          Friendly Modernism
        </Text>
        <Text style={[styles.sectionDescription, { color: isDark ? FamDingColors.gray[300] : FamDingColors.gray[600] }]}>
          Combining contemporary design with warm, approachable aesthetics for real families
        </Text>
      </View>

      {/* Color Palette */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: isDark ? '#ffffff' : FamDingColors.gray[900] }]}>
          Color Palette
        </Text>
        
        {/* Primary Colors */}
        <Text style={[styles.subsectionTitle, { color: isDark ? FamDingColors.gray[200] : FamDingColors.gray[700] }]}>
          Primary - Soft Blue
        </Text>
        <View style={styles.colorRow}>
          {[100, 300, 500, 700, 900].map((shade) => (
            <View key={shade} style={styles.colorItem}>
              <View 
                style={[
                  styles.colorSwatch, 
                  { backgroundColor: FamDingColors.primary[shade as keyof typeof FamDingColors.primary] }
                ]} 
              />
              <Text style={[styles.colorLabel, { color: isDark ? FamDingColors.gray[400] : FamDingColors.gray[600] }]}>
                {shade}
              </Text>
            </View>
          ))}
        </View>

        {/* Secondary Colors */}
        <Text style={[styles.subsectionTitle, { color: isDark ? FamDingColors.gray[200] : FamDingColors.gray[700] }]}>
          Secondary - Warm Coral
        </Text>
        <View style={styles.colorRow}>
          {[100, 300, 400, 600, 800].map((shade) => (
            <View key={shade} style={styles.colorItem}>
              <View 
                style={[
                  styles.colorSwatch, 
                  { backgroundColor: FamDingColors.secondary[shade as keyof typeof FamDingColors.secondary] }
                ]} 
              />
              <Text style={[styles.colorLabel, { color: isDark ? FamDingColors.gray[400] : FamDingColors.gray[600] }]}>
                {shade}
              </Text>
            </View>
          ))}
        </View>

        {/* Semantic Colors */}
        <Text style={[styles.subsectionTitle, { color: isDark ? FamDingColors.gray[200] : FamDingColors.gray[700] }]}>
          Semantic Colors
        </Text>
        <View style={styles.colorRow}>
          <View style={styles.colorItem}>
            <View style={[styles.colorSwatch, { backgroundColor: FamDingColors.success }]} />
            <Text style={[styles.colorLabel, { color: isDark ? FamDingColors.gray[400] : FamDingColors.gray[600] }]}>
              Success
            </Text>
          </View>
          <View style={styles.colorItem}>
            <View style={[styles.colorSwatch, { backgroundColor: FamDingColors.warning }]} />
            <Text style={[styles.colorLabel, { color: isDark ? FamDingColors.gray[400] : FamDingColors.gray[600] }]}>
              Warning
            </Text>
          </View>
          <View style={styles.colorItem}>
            <View style={[styles.colorSwatch, { backgroundColor: FamDingColors.error }]} />
            <Text style={[styles.colorLabel, { color: isDark ? FamDingColors.gray[400] : FamDingColors.gray[600] }]}>
              Error
            </Text>
          </View>
        </View>
      </View>

      {/* Typography */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: isDark ? '#ffffff' : FamDingColors.gray[900] }]}>
          Typography
        </Text>
        <View style={styles.typographyItem}>
          <Text style={[styles.displayText, { color: isDark ? '#ffffff' : FamDingColors.gray[900] }]}>
            Display Text
          </Text>
          <Text style={[styles.typographyLabel, { color: isDark ? FamDingColors.gray[400] : FamDingColors.gray[600] }]}>
            Poppins • 48px • Bold
          </Text>
        </View>
        <View style={styles.typographyItem}>
          <Text style={[styles.headingText, { color: isDark ? '#ffffff' : FamDingColors.gray[900] }]}>
            Heading Text
          </Text>
          <Text style={[styles.typographyLabel, { color: isDark ? FamDingColors.gray[400] : FamDingColors.gray[600] }]}>
            Poppins • 30px • Semibold
          </Text>
        </View>
        <View style={styles.typographyItem}>
          <Text style={[styles.bodyText, { color: isDark ? FamDingColors.gray[300] : FamDingColors.gray[700] }]}>
            Body text for content and descriptions
          </Text>
          <Text style={[styles.typographyLabel, { color: isDark ? FamDingColors.gray[400] : FamDingColors.gray[600] }]}>
            Inter • 16px • Regular
          </Text>
        </View>
      </View>

      {/* Spacing */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: isDark ? '#ffffff' : FamDingColors.gray[900] }]}>
          Spacing System
        </Text>
        <View style={styles.spacingContainer}>
          {Object.entries(Spacing).map(([key, value]) => (
            <View key={key} style={styles.spacingItem}>
              <View 
                style={[
                  styles.spacingBox, 
                  { 
                    width: value * 2, 
                    height: value * 2,
                    backgroundColor: FamDingColors.primary[200]
                  }
                ]} 
              />
              <Text style={[styles.spacingLabel, { color: isDark ? FamDingColors.gray[400] : FamDingColors.gray[600] }]}>
                {key}: {value}px
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Components */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: isDark ? '#ffffff' : FamDingColors.gray[900] }]}>
          Component Examples
        </Text>

        {/* Buttons */}
        <Text style={[styles.subsectionTitle, { color: isDark ? FamDingColors.gray[200] : FamDingColors.gray[700] }]}>
          Buttons
        </Text>
        <View style={styles.buttonRow}>
          <Pressable style={[styles.button, styles.primaryButton]}>
            <Text style={styles.buttonText}>Primary Button</Text>
          </Pressable>
          <Pressable style={[styles.button, styles.secondaryButton]}>
            <Text style={styles.secondaryButtonText}>Secondary</Text>
          </Pressable>
        </View>

        {/* Cards */}
        <Text style={[styles.subsectionTitle, { color: isDark ? FamDingColors.gray[200] : FamDingColors.gray[700] }]}>
          Card Component
        </Text>
        <View style={[styles.card, { backgroundColor: isDark ? FamDingColors.gray[800] : '#ffffff' }]}>
          <Text style={[styles.cardTitle, { color: isDark ? '#ffffff' : FamDingColors.gray[900] }]}>
            Memory Card
          </Text>
          <Text style={[styles.cardDescription, { color: isDark ? FamDingColors.gray[300] : FamDingColors.gray[600] }]}>
            A beautiful card component for displaying family memories with rounded corners and subtle shadows
          </Text>
          <View style={styles.cardActions}>
            <Pressable style={styles.cardButton}>
              <Text style={{ color: FamDingColors.primary[600] }}>View</Text>
            </Pressable>
            <Pressable style={styles.cardButton}>
              <Text style={{ color: FamDingColors.secondary[500] }}>Share</Text>
            </Pressable>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={[styles.footerText, { color: isDark ? FamDingColors.gray[400] : FamDingColors.gray[600] }]}>
          FamDing - Bringing families together through thoughtful design
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 60,
    paddingBottom: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  logo: {
    fontSize: 48,
    fontWeight: 'bold',
    letterSpacing: -1,
  },
  tagline: {
    fontSize: 16,
    marginTop: 8,
  },
  section: {
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 16,
  },
  sectionDescription: {
    fontSize: 16,
    lineHeight: 24,
  },
  subsectionTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 24,
    marginBottom: 16,
  },
  colorRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 16,
  },
  colorItem: {
    alignItems: 'center',
  },
  colorSwatch: {
    width: 60,
    height: 60,
    borderRadius: 12,
    marginBottom: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  colorLabel: {
    fontSize: 12,
  },
  typographyItem: {
    marginBottom: 24,
  },
  displayText: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  headingText: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 4,
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 4,
  },
  typographyLabel: {
    fontSize: 12,
  },
  spacingContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  spacingItem: {
    alignItems: 'center',
  },
  spacingBox: {
    borderRadius: 8,
    marginBottom: 4,
  },
  spacingLabel: {
    fontSize: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  button: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButton: {
    backgroundColor: FamDingColors.primary[600],
  },
  secondaryButton: {
    backgroundColor: FamDingColors.secondary[400],
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  card: {
    padding: 24,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 16,
  },
  cardActions: {
    flexDirection: 'row',
    gap: 16,
  },
  cardButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  footer: {
    paddingHorizontal: 24,
    paddingVertical: 48,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    textAlign: 'center',
  },
});
