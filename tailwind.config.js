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
      }
    },
  },
  plugins: [],
}
