module.exports = {
  theme: {
    gradients: {
      'main': {
        type: 'radial',
        colors: ['#1f3756', '#141539'],
      },
    },
    extend: {
      colors: {
        'dark-text': 'hsl(229, 25%, 31%)',
        'score-text': 'hsl(229, 64%, 46%)',
        'header-outline': 'hsl(217, 16%, 45%)'
      },
      width: {
        '72': '18rem',
        '80': '20rem',
        '88': '22rem',
        '96': '24rem',
      }
    },
    screens: {
      'mobile-m': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'ultra': '1440px',
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-plugins/gradients'),
  ],
}
