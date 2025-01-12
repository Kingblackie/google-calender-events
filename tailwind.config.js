export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateRows: {
        'auto1': 'auto 1fr',
      },
      gridTemplateColumns: {
        'cards': 'repeat(auto-fit, minmax(250px, 1fr))',
      }
    },
  },
  plugins: [],
};
