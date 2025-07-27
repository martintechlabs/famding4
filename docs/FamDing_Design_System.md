# FamDing Design System - Tailwind CSS 4

## 1. Design Philosophy

FamDing's design system embodies **"Friendly Modernism"** - combining contemporary design patterns with warm, approachable aesthetics that make technology feel human and family-centered.

### Core Principles

1. **Human-Centered**: Designed for real families, not tech enthusiasts
2. **Effortless Interaction**: Intuitive gestures and clear visual hierarchy
3. **Warm Technology**: Modern interfaces with emotional warmth
4. **Inclusive Design**: Accessible across generations and abilities
5. **Memory-First**: Visual design that celebrates and preserves moments

## 2. Tailwind CSS 4 Configuration

### CSS-First Configuration (`@theme` directive)

```css
@import "tailwindcss";

@theme {
  /* Color Palette - Modern, friendly family colors */
  --color-primary-50: #f0f9ff;
  --color-primary-100: #e0f2fe;
  --color-primary-200: #bae6fd;
  --color-primary-300: #7dd3fc;
  --color-primary-400: #38bdf8;
  --color-primary-500: #0ea5e9;  /* Modern sky blue */
  --color-primary-600: #0284c7;
  --color-primary-700: #0369a1;
  --color-primary-800: #075985;
  --color-primary-900: #0c4a6e;

  --color-secondary-50: #fef7f0;
  --color-secondary-100: #feecdc;
  --color-secondary-200: #fcd9bd;
  --color-secondary-300: #fdba8c;
  --color-secondary-400: #ff8a4c;  /* Warm coral */
  --color-secondary-500: #ff6b35;
  --color-secondary-600: #ea580c;
  --color-secondary-700: #c2410c;
  --color-secondary-800: #9a3412;
  --color-secondary-900: #7c2d12;

  /* Typography */
  --font-family-display: "Poppins", ui-sans-serif, system-ui, sans-serif;
  --font-family-body: "Inter", ui-sans-serif, system-ui, sans-serif;
  
  /* Spacing Scale (8px base) */
  --spacing-0: 0;
  --spacing-1: 0.125rem;
  --spacing-2: 0.25rem;
  --spacing-3: 0.5rem;
  --spacing-4: 0.75rem;
  --spacing-5: 1rem;
  --spacing-6: 1.25rem;
  --spacing-7: 1.5rem;
  --spacing-8: 2rem;
  --spacing-10: 2.5rem;
  --spacing-12: 3rem;
  --spacing-16: 4rem;
  --spacing-20: 5rem;
  --spacing-24: 6rem;
  --spacing-32: 8rem;

  /* Border Radius */
  --radius-xs: 0.125rem;
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-2xl: 1.5rem;
  --radius-3xl: 2rem;

  /* Shadows */
  --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --shadow-primary: 0 4px 14px 0 rgb(14 165 233 / 0.15);
  --shadow-secondary: 0 4px 14px 0 rgb(255 107 53 / 0.15);

  /* Animation */
  --animate-duration-fast: 150ms;
  --animate-duration-normal: 250ms;
  --animate-duration-slow: 350ms;
  --animate-timing-ease-out: cubic-bezier(0, 0, 0.2, 1);
  --animate-timing-ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
}
```

## 3. Color System with Utilities

### Primary Colors (Soft Blue)
```html
<!-- Backgrounds -->
<div class="bg-primary-50">Lightest</div>
<div class="bg-primary-500">Main Primary</div>
<div class="bg-primary-900">Darkest</div>

<!-- Text -->
<p class="text-primary-600">Primary text</p>
<p class="text-primary-700">Darker primary</p>

<!-- Borders -->
<div class="border border-primary-200">Light border</div>
<div class="border-2 border-primary-500">Main border</div>
```

### Secondary Colors (Warm Coral)
```html
<!-- Memory accent colors -->
<div class="bg-secondary-500 text-white">Memory flag</div>
<div class="bg-secondary-100 text-secondary-700">Memory background</div>
<button class="bg-secondary-500 hover:bg-secondary-600">Flag Memory</button>
```

### Semantic Colors
```html
<!-- Success -->
<div class="bg-green-50 text-green-700 border border-green-200">Success message</div>

<!-- Warning -->
<div class="bg-yellow-50 text-yellow-700 border border-yellow-200">Warning message</div>

<!-- Error -->
<div class="bg-red-50 text-red-700 border border-red-200">Error message</div>

<!-- Info -->
<div class="bg-blue-50 text-blue-700 border border-blue-200">Info message</div>
```

## 4. Typography with Utilities

### Font Families
```html
<!-- Display font (Poppins) for headings -->
<h1 class="font-display text-5xl font-bold">Welcome to FamDing</h1>
<h2 class="font-display text-4xl font-semibold">Create Memories</h2>

<!-- Body font (Inter) for content -->
<p class="font-body text-base">Regular body text content</p>
<p class="font-body text-lg leading-relaxed">Large body text</p>
```

### Typography Scale & Combinations
```html
<!-- Display Text -->
<h1 class="font-display text-5xl font-bold leading-tight tracking-tight text-gray-900">
  Display Large
</h1>

<h2 class="font-display text-4xl font-semibold leading-tight tracking-tight text-gray-900">
  Display Medium  
</h2>

<!-- Headings -->
<h1 class="font-display text-3xl font-semibold leading-tight text-gray-900">
  Heading 1
</h1>

<h2 class="font-display text-2xl font-medium leading-snug text-gray-800">
  Heading 2
</h2>

<h3 class="font-body text-xl font-semibold leading-snug text-gray-800">
  Heading 3
</h3>

<!-- Body Text -->
<p class="font-body text-lg leading-relaxed text-gray-700">
  Large body text for important content
</p>

<p class="font-body text-base leading-normal text-gray-700">
  Regular body text for most content
</p>

<p class="font-body text-sm leading-normal text-gray-600">
  Small body text for secondary information
</p>

<!-- Labels & Captions -->
<label class="font-body text-sm font-medium leading-normal text-gray-700 tracking-wide">
  Form Label
</label>

<span class="font-body text-xs leading-normal text-gray-500">
  Caption or metadata
</span>
```

## 5. Spacing & Layout with Utilities

### Spacing Scale (8px base unit)
```html
<!-- Padding -->
<div class="p-0">No padding</div>
<div class="p-1">2px padding</div>
<div class="p-2">4px padding</div>
<div class="p-3">8px padding</div>
<div class="p-4">12px padding</div>
<div class="p-5">16px padding</div>
<div class="p-6">20px padding</div>
<div class="p-8">32px padding</div>

<!-- Margins -->
<div class="m-4">12px margin</div>
<div class="mx-6">20px horizontal margin</div>
<div class="my-8">32px vertical margin</div>

<!-- Gaps -->
<div class="flex gap-4">12px gap between items</div>
<div class="grid gap-6">20px grid gap</div>
```

### Layout Patterns
```html
<!-- Container Layouts -->
<div class="max-w-sm mx-auto">Small container (640px)</div>
<div class="max-w-4xl mx-auto">Large container (896px)</div>
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">Full layout container</div>

<!-- Grid Layouts -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- Responsive grid -->
</div>

<div class="grid grid-cols-[300px_1fr] gap-6">
  <!-- Sidebar layout -->
</div>

<div class="grid grid-cols-[1fr_320px] gap-6">
  <!-- Chat layout -->
</div>

<!-- Flex Layouts -->
<div class="flex items-center justify-between">
  <!-- Header layout -->
</div>

<div class="flex flex-col space-y-4">
  <!-- Vertical stack -->
</div>
```

## 6. Border Radius & Shadows with Utilities

### Border Radius
```html
<!-- Rounded corners -->
<div class="rounded-none">No radius</div>
<div class="rounded-sm">Small radius (4px)</div>
<div class="rounded-md">Medium radius (8px)</div>
<div class="rounded-lg">Large radius (12px)</div>
<div class="rounded-xl">Extra large radius (16px)</div>
<div class="rounded-2xl">2XL radius (24px)</div>
<div class="rounded-3xl">3XL radius (32px)</div>
<div class="rounded-full">Fully rounded</div>

<!-- Specific corners -->
<div class="rounded-t-xl">Top corners only</div>
<div class="rounded-r-xl">Right corners only</div>
```

### Shadows
```html
<!-- Standard shadows -->
<div class="shadow-xs">Extra small shadow</div>
<div class="shadow-sm">Small shadow</div>
<div class="shadow-md">Medium shadow</div>
<div class="shadow-lg">Large shadow</div>
<div class="shadow-xl">Extra large shadow</div>

<!-- Colored shadows (custom utilities) -->
<div class="shadow-primary">Primary colored shadow</div>
<div class="shadow-secondary">Secondary colored shadow</div>

<!-- Interactive shadows -->
<button class="shadow-sm hover:shadow-md transition-shadow">
  Hover for more shadow
</button>
```

## 7. Component Patterns with Utilities

### Buttons

```html
<!-- Primary Button -->
<button class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-br from-primary-500 to-primary-600 text-white font-medium rounded-xl shadow-primary hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 border border-transparent">
  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
  </svg>
  Create Memory
</button>

<!-- Secondary Button -->
<button class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-br from-secondary-500 to-secondary-600 text-white font-medium rounded-xl shadow-secondary hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 border border-transparent">
  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
  </svg>
  Flag Memory
</button>

<!-- Outline Button -->
<button class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary-600 font-medium rounded-xl border-2 border-primary-200 shadow-sm hover:bg-primary-50 hover:border-primary-300 transition-all duration-200">
  View Timeline
</button>

<!-- Ghost Button -->
<button class="inline-flex items-center justify-center gap-2 px-6 py-3 text-gray-700 font-medium rounded-xl hover:bg-gray-100 transition-all duration-200">
  Cancel
</button>

<!-- Button Sizes -->
<!-- Small -->
<button class="inline-flex items-center justify-center gap-1 px-4 py-2 bg-primary-500 text-white font-medium text-sm rounded-lg shadow-primary hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
  Small Button
</button>

<!-- Large -->
<button class="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary-500 text-white font-medium text-lg rounded-2xl shadow-primary hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
  Large Button
</button>

<!-- Icon Button -->
<button class="inline-flex items-center justify-center w-12 h-12 bg-primary-500 text-white rounded-xl shadow-primary hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
  </svg>
</button>
```

### Cards

```html
<!-- Basic Card -->
<div class="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden">
  <div class="p-6 border-b border-gray-100">
    <h3 class="font-display text-xl font-semibold text-gray-900">Card Header</h3>
  </div>
  <div class="p-6">
    <p class="text-gray-600 leading-relaxed">Card content goes here with proper spacing and typography.</p>
  </div>
  <div class="p-6 bg-gray-50 border-t border-gray-100">
    <button class="text-primary-600 font-medium hover:text-primary-700">Action</button>
  </div>
</div>

<!-- Memory Card (Flagged) -->
<div class="relative bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-secondary-500 before:to-secondary-400">
  <!-- Memory Flag -->
  <div class="absolute top-4 right-4 bg-secondary-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-md">
    Memory
  </div>
  
  <div class="p-6">
    <div class="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center mb-4">
      <svg class="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
      </svg>
    </div>
    <h3 class="font-display text-xl font-semibold text-gray-900 mb-2">Family Graduation</h3>
    <p class="text-gray-600 leading-relaxed">A special moment preserved in our family timeline.</p>
  </div>
</div>

<!-- Feature Card -->
<div class="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden">
  <div class="p-6">
    <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
      <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
      </svg>
    </div>
    <h3 class="font-display text-xl font-semibold text-gray-900 mb-2">Family Groups</h3>
    <p class="text-gray-600 leading-relaxed">Create private spaces for different parts of your family.</p>
  </div>
</div>
```

### Form Elements

```html
<!-- Form Group -->
<div class="flex flex-col gap-2">
  <label class="font-body text-sm font-medium text-gray-700 tracking-wide">
    Full Name
  </label>
  <input 
    type="text" 
    placeholder="Enter your full name"
    class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl font-body text-base text-gray-900 bg-white placeholder:text-gray-400 focus:outline-none focus:border-primary-400 focus:ring-4 focus:ring-primary-100 transition-all duration-200"
  >
</div>

<!-- Textarea -->
<div class="flex flex-col gap-2">
  <label class="font-body text-sm font-medium text-gray-700 tracking-wide">
    Share a Memory
  </label>
  <textarea 
    placeholder="Tell us about a special family moment..."
    rows="4"
    class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl font-body text-base text-gray-900 bg-white placeholder:text-gray-400 focus:outline-none focus:border-primary-400 focus:ring-4 focus:ring-primary-100 transition-all duration-200 resize-none min-h-[120px]"
  ></textarea>
</div>

<!-- Select -->
<div class="flex flex-col gap-2">
  <label class="font-body text-sm font-medium text-gray-700 tracking-wide">
    Family Group
  </label>
  <select class="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-xl font-body text-base text-gray-900 bg-white focus:outline-none focus:border-primary-400 focus:ring-4 focus:ring-primary-100 transition-all duration-200 appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3E%3Cpath stroke=\'%23737373\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M6 8l4 4 4-4\'/%3E%3C/svg%3E')] bg-[length:1.25em_1.25em] bg-[right_1rem_center] bg-no-repeat">
    <option>The Smith Family</option>
    <option>Johnson Extended Family</option>
    <option>Brown Family Circle</option>
  </select>
</div>

<!-- Input with Icon -->
<div class="flex flex-col gap-2">
  <label class="font-body text-sm font-medium text-gray-700 tracking-wide">
    Search Messages
  </label>
  <div class="relative">
    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
      </svg>
    </div>
    <input 
      type="text" 
      placeholder="Search family memories..."
      class="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl font-body text-base text-gray-900 bg-white placeholder:text-gray-400 focus:outline-none focus:border-primary-400 focus:ring-4 focus:ring-primary-100 transition-all duration-200"
    >
  </div>
</div>

<!-- Form States -->
<!-- Error State -->
<div class="flex flex-col gap-2">
  <label class="font-body text-sm font-medium text-gray-700 tracking-wide">
    Email Address
  </label>
  <input 
    type="email" 
    placeholder="your@email.com"
    class="w-full px-4 py-3 border-2 border-red-300 rounded-xl font-body text-base text-gray-900 bg-white placeholder:text-gray-400 focus:outline-none focus:border-red-400 focus:ring-4 focus:ring-red-100 transition-all duration-200"
  >
  <p class="text-sm text-red-600">Please enter a valid email address</p>
</div>

<!-- Success State -->
<div class="flex flex-col gap-2">
  <label class="font-body text-sm font-medium text-gray-700 tracking-wide">
    Password
  </label>
  <input 
    type="password" 
    placeholder="Enter password"
    class="w-full px-4 py-3 border-2 border-green-300 rounded-xl font-body text-base text-gray-900 bg-white placeholder:text-gray-400 focus:outline-none focus:border-green-400 focus:ring-4 focus:ring-green-100 transition-all duration-200"
  >
  <p class="text-sm text-green-600">Password strength: Strong</p>
</div>
```

### Chat Components

```html
<!-- Chat Container -->
<div class="flex flex-col h-full bg-gray-50">
  <!-- Chat Header -->
  <div class="bg-white border-b border-gray-200 px-6 py-4">
    <div class="flex items-center space-x-3">
      <div class="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
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
      <div class="group relative bg-white rounded-2xl rounded-tl-md px-4 py-3 shadow-sm">
        <p class="text-gray-900 text-base leading-normal m-0">
          Just got back from Emma's graduation! So proud 🎓
        </p>
        <p class="text-xs text-gray-500 mt-1">2:30 PM</p>
        <!-- Flag Button -->
        <button class="absolute -top-2 -right-2 w-6 h-6 bg-secondary-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200">
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Own Message -->
    <div class="flex gap-3 max-w-[70%] ml-auto flex-row-reverse">
      <div class="w-8 h-8 bg-primary-500 rounded-full flex-shrink-0"></div>
      <div class="group relative bg-primary-500 text-white rounded-2xl rounded-tr-md px-4 py-3 shadow-sm">
        <p class="text-base leading-normal m-0">
          That's amazing! Can't wait to see photos 📸
        </p>
        <p class="text-xs text-primary-100 mt-1">2:32 PM</p>
        <!-- Flag Button -->
        <button class="absolute -top-2 -left-2 w-6 h-6 bg-secondary-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200">
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Flagged Memory Message -->
    <div class="flex gap-3 max-w-sm">
      <div class="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
      <div class="relative bg-white rounded-2xl rounded-tl-md px-4 py-3 shadow-sm border-l-4 border-secondary-500">
        <!-- Memory Flag -->
        <div class="absolute -top-2 -right-2 w-6 h-6 bg-secondary-500 text-white rounded-full flex items-center justify-center">
          <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
          </svg>
        </div>
        <p class="text-gray-900 text-base leading-normal m-0">
          Here's the photo from the ceremony! 🥳
        </p>
        <!-- Image Placeholder -->
        <div class="mt-3 bg-gray-100 rounded-xl p-3">
          <div class="w-full h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
            <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
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
      <button class="inline-flex items-center justify-center px-4 py-3 bg-gradient-to-br from-primary-500 to-primary-600 text-white font-medium rounded-xl shadow-primary hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
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
    <div class="w-10 h-10 bg-secondary-500 rounded-full flex items-center justify-center text-white font-medium shadow-md flex-shrink-0 relative z-10">
      📸
    </div>
    
    <!-- Timeline Content -->
    <div class="flex-1 bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
      <p class="text-sm text-gray-500 font-medium mb-2">Today, 2:35 PM</p>
      <h3 class="text-lg font-semibold text-gray-900 mb-3">Emma's Graduation Ceremony</h3>
      <p class="text-gray-700 leading-relaxed mb-4">
        Such a proud moment for our family! Emma worked so hard for this achievement and it really shows. 
        The whole family was there to celebrate.
      </p>
      <!-- Tags -->
      <div class="flex flex-wrap gap-2">
        <span class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
          Family Milestone
        </span>
        <span class="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium">
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
    <div class="w-10 h-10 bg-secondary-500 rounded-full flex items-center justify-center text-white font-medium shadow-md flex-shrink-0 relative z-10">
      🎂
    </div>
    
    <!-- Timeline Content -->
    <div class="flex-1 bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
      <p class="text-sm text-gray-500 font-medium mb-2">March 15, 2024</p>
      <h3 class="text-lg font-semibold text-gray-900 mb-3">Dad's 50th Birthday Surprise</h3>
      <p class="text-gray-700 leading-relaxed mb-4">
        We managed to keep it a secret for weeks! The look on his face when everyone jumped out was priceless.
      </p>
      <!-- Tags -->
      <div class="flex flex-wrap gap-2">
        <span class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
          Birthday
        </span>
        <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
          Celebration
        </span>
      </div>
    </div>
  </div>

  <!-- Last Timeline Item (no line) -->
  <div class="flex gap-5 relative">
    <!-- Timeline Marker -->
    <div class="w-10 h-10 bg-secondary-500 rounded-full flex items-center justify-center text-white font-medium shadow-md flex-shrink-0 relative z-10">
      🏖️
    </div>
    
    <!-- Timeline Content -->
    <div class="flex-1 bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
      <p class="text-sm text-gray-500 font-medium mb-2">December 20, 2023</p>
      <h3 class="text-lg font-semibold text-gray-900 mb-3">Annual Family Beach Trip</h3>
      <p class="text-gray-700 leading-relaxed mb-4">
        Our traditional year-end getaway to the coast. Three generations, one beach house, and countless memories made.
      </p>
      <!-- Tags -->
      <div class="flex flex-wrap gap-2">
        <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
          Vacation
        </span>
        <span class="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
          Tradition
        </span>
      </div>
    </div>
  </div>
</div>
```

## 8. Animation & Motion with Utilities

### Transitions
```html
<!-- Basic transitions -->
<div class="transition-all duration-200 ease-out">All properties</div>
<div class="transition-colors duration-200">Colors only</div>
<div class="transition-transform duration-300">Transform only</div>
<div class="transition-shadow duration-200">Shadow only</div>

<!-- Interactive elements -->
<button class="bg-primary-500 hover:bg-primary-600 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
  Hover me
</button>

<div class="transform hover:scale-105 transition-transform duration-300">
  Scale on hover
</div>
```

### Built-in Animations
```html
<!-- Tailwind's built-in animations -->
<div class="animate-pulse">Loading placeholder</div>
<div class="animate-bounce">Bouncing element</div>
<div class="animate-spin">Loading spinner</div>
<div class="animate-ping">Notification dot</div>

<!-- Custom animations with arbitrary values -->
<div class="animate-[fadeIn_0.5s_ease-out]">Custom fade in</div>
<div class="animate-[slideUp_0.3s_ease-out]">Custom slide up</div>
```

### Motion Preferences
```html
<!-- Respect user's motion preferences -->
<div class="motion-reduce:transition-none motion-reduce:animate-none">
  Respects reduced motion
</div>

<button class="hover:scale-105 motion-reduce:hover:scale-100 transition-transform">
  Conditional animation
</button>
```

## 9. Icons with Utilities

### Icon System
- **Library**: Lucide React (modern, consistent)
- **Style**: Outline style for friendliness
- **Stroke Width**: 2px for clarity

```html
<!-- Icon Sizes -->
<svg class="w-4 h-4" stroke-width="2" stroke="currentColor" fill="none"><!-- 16px --></svg>
<svg class="w-5 h-5" stroke-width="2" stroke="currentColor" fill="none"><!-- 20px --></svg>
<svg class="w-6 h-6" stroke-width="2" stroke="currentColor" fill="none"><!-- 24px --></svg>
<svg class="w-8 h-8" stroke-width="2" stroke="currentColor" fill="none"><!-- 32px --></svg>
<svg class="w-12 h-12" stroke-width="2" stroke="currentColor" fill="none"><!-- 48px --></svg>

<!-- Icon Colors -->
<svg class="w-6 h-6 text-gray-500" stroke="currentColor" fill="none"><!-- Inherits text color --></svg>
<svg class="w-6 h-6 text-primary-600" stroke="currentColor" fill="none"><!-- Primary color --></svg>
<svg class="w-6 h-6 text-secondary-500" stroke="currentColor" fill="none"><!-- Secondary color --></svg>

<!-- Icons in Context -->
<!-- Button with icon -->
<button class="inline-flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg">
  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
  </svg>
  Add Memory
</button>

<!-- Icon button -->
<button class="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
  </svg>
</button>
```

### Key Icons for FamDing
- **Memory**: `Bookmark`, `Heart`, `Star`
- **Chat**: `MessageCircle`, `Send`, `Smile`
- **Timeline**: `Clock`, `Calendar`, `History`
- **Family**: `Users`, `Home`, `Heart`
- **Media**: `Camera`, `Image`, `Video`, `Mic`
- **Actions**: `Plus`, `Search`, `Settings`, `Menu`, `MoreHorizontal`
- **Navigation**: `ArrowLeft`, `ArrowRight`, `ChevronDown`, `X`



## 10. Mobile Adaptations with Utilities

### Touch Targets
```html
<!-- Ensure minimum 44px touch targets -->
<button class="min-h-[44px] min-w-[44px] p-3 bg-primary-500 text-white rounded-lg">
  Touch-friendly button
</button>

<!-- Mobile-optimized form inputs -->
<input class="w-full px-4 py-4 text-lg border-2 border-gray-200 rounded-xl md:py-3 md:text-base">
```

### Responsive Design
```html
<!-- Mobile-first responsive design -->
<div class="p-4 md:p-6 lg:p-8">
  <!-- Responsive padding -->
</div>

<h1 class="text-2xl md:text-3xl lg:text-4xl font-display font-bold">
  <!-- Responsive typography -->
</h1>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
  <!-- Responsive grid -->
</div>
```

### Mobile Navigation
```html
<!-- Bottom navigation for mobile -->
<nav class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-5 py-3 flex justify-around shadow-lg backdrop-blur-sm md:hidden">
  <a href="#" class="flex flex-col items-center gap-1 p-2 rounded-lg text-gray-500 min-w-[44px]">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
    </svg>
    <span class="text-xs font-medium">Home</span>
  </a>
  
  <a href="#" class="flex flex-col items-center gap-1 p-2 rounded-lg text-primary-600 bg-primary-50 min-w-[44px]">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
    <span class="text-xs font-medium">Timeline</span>
  </a>
  
  <a href="#" class="flex flex-col items-center gap-1 p-2 rounded-lg text-gray-500 min-w-[44px]">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
    </svg>
    <span class="text-xs font-medium">Chat</span>
  </a>
  
  <a href="#" class="flex flex-col items-center gap-1 p-2 rounded-lg text-gray-500 min-w-[44px]">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
    </svg>
    <span class="text-xs font-medium">Family</span>
  </a>
</nav>
```

## 11. Accessibility with Utilities

### Focus States
```html
<!-- Built-in focus utilities -->
<button class="focus:outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400">
  Accessible button
</button>

<!-- Focus-visible for keyboard navigation -->
<a href="#" class="focus-visible:outline-2 focus-visible:outline-primary-500 focus-visible:outline-offset-2">
  Keyboard accessible link
</a>
```

### High Contrast Support
```html
<!-- High contrast mode support -->
<div class="border border-gray-200 contrast-more:border-gray-900">
  High contrast friendly
</div>

<button class="bg-primary-500 text-white contrast-more:border-2 contrast-more:border-white">
  Enhanced contrast button
</button>
```

### Motion Preferences
```html
<!-- Respect reduced motion preferences -->
<div class="transition-transform motion-reduce:transition-none">
  Respects motion preferences
</div>

<button class="hover:scale-105 motion-reduce:hover:scale-100">
  Conditional animation
</button>
```

### Screen Reader Support
```html
<!-- Proper semantic markup -->
<nav aria-label="Main navigation">
  <ul class="flex space-x-4">
    <li><a href="#" class="text-gray-700 hover:text-primary-600">Home</a></li>
    <li><a href="#" class="text-gray-700 hover:text-primary-600">Timeline</a></li>
  </ul>
</nav>

<!-- ARIA labels for interactive elements -->
<button aria-label="Flag this message as a memory" class="p-2 text-secondary-500">
  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
  </svg>
</button>
```

## 12. Dark Mode with Utilities

```html
<!-- Dark mode variants -->
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  Automatic dark mode support
</div>

<button class="bg-primary-500 hover:bg-primary-600 dark:bg-primary-400 dark:hover:bg-primary-500">
  Dark mode button
</button>

<!-- Cards in dark mode -->
<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm">
  <div class="p-6">
    <h3 class="text-gray-900 dark:text-white font-semibold">Dark mode card</h3>
    <p class="text-gray-600 dark:text-gray-300">Content that adapts to theme</p>
  </div>
</div>
```

## 13. Implementation Guidelines

### Tailwind CSS 4 Setup

1. **Install Tailwind CSS 4**
```bash
npm install tailwindcss@next @tailwindcss/vite@next
```

2. **Create CSS file with theme configuration**
```css
/* styles/globals.css */
@import "tailwindcss";

@theme {
  --color-primary-*: /* Your primary colors */;
  --color-secondary-*: /* Your secondary colors */;
  --font-family-display: "Poppins", ui-sans-serif, system-ui, sans-serif;
  --font-family-body: "Inter", ui-sans-serif, system-ui, sans-serif;
}
```

3. **Configure Vite**
```js
// vite.config.js
import tailwindcss from '@tailwindcss/vite'

export default {
  plugins: [tailwindcss()],
}
```

### Component Architecture

```jsx
// Use utility classes for components
const Button = ({ variant = 'primary', size = 'md', children, ...props }) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200"
  
  const variants = {
    primary: "bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-primary hover:shadow-lg hover:-translate-y-0.5",
    secondary: "bg-gradient-to-br from-secondary-500 to-secondary-600 text-white shadow-secondary hover:shadow-lg hover:-translate-y-0.5",
    outline: "bg-white text-primary-600 border-2 border-primary-200 shadow-sm hover:bg-primary-50 hover:border-primary-300"
  }
  
  const sizes = {
    sm: "px-4 py-2 text-sm gap-1",
    md: "px-6 py-3 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-3"
  }
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]}`
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
```

### Best Practices

1. **Utility-First Approach**: Use Tailwind utilities instead of custom CSS
2. **Component Composition**: Build reusable components with utility classes
3. **Responsive Design**: Use mobile-first responsive utilities
4. **Accessibility**: Always include focus states and ARIA labels
5. **Performance**: Use Tailwind's built-in purging for production builds
6. **Consistency**: Stick to the design tokens defined in the theme

### File Organization

```
src/
├── styles/
│   ├── globals.css          # Tailwind imports and theme
│   └── components.css       # Custom component styles (minimal)
├── components/
│   ├── ui/                  # Base UI components
│   ├── forms/               # Form components
│   ├── layout/              # Layout components
│   └── features/            # Feature-specific components
└── utils/
    └── cn.ts                # Class name utility function
```

This Tailwind CSS 4-focused design system provides a modern, utility-first approach to building the FamDing interface while maintaining the friendly, family-centered aesthetic.