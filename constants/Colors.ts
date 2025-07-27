/**
 * FamDing Design System Colors
 * Based on the "Friendly Modernism" design philosophy
 */

// Primary Colors (Soft Blue)
export const primary = {
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
};

// Secondary Colors (Warm Coral)
export const secondary = {
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
};

// Semantic Colors
export const success = {
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
};

export const warning = {
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
};

export const error = {
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
};

// Neutral Colors
export const gray = {
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
};

// Theme Colors
export const Colors = {
  light: {
    text: gray[900],
    textSecondary: gray[600],
    background: '#ffffff',
    backgroundSecondary: gray[50],
    tint: primary[600],
    icon: gray[500],
    tabIconDefault: gray[400],
    tabIconSelected: primary[600],
    border: gray[200],
    cardBackground: '#ffffff',
    shadowColor: '#000000',
  },
  dark: {
    text: '#ffffff',
    textSecondary: gray[300],
    background: '#0f172a',
    backgroundSecondary: gray[800],
    tint: primary[400],
    icon: gray[400],
    tabIconDefault: gray[500],
    tabIconSelected: primary[400],
    border: gray[700],
    cardBackground: gray[800],
    shadowColor: '#000000',
  },
  // Shared colors that don't change with theme
  primary,
  secondary,
  success,
  warning,
  error,
  gray,
  white: '#ffffff',
  black: '#000000',
  transparent: 'transparent',
};
