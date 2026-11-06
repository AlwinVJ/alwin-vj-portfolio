/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', '"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      colors: {
        portfolio: {
          // Light Mode
          lightBg: '#FFFFFF',
          lightSurface: '#F5F7F5',
          lightBorder: '#E5E7EB',
          lightText: '#111827',
          lightMuted: '#4B5563',
          lightAccent: '#15803D',
          lightAccentHover: '#166534',

          // Dark Mode (Terminal Green Theme from exact specification)
          darkBg: '#020D08',
          darkSurface: '#04150C',
          darkCard: '#061A10',
          darkBorder: 'rgba(0, 230, 118, 0.25)',
          darkHeading: '#D8FFE8',
          darkBody: '#B8DCC8',
          darkMuted: '#83A995',

          // Green interactive tokens
          green: '#00E676',
          greenAccent: '#00FF88',
          greenHover: '#00FF88',
          greenDark: '#009E4F',
          greenGlow: 'rgba(0, 230, 118, 0.25)',
        }
      },
      maxWidth: {
        'content': '1200px',
      }
    },
  },
  plugins: [],
}
