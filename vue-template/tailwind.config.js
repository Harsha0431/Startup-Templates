/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  media: false, // or 'purge' or 'class'
  darkMode: 'class',
  theme: {
    colors: {
      // 'key':'value'
      // You can configure your own colors as per your requirement
      //Eg: 'while':'#fff'
    },
    fontFamily: {
      // Can configure your own fonts as per your requirement
      //Eg: merriweather: ['Merriweather', 'serif'],
      // This can be used as font-merriweather in your calss-name or CSS file
    },
    extend: {},
    screens: {
      xxl: '1200px',
      xl: '992px',
      lg: '840px',
      md: '768px',
      sm: '640px',
      ssm: '576px',
      vsm: '400px',
      vvsm: '330px'
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
