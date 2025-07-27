# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

FamDing is a family communication platform built with React Native and Expo. The killer feature is Memory Timeline - a one-tap memory flagging system to preserve important family moments.

## Development Commands

```bash
# Start development server
npm start

# Platform-specific development
npm run android
npm run ios  
npm run web

# Code quality
npm run lint

# Reset project (caution: removes modifications)
npm run reset-project
```

## Architecture

### Tech Stack
- **React Native 0.79.5** with **Expo SDK 53.0.20**
- **Expo Router v5.1.4** for file-based navigation
- **TypeScript** with strict mode enabled
- **React 19.0.0**

### Project Structure
- `/app` - Screens and navigation (Expo Router file-based)
  - `(tabs)` - Tab navigation screens
  - `_layout.tsx` - Root layout with theme provider
- `/components` - Reusable components
  - UI components should follow the design system
  - Use Themed* components for consistent styling
- `/constants` - App constants (Colors.ts)
- `/assets` - Fonts and images

### Key Patterns
- Path alias `@/*` configured for clean imports
- File-based routing - new screens go in `/app`
- Tab navigation structure already set up
- Dark/light theme support built in

## Design System

The project has a comprehensive design system documented in `/docs/FamDing_Design_System.md`:
- **Design Philosophy**: Friendly Modernism
- **Primary Color**: Soft Blue (#2C5282)
- **Secondary Color**: Warm Coral (#E57373)
- **Typography**: Poppins (headings), Inter (body)
- **Spacing**: 4px base unit (4, 8, 16, 24, 32, 48)
- **Border Radius**: Small (8px), Medium (16px), Large (24px)

## Core Features (from PRD)

1. **Memory Timeline** - Central feed for flagging and viewing family memories
2. **Smart Groups** - Auto-created family units with manual override
3. **Multi-format Support** - Text, voice notes, photos, videos
4. **Generational Design** - Optimized for users aged 8-80+

## Testing

Currently no test framework is set up. When implementing tests, check for common React Native testing libraries like Jest and React Native Testing Library.

## Important Context

- Project is in initial setup phase with Expo template
- Comprehensive PRD available at `/docs/FamDing_PRD.md`
- Focus on implementing Memory Timeline as the core feature first
- Design for multi-generational use with high accessibility standards
- Mobile-first but ensure web compatibility