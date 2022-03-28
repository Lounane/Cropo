const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
        // 'poppins': ['Poppins']
      },
      colors: {
        electric: '#db00ff',
        ribbon: '#0047ff',
      },
      screens: {
        xsm: "350px"
      },
      // Keyframes: {
      //   signal: {
      //     '0%, 100%': { 'stroke-dashoffset': '100' },
      //     '50%': { 'stroke-dashoffset': '0' }

      //   },
      //   wiggle: {
      //     '0%, 100%': {
      //       transform: 'rotate(-3deg)'
      //     },
      //     '50%': {
      //       transform: 'rotate(3deg)'
      //     },
      //   }

      // },
      // animation: {
      //   signal: 'signal 10s linear infinite',
      //   wiggle: 'wiggle 1s ease-in-out infinite',
      // },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-30deg)'
          },
          '50%': {
            transform: 'rotate(30deg)'
          },
        },
        signal: {
          '0%': { 'stroke-dashoffset': '100' },
          '100%': { 'stroke-dashoffset': '0' }

        },
      },
      animation: {
        signal: 'signal 1s ease-in-out forwards',
        wiggle: 'wiggle 1s ease-in-out infinite',

      }



    },
  },
  plugins: [],
}
