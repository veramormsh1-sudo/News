/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        reuters: {
          black: '#0A0A0A',
          white: '#FFFFFF',
          red: '#D62828',
          blue: '#1A3C6C',
          orange: '#C17817',
          gray: {
            50: '#F9FAFB',
            100: '#F3F4F6',
            200: '#E5E7EB',
            300: '#D1D5DB',
            400: '#9CA3AF',
            500: '#6B7280',
            600: '#4B5563',
            700: '#374151',
            800: '#1F2937',
            900: '#111827',
          }
        },
        accent: {
          gold: '#B8860B',
          navy: '#1E3A5F',
          burgundy: '#800020',
        }
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'elegant': '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
      },
      backdropBlur: {
        'crisp': '20px',
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
        serif: ['Crimson Pro', 'Georgia', 'serif'],
        display: ['DM Serif Display', 'Georgia', 'serif'],
      },
      spacing: {
        '128': '32rem',
      },
      aspectRatio: {
        'video': '16 / 9',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      maxWidth: {
        '7xl': '80rem',
        '8xl': '88rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}