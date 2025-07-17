import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
 theme: {
  extend: {
    colors: {
      primary: 'hsl(0, 100%, 50%)',
      'primary-dark': 'hsl(0, 100%, 28%)',
      secondary: 'hsl(207, 34%, 50%)',
  'secondary-light': 'hsl(208, 90%, 76%)',
      'secondary-dark': 'rgb(36, 72, 96)',
      gray: {
        100: 'hsl(0, 0%, 100%)',
        300: '#d7e6ef',
        500: 'hsl(202, 12%, 57%)',
        700: 'hsl(206, 25%, 16%)',
        900: 'hsl(210, 100%, 5%)',
      },
    },
  },
},

  plugins: [],
};

export default config;
