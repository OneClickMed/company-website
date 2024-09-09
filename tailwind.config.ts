import type { Config } from 'tailwindcss';
import type { PluginAPI } from 'tailwindcss/types/config';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'screen-1500': '1500px',
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
      },
      width: {
        '45p': '45%',
      },
      backgroundImage: {
        'footer-texture': "url('/assets/img/others/footer-bg.png')",
      },
      colors: {
        whitesmoke: '#F5F5F5',
        ocmbluelight: '#e1ecff',
        ocmbluelightshade: '#F4FDFF',
        ocmbluedark: '#014f6c',
        ocmblue1000: '#002932',
        ocmblue150: '#7FE5FC',
        ocmblue100: '#AAEEFD',
        ocmblue50: '#CCF5FE',
        ocmblue: '#42BAE4',
        ocmyellow: '#FDBE01',
        ocmbrowndarker: '#3c3434',
        ocmbrownlight: '#443c34',
        ocmbluehover: '#D9F7FE',
        ocmyellowhover: '#FFF5D9',
        ocmredhover: '#FFE8E5',
        ocmgreenhover: '#CEF5D4',
        ocmblueshade: '#82e6fa',
      },
    },
    screens: {
      sm: '640px',
      md: '821px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [
    function (api: PluginAPI) {
      const { addUtilities } = api;
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
};

export default config;
