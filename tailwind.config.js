/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#122A5C',
          dark: '#0B1B3D',
        },
        gold: {
          DEFAULT: '#D4A24C',
          warm: '#F2B84B',
        },
        green: {
          DEFAULT: '#2E7D5B',
        },
        bg: '#FAF9F6',
        surface: '#EFEDE6',
        ink: '#1A1F2B',
        onnavy: '#F5F3EE',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
}
