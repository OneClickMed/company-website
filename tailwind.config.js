/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
      },
      width: {
        '45p': '45%',
      },
      backgroundImage: {
        'footer-texture': "url('/public/assets/img/others/footer-bg.png')", 
        
      },

      colors: {
        whitesmoke: '#F5F5F5',
        ocmbluelight:'#e1ecff',
        ocmbluelightshade:'#F4FDFF',
        ocmbluedark:'#014f6c',
        ocmblue1000:'#002932',
        ocmblue150:'#7FE5FC',
        ocmblue100:'#AAEEFD',
        ocmblue50:'#CCF5FE',
        ocmblue: '#42BAE4',
        ocmyellow: '#FDBE01',
        ocmbrowndarker: '#3c3434',
        ocmbrownlight: '#443c34',
        ocmbluehover:'#D9F7FE',
        ocmyellowhover:'#FFF5D9',
        ocmredhover:'#FFE8E5',
        ocmgreenhover:'#CEF5D4'
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.hide-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
        '.hide-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
      });
    },
  ],
}

