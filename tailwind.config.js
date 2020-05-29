module.exports = {
  purge: [],
  theme: {
    gradients: theme => ({
      'main': {
        type: 'radial',
        colors: ['#1f3756', '#141539'],
      },
    }),
    extend: {
      colors: {
        'dark-text': 'hsl(229, 25%, 31%)',
        'score-text': 'hsl(229, 64%, 46%)',
        'header-outline': 'hsl(217, 16%, 45%)'
      },
      screens: {
        'mobile-m': '375px',
      }
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-plugins/gradients'),
  ],
}
