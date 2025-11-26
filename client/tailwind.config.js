/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: '#F9FAFB', // Gray 50
          dark: '#0F172A',  // Slate 900
        },
        surface: {
          light: '#FFFFFF',
          dark: '#1E293B',  // Slate 800
        },
        primary: {
          light: '#334155', // Slate 700
          dark: '#94A3B8',  // Slate 400
        },
        secondary: {
          light: '#64748B', // Slate 500
          dark: '#CBD5E1',  // Slate 300
        },
        accent: {
          light: '#E11D48', // Rose 600 (Softer Red)
          dark: '#FB7185',  // Rose 400
        },
        text: {
          primary: {
            light: '#111827', // Gray 900
            dark: '#F9FAFB',  // Gray 50
          },
          muted: {
            light: '#6B7280', // Gray 500
            dark: '#9CA3AF',  // Gray 400
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'Montserrat', 'sans-serif'],
        display: ['Montserrat', 'Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}