import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#131722',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: '#d1d4dc',
    },
    background: {
      default: 'grey',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
