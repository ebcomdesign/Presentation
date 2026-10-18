export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Vazirmatn', 'system-ui', 'sans-serif'],
      },
      colors: {
        teal: {
          brand: '#1FB6A6',
        },
        gold: {
          brand: '#F5C518',
        },
        dark: {
          bg: '#0B0F14',
          card: '#141A22',
          border: '#22303C',
        },
      },
    },
  },
  plugins: [],
};