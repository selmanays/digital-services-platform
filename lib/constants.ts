/**
 * Design constants for Awwwards-level design system
 */

// Spacing scale (4px base)
export const SPACING = {
  xs: '0.25rem',    // 4px
  sm: '0.5rem',     // 8px
  md: '0.75rem',    // 12px
  base: '1rem',     // 16px
  lg: '1.5rem',     // 24px
  xl: '2rem',       // 32px
  '2xl': '3rem',    // 48px
  '3xl': '4rem',    // 64px
  '4xl': '6rem',    // 96px
  '5xl': '8rem',    // 128px
} as const;

// Section padding
export const SECTION_PADDING = {
  sm: 'py-16 md:py-24',
  md: 'py-24 md:py-32',
  lg: 'py-32 md:py-48',
} as const;

// Container max widths
export const CONTAINER_WIDTH = {
  sm: 'max-w-2xl',
  md: 'max-w-4xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  '2xl': 'max-w-[1400px]',
  '3xl': 'max-w-[1600px]',
} as const;

// Grid columns
export const GRID_COLUMNS = {
  '1': 'grid-cols-1',
  '2': 'grid-cols-1 sm:grid-cols-2',
  '3': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  '4': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  '12': 'grid-cols-12',
  '16': 'grid-cols-16',
} as const;

// Animation durations (ms)
export const ANIMATION_DURATION = {
  fast: 150,
  base: 300,
  slow: 500,
  slower: 800,
} as const;

// Easing functions
export const EASING = {
  inOut: [0.4, 0, 0.2, 1] as [number, number, number, number],
  out: [0, 0, 0.2, 1] as [number, number, number, number],
  in: [0.4, 0, 1, 1] as [number, number, number, number],
  spring: [0.68, -0.55, 0.265, 1.55] as [number, number, number, number],
} as const;

// Breakpoints (matching Tailwind)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// Z-index scale
export const Z_INDEX = {
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
} as const;

// Typography scale
export const TYPOGRAPHY = {
  display: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl',
  headline: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl',
  title: 'text-2xl sm:text-3xl md:text-4xl',
  subtitle: 'text-xl sm:text-2xl',
  body: 'text-base',
  small: 'text-sm',
  tiny: 'text-xs',
} as const;

// Border radius
export const BORDER_RADIUS = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  '3xl': 'rounded-3xl',
  full: 'rounded-full',
} as const;

// Shadow scale
export const SHADOW = {
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
  '2xl': 'shadow-2xl',
  none: 'shadow-none',
} as const;

// Opacity values
export const OPACITY = {
  5: 'opacity-5',
  10: 'opacity-10',
  20: 'opacity-20',
  30: 'opacity-30',
  40: 'opacity-40',
  50: 'opacity-50',
  60: 'opacity-60',
  70: 'opacity-70',
  80: 'opacity-80',
  90: 'opacity-90',
  100: 'opacity-100',
} as const;
