const defaultTheme = require( "tailwindcss/defaultTheme" );
const plugin = require( "tailwindcss/plugin" );

module.exports = {
  darkMode: 'class',

  theme: {
    extend: {
      fontFamily: {
        sans: [ "Poppins", ...defaultTheme.fontFamily.sans ],
        // 'poppins': ['Poppins']
      },
      colors: {
        electric: "#db00ff",
        ribbon: "#0047ff",
        moon: "#5dc"
      },
      screens: {
        xsm: "350px",
      },
      dropShadow: {
        "3xl": "0 0 4px",
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
          "0%, 100%": {
            transform: "rotate(-30deg)",
          },
          "50%": {
            transform: "rotate(30deg)",
          },
        },
        signal: {
          "0%": { "stroke-dashoffset": "100" },
          "100%": { "stroke-dashoffset": "0" },
        },
      },
      animation: {
        signal: "signal 1s ease-in-out forwards",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    plugin( function ( { addUtilities, addComponents, e, prefix, config } ) {
      // Add your custom styles here
      addUtilities( {
        // '.apnone': {
        //   'input[type = number]::-webkit-inner-spin-button',
        //   'input[type = number]::- webkit - outer - spin - button'{
        //     '-webkit-appearance': none,
        //     margin: 110
        //   }
        // }
      } );
    } ),
  ],
};
// input[type = number]:: -webkit - inner - spin - button,
//   input[type = number]:: -webkit - outer - spin - button {
//   opacity: 1;
// }
