# FamDing Design System - React Native

## 1. Design Philosophy

FamDing's design system embodies **"Friendly Modernism"** - combining contemporary design patterns with warm, approachable aesthetics that make technology feel human and family-centered.

### Core Principles

1. **Human-Centered**: Designed for real families, not tech enthusiasts
2. **Effortless Interaction**: Intuitive gestures and clear visual hierarchy
3. **Warm Technology**: Modern interfaces with emotional warmth
4. **Inclusive Design**: Accessible across generations and abilities
5. **Memory-First**: Visual design that celebrates and preserves moments
6. **Mobile-First**: Optimized for touch interactions and mobile experiences

## 2. React Native Configuration

### Color Palette Constants

```typescript
// constants/Colors.ts
export const Colors = {
  // Primary Colors (Soft Blue)
  primary: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9", // Modern sky blue
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
  },

  // Secondary Colors (Warm Coral)
  secondary: {
    50: "#fef7f0",
    100: "#feecdc",
    200: "#fcd9bd",
    300: "#fdba8c",
    400: "#ff8a4c", // Warm coral
    500: "#ff6b35",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
  },

  // Semantic Colors
  success: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
  },

  warning: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
  },

  error: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
  },

  // Neutral Colors
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

  // Base colors
  white: "#ffffff",
  black: "#000000",
  transparent: "transparent",
} as const;

export type ColorKey = keyof typeof Colors;
```

### Spacing Scale

```typescript
// constants/Spacing.ts
export const Spacing = {
  0: 0,
  1: 2, // 2px
  2: 4, // 4px
  3: 8, // 8px
  4: 12, // 12px
  5: 16, // 16px
  6: 20, // 20px
  7: 24, // 24px
  8: 32, // 32px
  10: 40, // 40px
  12: 48, // 48px
  16: 64, // 64px
  20: 80, // 80px
  24: 96, // 96px
  32: 128, // 128px
} as const;

export type SpacingKey = keyof typeof Spacing;
```

### Border Radius

```typescript
// constants/BorderRadius.ts
export const BorderRadius = {
  none: 0,
  xs: 2, // 2px
  sm: 4, // 4px
  md: 8, // 8px
  lg: 12, // 12px
  xl: 16, // 16px
  "2xl": 24, // 24px
  "3xl": 32, // 32px
  full: 9999, // Fully rounded
} as const;

export type BorderRadiusKey = keyof typeof BorderRadius;
```

### Typography

```typescript
// constants/Typography.ts
import { Platform } from "react-native";

export const Typography = {
  // Font Families
  fontFamily: {
    display: Platform.select({
      ios: "Poppins",
      android: "Poppins",
      default: "System",
    }),
    body: Platform.select({
      ios: "Inter",
      android: "Inter",
      default: "System",
    }),
  },

  // Font Sizes
  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    "2xl": 24,
    "3xl": 30,
    "4xl": 36,
    "5xl": 48,
  },

  // Font Weights
  fontWeight: {
    normal: "normal" as const,
    medium: "500" as const,
    semibold: "600" as const,
    bold: "bold" as const,
  },

  // Line Heights
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },

  // Letter Spacing
  letterSpacing: {
    tight: -0.5,
    normal: 0,
    wide: 0.5,
  },
} as const;
```

### Shadows

```typescript
// constants/Shadows.ts
import { Platform } from "react-native";

export const Shadows = {
  // iOS shadows
  ios: {
    xs: {
      shadowColor: "#000000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
    },
    sm: {
      shadowColor: "#000000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
    },
    md: {
      shadowColor: "#000000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 6,
    },
    lg: {
      shadowColor: "#000000",
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.1,
      shadowRadius: 15,
    },
    xl: {
      shadowColor: "#000000",
      shadowOffset: { width: 0, height: 20 },
      shadowOpacity: 0.1,
      shadowRadius: 25,
    },
    primary: {
      shadowColor: "#0ea5e9",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 14,
    },
    secondary: {
      shadowColor: "#ff6b35",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 14,
    },
  },

  // Android elevation
  android: {
    xs: { elevation: 1 },
    sm: { elevation: 2 },
    md: { elevation: 4 },
    lg: { elevation: 8 },
    xl: { elevation: 16 },
    primary: { elevation: 4 },
    secondary: { elevation: 4 },
  },

  // Cross-platform shadow helper
  getShadow: (
    size: "xs" | "sm" | "md" | "lg" | "xl" | "primary" | "secondary"
  ) => {
    return Platform.select({
      ios: Shadows.ios[size],
      android: Shadows.android[size],
      default: {},
    });
  },
} as const;
```

## 3. Color System with React Native

### Primary Colors (Soft Blue)

```tsx
import { View, Text } from 'react-native';
import { Colors } from '../constants/Colors';

// Backgrounds
<View style={{ backgroundColor: Colors.primary[50] }}>
  <Text>Lightest</Text>
</View>
<View style={{ backgroundColor: Colors.primary[500] }}>
  <Text style={{ color: Colors.white }}>Main Primary</Text>
</View>
<View style={{ backgroundColor: Colors.primary[900] }}>
  <Text style={{ color: Colors.white }}>Darkest</Text>
</View>

// Text
<Text style={{ color: Colors.primary[600] }}>Primary text</Text>
<Text style={{ color: Colors.primary[700] }}>Darker primary</Text>

// Borders
<View style={{
  borderWidth: 1,
  borderColor: Colors.primary[200]
}}>
  <Text>Light border</Text>
</View>
<View style={{
  borderWidth: 2,
  borderColor: Colors.primary[500]
}}>
  <Text>Main border</Text>
</View>
```

### Secondary Colors (Warm Coral)

```tsx
// Memory accent colors
<View style={{ backgroundColor: Colors.secondary[500] }}>
  <Text style={{ color: Colors.white }}>Memory flag</Text>
</View>
<View style={{ backgroundColor: Colors.secondary[100] }}>
  <Text style={{ color: Colors.secondary[700] }}>Memory background</Text>
</View>
<TouchableOpacity style={{ backgroundColor: Colors.secondary[500] }}>
  <Text style={{ color: Colors.white }}>Flag Memory</Text>
</TouchableOpacity>
```

### Semantic Colors

```tsx
// Success
<View style={{
  backgroundColor: Colors.success[50],
  borderWidth: 1,
  borderColor: Colors.success[200],
  padding: 12,
  borderRadius: 8
}}>
  <Text style={{ color: Colors.success[700] }}>Success message</Text>
</View>

// Warning
<View style={{
  backgroundColor: Colors.warning[50],
  borderWidth: 1,
  borderColor: Colors.warning[200],
  padding: 12,
  borderRadius: 8
}}>
  <Text style={{ color: Colors.warning[700] }}>Warning message</Text>
</View>

// Error
<View style={{
  backgroundColor: Colors.error[50],
  borderWidth: 1,
  borderColor: Colors.error[200],
  padding: 12,
  borderRadius: 8
}}>
  <Text style={{ color: Colors.error[700] }}>Error message</Text>
</View>

// Info
<View style={{
  backgroundColor: Colors.primary[50],
  borderWidth: 1,
  borderColor: Colors.primary[200],
  padding: 12,
  borderRadius: 8
}}>
  <Text style={{ color: Colors.primary[700] }}>Info message</Text>
</View>
```

## 4. Typography with React Native

### Font Families

```tsx
import { Text } from 'react-native';
import { Typography, Colors } from '../constants';

// Display font (Poppins) for headings
<Text style={{
  fontFamily: Typography.fontFamily.display,
  fontSize: Typography.fontSize['5xl'],
  fontWeight: Typography.fontWeight.bold,
  color: Colors.gray[900]
}}>
  Welcome to FamDing
</Text>

<Text style={{
  fontFamily: Typography.fontFamily.display,
  fontSize: Typography.fontSize['4xl'],
  fontWeight: Typography.fontWeight.semibold,
  color: Colors.gray[900]
}}>
  Create Memories
</Text>

// Body font (Inter) for content
<Text style={{
  fontFamily: Typography.fontFamily.body,
  fontSize: Typography.fontSize.base,
  color: Colors.gray[700]
}}>
  Regular body text content
</Text>

<Text style={{
  fontFamily: Typography.fontFamily.body,
  fontSize: Typography.fontSize.lg,
  lineHeight: Typography.lineHeight.relaxed,
  color: Colors.gray[700]
}}>
  Large body text
</Text>
```

### Typography Scale & Combinations

```tsx
// Display Text
<Text style={{
  fontFamily: Typography.fontFamily.display,
  fontSize: Typography.fontSize['5xl'],
  fontWeight: Typography.fontWeight.bold,
  lineHeight: Typography.lineHeight.tight,
  letterSpacing: Typography.letterSpacing.tight,
  color: Colors.gray[900]
}}>
  Display Large
</Text>

<Text style={{
  fontFamily: Typography.fontFamily.display,
  fontSize: Typography.fontSize['4xl'],
  fontWeight: Typography.fontWeight.semibold,
  lineHeight: Typography.lineHeight.tight,
  letterSpacing: Typography.letterSpacing.tight,
  color: Colors.gray[900]
}}>
  Display Medium
</Text>

// Headings
<Text style={{
  fontFamily: Typography.fontFamily.display,
  fontSize: Typography.fontSize['3xl'],
  fontWeight: Typography.fontWeight.semibold,
  lineHeight: Typography.lineHeight.tight,
  color: Colors.gray[900]
}}>
  Heading 1
</Text>

<Text style={{
  fontFamily: Typography.fontFamily.display,
  fontSize: Typography.fontSize['2xl'],
  fontWeight: Typography.fontWeight.medium,
  lineHeight: Typography.lineHeight.snug,
  color: Colors.gray[800]
}}>
  Heading 2
</Text>

<Text style={{
  fontFamily: Typography.fontFamily.body,
  fontSize: Typography.fontSize.xl,
  fontWeight: Typography.fontWeight.semibold,
  lineHeight: Typography.lineHeight.snug,
  color: Colors.gray[800]
}}>
  Heading 3
</Text>

// Body Text
<Text style={{
  fontFamily: Typography.fontFamily.body,
  fontSize: Typography.fontSize.lg,
  lineHeight: Typography.lineHeight.relaxed,
  color: Colors.gray[700]
}}>
  Large body text for important content
</Text>

<Text style={{
  fontFamily: Typography.fontFamily.body,
  fontSize: Typography.fontSize.base,
  lineHeight: Typography.lineHeight.normal,
  color: Colors.gray[700]
}}>
  Regular body text for most content
</Text>

<Text style={{
  fontFamily: Typography.fontFamily.body,
  fontSize: Typography.fontSize.sm,
  lineHeight: Typography.lineHeight.normal,
  color: Colors.gray[600]
}}>
  Small body text for secondary information
</Text>

// Labels & Captions
<Text style={{
  fontFamily: Typography.fontFamily.body,
  fontSize: Typography.fontSize.sm,
  fontWeight: Typography.fontWeight.medium,
  lineHeight: Typography.lineHeight.normal,
  color: Colors.gray[700],
  letterSpacing: Typography.letterSpacing.wide
}}>
  Form Label
</Text>

<Text style={{
  fontFamily: Typography.fontFamily.body,
  fontSize: Typography.fontSize.xs,
  lineHeight: Typography.lineHeight.normal,
  color: Colors.gray[500]
}}>
  Caption or metadata
</Text>
```

## 5. Spacing & Layout with React Native

### Spacing Scale (8px base unit)

```tsx
import { View } from 'react-native';
import { Spacing } from '../constants/Spacing';

// Padding
<View style={{ padding: Spacing[0] }}>No padding</View>
<View style={{ padding: Spacing[1] }}>2px padding</View>
<View style={{ padding: Spacing[2] }}>4px padding</View>
<View style={{ padding: Spacing[3] }}>8px padding</View>
<View style={{ padding: Spacing[4] }}>12px padding</View>
<View style={{ padding: Spacing[5] }}>16px padding</View>
<View style={{ padding: Spacing[6] }}>20px padding</View>
<View style={{ padding: Spacing[8] }}>32px padding</View>

// Margins
<View style={{ margin: Spacing[4] }}>12px margin</View>
<View style={{ marginHorizontal: Spacing[6] }}>20px horizontal margin</View>
<View style={{ marginVertical: Spacing[8] }}>32px vertical margin</View>

// Gaps (using margin in flex layouts)
<View style={{ flexDirection: 'row', gap: Spacing[4] }}>
  <View>Item 1</View>
  <View>Item 2</View>
</View>
```

### Layout Patterns

```tsx
import { View, ScrollView } from 'react-native';
import { useWindowDimensions } from 'react-native';

// Container Layouts
const { width } = useWindowDimensions();

<View style={{
  maxWidth: 640,
  alignSelf: 'center'
}}>
  Small container (640px)
</View>

<View style={{
  maxWidth: 896,
  alignSelf: 'center'
}}>
  Large container (896px)
</View>

<View style={{
  maxWidth: width,
  paddingHorizontal: Spacing[4]
}}>
  Full layout container
</View>

// Flex Layouts
<View style={{
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between'
}}>
  {/* Header layout */}
</View>

<View style={{
  flexDirection: 'column',
  gap: Spacing[4]
}}>
  {/* Vertical stack */}
</View>

// Grid-like layouts (using flexWrap)
<View style={{
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: Spacing[6]
}}>
  {/* Grid items */}
</View>

// Sidebar layout
<View style={{
  flexDirection: 'row',
  gap: Spacing[6]
}}>
  <View style={{ width: 300 }}>
    {/* Sidebar content */}
  </View>
  <View style={{ flex: 1 }}>
    {/* Main content */}
  </View>
</View>
```

## 6. Border Radius & Shadows with React Native

### Border Radius

```tsx
import { View } from 'react-native';
import { BorderRadius } from '../constants/BorderRadius';

// Rounded corners
<View style={{ borderRadius: BorderRadius.none }}>No radius</View>
<View style={{ borderRadius: BorderRadius.sm }}>Small radius (4px)</View>
<View style={{ borderRadius: BorderRadius.md }}>Medium radius (8px)</View>
<View style={{ borderRadius: BorderRadius.lg }}>Large radius (12px)</View>
<View style={{ borderRadius: BorderRadius.xl }}>Extra large radius (16px)</View>
<View style={{ borderRadius: BorderRadius['2xl'] }}>2XL radius (24px)</View>
<View style={{ borderRadius: BorderRadius['3xl'] }}>3XL radius (32px)</View>
<View style={{ borderRadius: BorderRadius.full }}>Fully rounded</View>

// Specific corners (React Native doesn't support individual corner radius)
// Use borderTopLeftRadius, borderTopRightRadius, etc. for specific corners
<View style={{
  borderTopLeftRadius: BorderRadius.xl,
  borderTopRightRadius: BorderRadius.xl
}}>
  Top corners only
</View>
```

### Shadows

```tsx
import { View } from 'react-native';
import { Shadows } from '../constants/Shadows';

// Standard shadows
<View style={Shadows.getShadow('xs')}>Extra small shadow</View>
<View style={Shadows.getShadow('sm')}>Small shadow</View>
<View style={Shadows.getShadow('md')}>Medium shadow</View>
<View style={Shadows.getShadow('lg')}>Large shadow</View>
<View style={Shadows.getShadow('xl')}>Extra large shadow</View>

// Colored shadows
<View style={Shadows.getShadow('primary')}>Primary colored shadow</View>
<View style={Shadows.getShadow('secondary')}>Secondary colored shadow</View>

// Interactive shadows (using Animated API)
import { Animated } from 'react-native';

const shadowAnim = useRef(new Animated.Value(0)).current;

<Animated.View style={[
  Shadows.getShadow('sm'),
  {
    transform: [{ translateY: shadowAnim }]
  }
]}>
  Interactive shadow
</Animated.View>
```

## 7. Component Patterns with React Native

### Buttons

```tsx
import { TouchableOpacity, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors, Spacing, BorderRadius, Typography, Shadows } from '../constants';

// Primary Button
<TouchableOpacity
  style={{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing[6],
    paddingVertical: Spacing[3],
    borderRadius: BorderRadius.xl,
    ...Shadows.getShadow('primary'),
  }}
  onPress={() => {}}
>
  <LinearGradient
    colors={[Colors.primary[500], Colors.primary[600]]}
    style={{
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      borderRadius: BorderRadius.xl,
    }}
  />
  <Text style={{
    color: Colors.white,
    fontFamily: Typography.fontFamily.body,
    fontSize: Typography.fontSize.base,
    fontWeight: Typography.fontWeight.medium,
    marginLeft: Spacing[2],
  }}>
    Create Memory
  </Text>
</TouchableOpacity>

// Secondary Button
<TouchableOpacity
  style={{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing[6],
    paddingVertical: Spacing[3],
    borderRadius: BorderRadius.xl,
    ...Shadows.getShadow('secondary'),
  }}
  onPress={() => {}}
>
  <LinearGradient
    colors={[Colors.secondary[500], Colors.secondary[600]]}
    style={{
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      borderRadius: BorderRadius.xl,
    }}
  />
  <Text style={{
    color: Colors.white,
    fontFamily: Typography.fontFamily.body,
    fontSize: Typography.fontSize.base,
    fontWeight: Typography.fontWeight.medium,
    marginLeft: Spacing[2],
  }}>
    Flag Memory
  </Text>
</TouchableOpacity>

// Outline Button
<TouchableOpacity
  style={{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing[6],
    paddingVertical: Spacing[3],
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.xl,
    borderWidth: 2,
    borderColor: Colors.primary[200],
    ...Shadows.getShadow('sm'),
  }}
  onPress={() => {}}
>
  <Text style={{
    color: Colors.primary[600],
    fontFamily: Typography.fontFamily.body,
    fontSize: Typography.fontSize.base,
    fontWeight: Typography.fontWeight.medium,
  }}>
    View Timeline
  </Text>
</TouchableOpacity>

// Ghost Button
<TouchableOpacity
  style={{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing[6],
    paddingVertical: Spacing[3],
    borderRadius: BorderRadius.xl,
  }}
  onPress={() => {}}
>
  <Text style={{
    color: Colors.gray[700],
    fontFamily: Typography.fontFamily.body,
    fontSize: Typography.fontSize.base,
    fontWeight: Typography.fontWeight.medium,
  }}>
    Cancel
  </Text>
</TouchableOpacity>

// Button Sizes
// Small
<TouchableOpacity
  style={{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing[4],
    paddingVertical: Spacing[2],
    backgroundColor: Colors.primary[500],
    borderRadius: BorderRadius.lg,
    ...Shadows.getShadow('primary'),
  }}
  onPress={() => {}}
>
  <Text style={{
    color: Colors.white,
    fontFamily: Typography.fontFamily.body,
    fontSize: Typography.fontSize.sm,
    fontWeight: Typography.fontWeight.medium,
  }}>
    Small Button
  </Text>
</TouchableOpacity>

// Large
<TouchableOpacity
  style={{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing[8],
    paddingVertical: Spacing[4],
    backgroundColor: Colors.primary[500],
    borderRadius: BorderRadius['2xl'],
    ...Shadows.getShadow('primary'),
  }}
  onPress={() => {}}
>
  <Text style={{
    color: Colors.white,
    fontFamily: Typography.fontFamily.body,
    fontSize: Typography.fontSize.lg,
    fontWeight: Typography.fontWeight.medium,
  }}>
    Large Button
  </Text>
</TouchableOpacity>

// Icon Button
<TouchableOpacity
  style={{
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary[500],
    borderRadius: BorderRadius.xl,
    ...Shadows.getShadow('primary'),
  }}
  onPress={() => {}}
>
  {/* Icon component would go here */}
</TouchableOpacity>
```

### Cards

```tsx
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors, Spacing, BorderRadius, Typography, Shadows } from '../constants';

// Basic Card
<View style={{
  backgroundColor: Colors.white,
  borderWidth: 1,
  borderColor: Colors.gray[200],
  borderRadius: BorderRadius['2xl'],
  ...Shadows.getShadow('sm'),
  overflow: 'hidden',
}}>
  <View style={{
    padding: Spacing[6],
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray[100],
  }}>
    <Text style={{
      fontFamily: Typography.fontFamily.display,
      fontSize: Typography.fontSize.xl,
      fontWeight: Typography.fontWeight.semibold,
      color: Colors.gray[900],
    }}>
      Card Header
    </Text>
  </View>
  <View style={{ padding: Spacing[6] }}>
    <Text style={{
      color: Colors.gray[600],
      lineHeight: Typography.lineHeight.relaxed,
    }}>
      Card content goes here with proper spacing and typography.
    </Text>
  </View>
  <View style={{
    padding: Spacing[6],
    backgroundColor: Colors.gray[50],
    borderTopWidth: 1,
    borderTopColor: Colors.gray[100],
  }}>
    <TouchableOpacity>
      <Text style={{
        color: Colors.primary[600],
        fontFamily: Typography.fontFamily.body,
        fontSize: Typography.fontSize.base,
        fontWeight: Typography.fontWeight.medium,
      }}>
        Action
      </Text>
    </TouchableOpacity>
  </View>
</View>

// Memory Card (Flagged)
<View style={{
  position: 'relative',
  borderWidth: 1,
  borderColor: Colors.gray[200],
  borderRadius: BorderRadius['2xl'],
  ...Shadows.getShadow('sm'),
  overflow: 'hidden',
}}>
  <LinearGradient
    colors={[Colors.white, Colors.gray[50]]}
    style={{
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    }}
  />

  {/* Memory Flag */}
  <View style={{
    position: 'absolute',
    top: Spacing[4],
    right: Spacing[4],
    backgroundColor: Colors.secondary[500],
    paddingHorizontal: Spacing[3],
    paddingVertical: Spacing[1],
    borderRadius: BorderRadius.full,
    ...Shadows.getShadow('md'),
  }}>
    <Text style={{
      color: Colors.white,
      fontSize: Typography.fontSize.xs,
      fontWeight: Typography.fontWeight.medium,
    }}>
      Memory
    </Text>
  </View>

  <View style={{ padding: Spacing[6] }}>
    <View style={{
      width: 48,
      height: 48,
      backgroundColor: Colors.secondary[100],
      borderRadius: BorderRadius.xl,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: Spacing[4],
    }}>
      {/* Icon component would go here */}
    </View>
    <Text style={{
      fontFamily: Typography.fontFamily.display,
      fontSize: Typography.fontSize.xl,
      fontWeight: Typography.fontWeight.semibold,
      color: Colors.gray[900],
      marginBottom: Spacing[2],
    }}>
      Family Graduation
    </Text>
    <Text style={{
      color: Colors.gray[600],
      lineHeight: Typography.lineHeight.relaxed,
    }}>
      A special moment preserved in our family timeline.
    </Text>
  </View>
</View>

// Feature Card
<View style={{
  backgroundColor: Colors.white,
  borderWidth: 1,
  borderColor: Colors.gray[200],
  borderRadius: BorderRadius['2xl'],
  ...Shadows.getShadow('sm'),
  overflow: 'hidden',
}}>
  <View style={{ padding: Spacing[6] }}>
    <View style={{
      width: 48,
      height: 48,
      backgroundColor: Colors.primary[100],
      borderRadius: BorderRadius.xl,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: Spacing[4],
    }}>
      {/* Icon component would go here */}
    </View>
    <Text style={{
      fontFamily: Typography.fontFamily.display,
      fontSize: Typography.fontSize.xl,
      fontWeight: Typography.fontWeight.semibold,
      color: Colors.gray[900],
      marginBottom: Spacing[2],
    }}>
      Family Groups
    </Text>
    <Text style={{
      color: Colors.gray[600],
      lineHeight: Typography.lineHeight.relaxed,
    }}>
      Create private spaces for different parts of your family.
    </Text>
  </View>
</View>
```

### Form Elements

```tsx
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Colors, Spacing, BorderRadius, Typography } from '../constants';

// Form Group
<View style={{ flexDirection: 'column', gap: Spacing[2] }}>
  <Text style={{
    fontFamily: Typography.fontFamily.body,
    fontSize: Typography.fontSize.sm,
    fontWeight: Typography.fontWeight.medium,
    color: Colors.gray[700],
    letterSpacing: Typography.letterSpacing.wide,
  }}>
    Full Name
  </Text>
  <TextInput
    placeholder="Enter your full name"
    style={{
      width: '100%',
      paddingHorizontal: Spacing[4],
      paddingVertical: Spacing[3],
      borderWidth: 2,
      borderColor: Colors.gray[200],
      borderRadius: BorderRadius.xl,
      fontFamily: Typography.fontFamily.body,
      fontSize: Typography.fontSize.base,
      color: Colors.gray[900],
      backgroundColor: Colors.white,
    }}
    placeholderTextColor={Colors.gray[400]}
  />
</View>

// Textarea (using TextInput with multiline)
<View style={{ flexDirection: 'column', gap: Spacing[2] }}>
  <Text style={{
    fontFamily: Typography.fontFamily.body,
    fontSize: Typography.fontSize.sm,
    fontWeight: Typography.fontWeight.medium,
    color: Colors.gray[700],
    letterSpacing: Typography.letterSpacing.wide,
  }}>
    Share a Memory
  </Text>
  <TextInput
    placeholder="Tell us about a special family moment..."
    multiline
    numberOfLines={4}
    style={{
      width: '100%',
      paddingHorizontal: Spacing[4],
      paddingVertical: Spacing[3],
      borderWidth: 2,
      borderColor: Colors.gray[200],
      borderRadius: BorderRadius.xl,
      fontFamily: Typography.fontFamily.body,
      fontSize: Typography.fontSize.base,
      color: Colors.gray[900],
      backgroundColor: Colors.white,
      minHeight: 120,
      textAlignVertical: 'top',
    }}
    placeholderTextColor={Colors.gray[400]}
  />
</View>

// Select (using TouchableOpacity with Picker)
<View style={{ flexDirection: 'column', gap: Spacing[2] }}>
  <Text style={{
    fontFamily: Typography.fontFamily.body,
    fontSize: Typography.fontSize.sm,
    fontWeight: Typography.fontWeight.medium,
    color: Colors.gray[700],
    letterSpacing: Typography.letterSpacing.wide,
  }}>
    Family Group
  </Text>
  <TouchableOpacity
    style={{
      width: '100%',
      paddingHorizontal: Spacing[4],
      paddingVertical: Spacing[3],
      paddingRight: Spacing[12],
      borderWidth: 2,
      borderColor: Colors.gray[200],
      borderRadius: BorderRadius.xl,
      backgroundColor: Colors.white,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}
  >
    <Text style={{
      fontFamily: Typography.fontFamily.body,
      fontSize: Typography.fontSize.base,
      color: Colors.gray[900],
    }}>
      The Smith Family
    </Text>
    {/* Chevron down icon would go here */}
  </TouchableOpacity>
</View>

// Input with Icon
<View style={{ flexDirection: 'column', gap: Spacing[2] }}>
  <Text style={{
    fontFamily: Typography.fontFamily.body,
    fontSize: Typography.fontSize.sm,
    fontWeight: Typography.fontWeight.medium,
    color: Colors.gray[700],
    letterSpacing: Typography.letterSpacing.wide,
  }}>
    Search Messages
  </Text>
  <View style={{ position: 'relative' }}>
    <View style={{
      position: 'absolute',
      left: Spacing[3],
      top: 0,
      bottom: 0,
      justifyContent: 'center',
      zIndex: 1,
    }}>
      {/* Search icon would go here */}
    </View>
    <TextInput
      placeholder="Search family memories..."
      style={{
        width: '100%',
        paddingHorizontal: Spacing[4],
        paddingLeft: Spacing[10],
        paddingVertical: Spacing[3],
        borderWidth: 2,
        borderColor: Colors.gray[200],
        borderRadius: BorderRadius.xl,
        fontFamily: Typography.fontFamily.body,
        fontSize: Typography.fontSize.base,
        color: Colors.gray[900],
        backgroundColor: Colors.white,
      }}
      placeholderTextColor={Colors.gray[400]}
    />
  </View>
</View>

// Form States
// Error State
<View style={{ flexDirection: 'column', gap: Spacing[2] }}>
  <Text style={{
    fontFamily: Typography.fontFamily.body,
    fontSize: Typography.fontSize.sm,
    fontWeight: Typography.fontWeight.medium,
    color: Colors.gray[700],
    letterSpacing: Typography.letterSpacing.wide,
  }}>
    Email Address
  </Text>
  <TextInput
    placeholder="your@email.com"
    style={{
      width: '100%',
      paddingHorizontal: Spacing[4],
      paddingVertical: Spacing[3],
      borderWidth: 2,
      borderColor: Colors.error[300],
      borderRadius: BorderRadius.xl,
      fontFamily: Typography.fontFamily.body,
      fontSize: Typography.fontSize.base,
      color: Colors.gray[900],
      backgroundColor: Colors.white,
    }}
    placeholderTextColor={Colors.gray[400]}
  />
  <Text style={{
    fontSize: Typography.fontSize.sm,
    color: Colors.error[600],
  }}>
    Please enter a valid email address
  </Text>
</View>

// Success State
<View style={{ flexDirection: 'column', gap: Spacing[2] }}>
  <Text style={{
    fontFamily: Typography.fontFamily.body,
    fontSize: Typography.fontSize.sm,
    fontWeight: Typography.fontWeight.medium,
    color: Colors.gray[700],
    letterSpacing: Typography.letterSpacing.wide,
  }}>
    Password
  </Text>
  <TextInput
    placeholder="Enter password"
    secureTextEntry
    style={{
      width: '100%',
      paddingHorizontal: Spacing[4],
      paddingVertical: Spacing[3],
      borderWidth: 2,
      borderColor: Colors.success[300],
      borderRadius: BorderRadius.xl,
      fontFamily: Typography.fontFamily.body,
      fontSize: Typography.fontSize.base,
      color: Colors.gray[900],
      backgroundColor: Colors.white,
    }}
    placeholderTextColor={Colors.gray[400]}
  />
  <Text style={{
    fontSize: Typography.fontSize.sm,
    color: Colors.success[600],
  }}>
    Password strength: Strong
  </Text>
</View>
```

### Chat Components

```html
<!-- Chat Container -->
<div class="flex flex-col h-full bg-gray-50">
  <!-- Chat Header -->
  <div class="bg-white border-b border-gray-200 px-6 py-4">
    <div class="flex items-center space-x-3">
      <div
        class="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center"
      >
        <span class="text-white font-semibold text-sm">SF</span>
      </div>
      <div>
        <h3 class="font-medium text-gray-900">Smith Family</h3>
        <p class="text-sm text-gray-500">5 members</p>
      </div>
    </div>
  </div>

  <!-- Messages -->
  <div class="flex-1 overflow-y-auto p-5 flex flex-col gap-4">
    <!-- Other's Message -->
    <div class="flex gap-3 max-w-[70%]">
      <div class="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
      <div
        class="group relative bg-white rounded-2xl rounded-tl-md px-4 py-3 shadow-sm"
      >
        <p class="text-gray-900 text-base leading-normal m-0">
          Just got back from Emma's graduation! So proud 🎓
        </p>
        <p class="text-xs text-gray-500 mt-1">2:30 PM</p>
        <!-- Flag Button -->
        <button
          class="absolute -top-2 -right-2 w-6 h-6 bg-secondary-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200"
        >
          <svg
            class="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
            ></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Own Message -->
    <div class="flex gap-3 max-w-[70%] ml-auto flex-row-reverse">
      <div class="w-8 h-8 bg-primary-500 rounded-full flex-shrink-0"></div>
      <div
        class="group relative bg-primary-500 text-white rounded-2xl rounded-tr-md px-4 py-3 shadow-sm"
      >
        <p class="text-base leading-normal m-0">
          That's amazing! Can't wait to see photos 📸
        </p>
        <p class="text-xs text-primary-100 mt-1">2:32 PM</p>
        <!-- Flag Button -->
        <button
          class="absolute -top-2 -left-2 w-6 h-6 bg-secondary-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200"
        >
          <svg
            class="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
            ></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Flagged Memory Message -->
    <div class="flex gap-3 max-w-sm">
      <div class="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
      <div
        class="relative bg-white rounded-2xl rounded-tl-md px-4 py-3 shadow-sm border-l-4 border-secondary-500"
      >
        <!-- Memory Flag -->
        <div
          class="absolute -top-2 -right-2 w-6 h-6 bg-secondary-500 text-white rounded-full flex items-center justify-center"
        >
          <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
          </svg>
        </div>
        <p class="text-gray-900 text-base leading-normal m-0">
          Here's the photo from the ceremony! 🥳
        </p>
        <!-- Image Placeholder -->
        <div class="mt-3 bg-gray-100 rounded-xl p-3">
          <div
            class="w-full h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center"
          >
            <svg
              class="w-8 h-8 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
          </div>
        </div>
        <p class="text-xs text-gray-500 mt-2">2:35 PM • Added to Timeline</p>
      </div>
    </div>
  </div>

  <!-- Chat Input -->
  <div class="bg-white border-t border-gray-200 p-4">
    <div class="flex gap-3 items-end">
      <textarea
        placeholder="Type a message..."
        rows="1"
        class="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-400 focus:ring-4 focus:ring-primary-100 transition-all duration-200 outline-none resize-none min-h-[44px] max-h-[120px]"
      ></textarea>
      <button
        class="inline-flex items-center justify-center px-4 py-3 bg-gradient-to-br from-primary-500 to-primary-600 text-white font-medium rounded-xl shadow-primary hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
      >
        <svg
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</div>
```

### Timeline Components

```html
<!-- Timeline Container -->
<div class="flex flex-col gap-8 p-6">
  <!-- Timeline Item -->
  <div class="flex gap-5 relative">
    <!-- Timeline Line -->
    <div class="absolute left-5 top-16 bottom-0 w-0.5 bg-gray-200 -mb-8"></div>

    <!-- Timeline Marker -->
    <div
      class="w-10 h-10 bg-secondary-500 rounded-full flex items-center justify-center text-white font-medium shadow-md flex-shrink-0 relative z-10"
    >
      📸
    </div>

    <!-- Timeline Content -->
    <div
      class="flex-1 bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
    >
      <p class="text-sm text-gray-500 font-medium mb-2">Today, 2:35 PM</p>
      <h3 class="text-lg font-semibold text-gray-900 mb-3">
        Emma's Graduation Ceremony
      </h3>
      <p class="text-gray-700 leading-relaxed mb-4">
        Such a proud moment for our family! Emma worked so hard for this
        achievement and it really shows. The whole family was there to
        celebrate.
      </p>
      <!-- Tags -->
      <div class="flex flex-wrap gap-2">
        <span
          class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
        >
          Family Milestone
        </span>
        <span
          class="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium"
        >
          Education
        </span>
      </div>
    </div>
  </div>

  <!-- Timeline Item 2 -->
  <div class="flex gap-5 relative">
    <!-- Timeline Line -->
    <div class="absolute left-5 top-16 bottom-0 w-0.5 bg-gray-200 -mb-8"></div>

    <!-- Timeline Marker -->
    <div
      class="w-10 h-10 bg-secondary-500 rounded-full flex items-center justify-center text-white font-medium shadow-md flex-shrink-0 relative z-10"
    >
      🎂
    </div>

    <!-- Timeline Content -->
    <div
      class="flex-1 bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
    >
      <p class="text-sm text-gray-500 font-medium mb-2">March 15, 2024</p>
      <h3 class="text-lg font-semibold text-gray-900 mb-3">
        Dad's 50th Birthday Surprise
      </h3>
      <p class="text-gray-700 leading-relaxed mb-4">
        We managed to keep it a secret for weeks! The look on his face when
        everyone jumped out was priceless.
      </p>
      <!-- Tags -->
      <div class="flex flex-wrap gap-2">
        <span
          class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
        >
          Birthday
        </span>
        <span
          class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"
        >
          Celebration
        </span>
      </div>
    </div>
  </div>

  <!-- Last Timeline Item (no line) -->
  <div class="flex gap-5 relative">
    <!-- Timeline Marker -->
    <div
      class="w-10 h-10 bg-secondary-500 rounded-full flex items-center justify-center text-white font-medium shadow-md flex-shrink-0 relative z-10"
    >
      🏖️
    </div>

    <!-- Timeline Content -->
    <div
      class="flex-1 bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
    >
      <p class="text-sm text-gray-500 font-medium mb-2">December 20, 2023</p>
      <h3 class="text-lg font-semibold text-gray-900 mb-3">
        Annual Family Beach Trip
      </h3>
      <p class="text-gray-700 leading-relaxed mb-4">
        Our traditional year-end getaway to the coast. Three generations, one
        beach house, and countless memories made.
      </p>
      <!-- Tags -->
      <div class="flex flex-wrap gap-2">
        <span
          class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
        >
          Vacation
        </span>
        <span
          class="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium"
        >
          Tradition
        </span>
      </div>
    </div>
  </div>
</div>
```

## 8. Animation & Motion with React Native

### Transitions

```tsx
import { Animated } from "react-native";

// Basic transitions using Animated API
const fadeAnim = useRef(new Animated.Value(0)).current;
const scaleAnim = useRef(new Animated.Value(1)).current;

// Fade in animation
Animated.timing(fadeAnim, {
  toValue: 1,
  duration: 200,
  useNativeDriver: true,
}).start();

// Scale animation
Animated.spring(scaleAnim, {
  toValue: 1.05,
  tension: 100,
  friction: 8,
  useNativeDriver: true,
}).start();

<Animated.View
  style={{
    opacity: fadeAnim,
    transform: [{ scale: scaleAnim }],
  }}
>
  Animated content
</Animated.View>;
```

### Built-in Animations

```tsx
import { ActivityIndicator } from "react-native";

// Loading spinner
<ActivityIndicator size="large" color={Colors.primary[500]} />;

// Custom animations
const pulseAnim = useRef(new Animated.Value(1)).current;

useEffect(() => {
  const pulse = Animated.loop(
    Animated.sequence([
      Animated.timing(pulseAnim, {
        toValue: 0.8,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(pulseAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ])
  );
  pulse.start();
  return () => pulse.stop();
}, []);

<Animated.View
  style={{
    transform: [{ scale: pulseAnim }],
  }}
>
  Pulsing element
</Animated.View>;
```

### Motion Preferences

```tsx
import { AccessibilityInfo } from "react-native";

// Check for reduced motion preference
const [reducedMotion, setReducedMotion] = useState(false);

useEffect(() => {
  AccessibilityInfo.isReduceMotionEnabled().then(setReducedMotion);

  const subscription = AccessibilityInfo.addEventListener(
    "reduceMotionChanged",
    setReducedMotion
  );

  return () => subscription?.remove();
}, []);

// Conditional animation
const animationDuration = reducedMotion ? 0 : 200;

Animated.timing(fadeAnim, {
  toValue: 1,
  duration: animationDuration,
  useNativeDriver: true,
}).start();
```

## 9. Icons with React Native

### Icon System

- **Library**: Lucide React Native (modern, consistent)
- **Style**: Outline style for friendliness
- **Stroke Width**: 2px for clarity

```tsx
import { Plus, Search, Heart, Bookmark } from 'lucide-react-native';

// Icon Sizes
<Plus size={16} strokeWidth={2} color={Colors.gray[500]} />  {/* 16px */}
<Plus size={20} strokeWidth={2} color={Colors.gray[500]} />  {/* 20px */}
<Plus size={24} strokeWidth={2} color={Colors.gray[500]} />  {/* 24px */}
<Plus size={32} strokeWidth={2} color={Colors.gray[500]} />  {/* 32px */}
<Plus size={48} strokeWidth={2} color={Colors.gray[500]} />  {/* 48px */}

// Icon Colors
<Search size={24} strokeWidth={2} color={Colors.gray[500]} />  {/* Inherits color */}
<Heart size={24} strokeWidth={2} color={Colors.primary[600]} />  {/* Primary color */}
<Bookmark size={24} strokeWidth={2} color={Colors.secondary[500]} />  {/* Secondary color */}

// Icons in Context
// Button with icon
<TouchableOpacity style={{
  flexDirection: 'row',
  alignItems: 'center',
  gap: Spacing[2],
  paddingHorizontal: Spacing[4],
  paddingVertical: Spacing[2],
  backgroundColor: Colors.primary[500],
  borderRadius: BorderRadius.lg,
}}>
  <Plus size={20} strokeWidth={2} color={Colors.white} />
  <Text style={{ color: Colors.white }}>Add Memory</Text>
</TouchableOpacity>

// Icon button
<TouchableOpacity style={{
  padding: Spacing[2],
  borderRadius: BorderRadius.lg,
}}>
  <Search size={24} strokeWidth={2} color={Colors.gray[500]} />
</TouchableOpacity>
```

### Key Icons for FamDing

- **Memory**: `Bookmark`, `Heart`, `Star`
- **Chat**: `MessageCircle`, `Send`, `Smile`
- **Timeline**: `Clock`, `Calendar`, `History`
- **Family**: `Users`, `Home`, `Heart`
- **Media**: `Camera`, `Image`, `Video`, `Mic`
- **Actions**: `Plus`, `Search`, `Settings`, `Menu`, `MoreHorizontal`
- **Navigation**: `ArrowLeft`, `ArrowRight`, `ChevronDown`, `X`

## 10. Mobile Adaptations with React Native

### Touch Targets

```tsx
import { TouchableOpacity, Text } from 'react-native';

// Ensure minimum 44px touch targets
<TouchableOpacity style={{
  minHeight: 44,
  minWidth: 44,
  padding: Spacing[3],
  backgroundColor: Colors.primary[500],
  borderRadius: BorderRadius.lg,
  alignItems: 'center',
  justifyContent: 'center',
}}>
  <Text style={{ color: Colors.white }}>Touch-friendly button</Text>
</TouchableOpacity>

// Mobile-optimized form inputs
<TextInput
  style={{
    width: '100%',
    paddingHorizontal: Spacing[4],
    paddingVertical: Spacing[4],
    fontSize: Typography.fontSize.lg,
    borderWidth: 2,
    borderColor: Colors.gray[200],
    borderRadius: BorderRadius.xl,
  }}
  placeholderTextColor={Colors.gray[400]}
/>
```

### Responsive Design

```tsx
import { useWindowDimensions } from 'react-native';

const { width, height } = useWindowDimensions();

// Responsive padding based on screen size
<View style={{
  padding: width > 768 ? Spacing[6] : Spacing[4],
}}>
  {/* Responsive padding */}
</View>

// Responsive typography
<Text style={{
  fontFamily: Typography.fontFamily.display,
  fontSize: width > 768 ? Typography.fontSize['4xl'] : Typography.fontSize['2xl'],
  fontWeight: Typography.fontWeight.bold,
}}>
  {/* Responsive typography */}
</Text>

// Responsive grid (using flexWrap)
<View style={{
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: width > 768 ? Spacing[6] : Spacing[4],
}}>
  {/* Grid items */}
</View>
```

### Mobile Navigation

```tsx
import { View, TouchableOpacity, Text } from "react-native";
import { Home, Clock, MessageCircle, Users } from "lucide-react-native";

// Bottom navigation for mobile
<View
  style={{
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: Colors.gray[200],
    paddingHorizontal: Spacing[5],
    paddingVertical: Spacing[3],
    flexDirection: "row",
    justifyContent: "space-around",
    ...Shadows.getShadow("lg"),
  }}
>
  <TouchableOpacity
    style={{
      flexDirection: "column",
      alignItems: "center",
      gap: Spacing[1],
      padding: Spacing[2],
      borderRadius: BorderRadius.lg,
      minWidth: 44,
    }}
  >
    <Home size={24} strokeWidth={2} color={Colors.gray[500]} />
    <Text
      style={{
        fontSize: Typography.fontSize.xs,
        fontWeight: Typography.fontWeight.medium,
        color: Colors.gray[500],
      }}
    >
      Home
    </Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={{
      flexDirection: "column",
      alignItems: "center",
      gap: Spacing[1],
      padding: Spacing[2],
      borderRadius: BorderRadius.lg,
      backgroundColor: Colors.primary[50],
      minWidth: 44,
    }}
  >
    <Clock size={24} strokeWidth={2} color={Colors.primary[600]} />
    <Text
      style={{
        fontSize: Typography.fontSize.xs,
        fontWeight: Typography.fontWeight.medium,
        color: Colors.primary[600],
      }}
    >
      Timeline
    </Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={{
      flexDirection: "column",
      alignItems: "center",
      gap: Spacing[1],
      padding: Spacing[2],
      borderRadius: BorderRadius.lg,
      minWidth: 44,
    }}
  >
    <MessageCircle size={24} strokeWidth={2} color={Colors.gray[500]} />
    <Text
      style={{
        fontSize: Typography.fontSize.xs,
        fontWeight: Typography.fontWeight.medium,
        color: Colors.gray[500],
      }}
    >
      Chat
    </Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={{
      flexDirection: "column",
      alignItems: "center",
      gap: Spacing[1],
      padding: Spacing[2],
      borderRadius: BorderRadius.lg,
      minWidth: 44,
    }}
  >
    <Users size={24} strokeWidth={2} color={Colors.gray[500]} />
    <Text
      style={{
        fontSize: Typography.fontSize.xs,
        fontWeight: Typography.fontWeight.medium,
        color: Colors.gray[500],
      }}
    >
      Family
    </Text>
  </TouchableOpacity>
</View>;
```

## 11. Accessibility with React Native

### Focus States

```tsx
import { TouchableOpacity, Text } from "react-native";

// Accessible button with proper focus handling
<TouchableOpacity
  accessible={true}
  accessibilityRole="button"
  accessibilityLabel="Create new memory"
  style={{
    backgroundColor: Colors.primary[500],
    padding: Spacing[4],
    borderRadius: BorderRadius.lg,
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <Text style={{ color: Colors.white }}>Accessible button</Text>
</TouchableOpacity>;
```

### High Contrast Support

```tsx
import { AccessibilityInfo } from 'react-native';

// Check for high contrast mode
const [isHighContrast, setIsHighContrast] = useState(false);

useEffect(() => {
  AccessibilityInfo.isHighContrastEnabled().then(setIsHighContrast);

  const subscription = AccessibilityInfo.addEventListener(
    'highContrastDidChange',
    setIsHighContrast
  );

  return () => subscription?.remove();
}, []);

// Conditional styling for high contrast
<View style={{
  borderWidth: 1,
  borderColor: isHighContrast ? Colors.gray[900] : Colors.gray[200],
}}>
  High contrast friendly
</View>

<TouchableOpacity style={{
  backgroundColor: Colors.primary[500],
  borderWidth: isHighContrast ? 2 : 0,
  borderColor: Colors.white,
}}>
  <Text style={{ color: Colors.white }}>Enhanced contrast button</Text>
</TouchableOpacity>
```

### Motion Preferences

```tsx
import { AccessibilityInfo } from "react-native";

// Check for reduced motion preference
const [reducedMotion, setReducedMotion] = useState(false);

useEffect(() => {
  AccessibilityInfo.isReduceMotionEnabled().then(setReducedMotion);

  const subscription = AccessibilityInfo.addEventListener(
    "reduceMotionChanged",
    setReducedMotion
  );

  return () => subscription?.remove();
}, []);

// Conditional animation
const animationDuration = reducedMotion ? 0 : 200;

Animated.timing(fadeAnim, {
  toValue: 1,
  duration: animationDuration,
  useNativeDriver: true,
}).start();
```

### Screen Reader Support

```tsx
import { View, TouchableOpacity, Text } from 'react-native';

// Proper semantic markup with accessibility props
<View accessible={true} accessibilityRole="navigation" accessibilityLabel="Main navigation">
  <TouchableOpacity
    accessible={true}
    accessibilityRole="button"
    accessibilityLabel="Go to home screen"
  >
    <Text style={{ color: Colors.gray[700] }}>Home</Text>
  </TouchableOpacity>

  <TouchableOpacity
    accessible={true}
    accessibilityRole="button"
    accessibilityLabel="Go to timeline screen"
  >
    <Text style={{ color: Colors.gray[700] }}>Timeline</Text>
  </TouchableOpacity>
</View>

// ARIA labels for interactive elements
<TouchableOpacity
  accessible={true}
  accessibilityRole="button"
  accessibilityLabel="Flag this message as a memory"
  style={{
    padding: Spacing[2],
  }}
>
  <Bookmark size={20} strokeWidth={2} color={Colors.secondary[500]} />
</TouchableOpacity>
```

## 12. Dark Mode with Utilities

```html
<!-- Dark mode variants -->
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  Automatic dark mode support
</div>

<button
  class="bg-primary-500 hover:bg-primary-600 dark:bg-primary-400 dark:hover:bg-primary-500"
>
  Dark mode button
</button>

<!-- Cards in dark mode -->
<div
  class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm"
>
  <div class="p-6">
    <h3 class="text-gray-900 dark:text-white font-semibold">Dark mode card</h3>
    <p class="text-gray-600 dark:text-gray-300">Content that adapts to theme</p>
  </div>
</div>
```

## 13. Implementation Guidelines

### React Native Setup

1. **Install Dependencies**

```bash
npm install lucide-react-native expo-linear-gradient
```

2. **Create Constants Directory**

```typescript
// constants/index.ts
export * from "./Colors";
export * from "./Spacing";
export * from "./BorderRadius";
export * from "./Typography";
export * from "./Shadows";
```

3. **Configure Fonts**

```json
// app.json (Expo)
{
  "expo": {
    "fonts": [
      {
        "asset": "./assets/fonts/Poppins-Regular.ttf",
        "family": "Poppins"
      },
      {
        "asset": "./assets/fonts/Inter-Regular.ttf",
        "family": "Inter"
      }
    ]
  }
}
```

### Component Architecture

```tsx
// components/ui/Button.tsx
import React from "react";
import { TouchableOpacity, Text, ViewStyle, TextStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Colors,
  Spacing,
  BorderRadius,
  Typography,
  Shadows,
} from "../../constants";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  onPress?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  onPress,
  style,
  textStyle,
}) => {
  const baseStyle: ViewStyle = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: BorderRadius.xl,
  };

  const variants = {
    primary: {
      ...Shadows.getShadow("primary"),
    },
    secondary: {
      ...Shadows.getShadow("secondary"),
    },
    outline: {
      backgroundColor: Colors.white,
      borderWidth: 2,
      borderColor: Colors.primary[200],
      ...Shadows.getShadow("sm"),
    },
    ghost: {},
  };

  const sizes = {
    sm: {
      paddingHorizontal: Spacing[4],
      paddingVertical: Spacing[2],
    },
    md: {
      paddingHorizontal: Spacing[6],
      paddingVertical: Spacing[3],
    },
    lg: {
      paddingHorizontal: Spacing[8],
      paddingVertical: Spacing[4],
    },
  };

  const textVariants = {
    primary: { color: Colors.white },
    secondary: { color: Colors.white },
    outline: { color: Colors.primary[600] },
    ghost: { color: Colors.gray[700] },
  };

  const textSizes = {
    sm: { fontSize: Typography.fontSize.sm },
    md: { fontSize: Typography.fontSize.base },
    lg: { fontSize: Typography.fontSize.lg },
  };

  const buttonStyle: ViewStyle = {
    ...baseStyle,
    ...variants[variant],
    ...sizes[size],
    ...style,
  };

  const buttonTextStyle: TextStyle = {
    fontFamily: Typography.fontFamily.body,
    fontWeight: Typography.fontWeight.medium,
    ...textVariants[variant],
    ...textSizes[size],
    ...textStyle,
  };

  if (variant === "primary" || variant === "secondary") {
    const colors =
      variant === "primary"
        ? [Colors.primary[500], Colors.primary[600]]
        : [Colors.secondary[500], Colors.secondary[600]];

    return (
      <TouchableOpacity style={buttonStyle} onPress={onPress}>
        <LinearGradient
          colors={colors}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            borderRadius: BorderRadius.xl,
          }}
        />
        <Text style={buttonTextStyle}>{children}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={buttonTextStyle}>{children}</Text>
    </TouchableOpacity>
  );
};
```

### Best Practices

1. **Style-First Approach**: Use the design system constants for all styling
2. **Component Composition**: Build reusable components with consistent styling
3. **Mobile-First Design**: Optimize for touch interactions and mobile screens
4. **Accessibility**: Always include accessibility props and labels
5. **Performance**: Use `useNativeDriver` for animations when possible
6. **Consistency**: Stick to the design tokens defined in the constants

### File Organization

```
src/
├── constants/
│   ├── index.ts             # Export all constants
│   ├── Colors.ts            # Color palette
│   ├── Spacing.ts           # Spacing scale
│   ├── BorderRadius.ts      # Border radius values
│   ├── Typography.ts        # Typography settings
│   └── Shadows.ts           # Shadow configurations
├── components/
│   ├── ui/                  # Base UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Input.tsx
│   ├── forms/               # Form components
│   ├── layout/              # Layout components
│   └── features/            # Feature-specific components
└── utils/
    └── styleUtils.ts        # Style helper functions
```

### React Native Specific Considerations

1. **Platform Differences**: Use `Platform.select()` for platform-specific styling
2. **Touch Targets**: Ensure minimum 44px touch targets for all interactive elements
3. **Performance**: Use `useCallback` and `useMemo` for expensive operations
4. **Memory**: Avoid inline styles in large lists, use StyleSheet.create()
5. **Navigation**: Consider navigation patterns when designing components
6. **Gestures**: Implement proper gesture handling for mobile interactions

This React Native-focused design system provides a mobile-first approach to building the FamDing interface while maintaining the friendly, family-centered aesthetic and ensuring optimal performance on mobile devices.
