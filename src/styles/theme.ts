/* eslint-disable no-unused-vars */
import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

declare module '@mui/material/styles' {
  interface IThemeDetail {
    main: {
      background: string;
      chart: {
        background: string;
        grid: string;
        text: string;
      };
      topbar: {
        symbol: string;
        interval: {
          display: string;
          selected: string;
        };
        hover: string;
      };
    };
  }

  interface Theme extends IThemeDetail {}

  interface ThemeOptions extends IThemeDetail {}
}

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const darkTheme = createTheme({
  main: {
    background: '#131722',
    chart: {
      background: '#131722',
      grid: '#333333',
      text: '#EEEEEE',
    },
    topbar: {
      symbol: '#2962FF',
      interval: {
        display: '#999999',
        selected: '#DDDD00',
      },
      hover: '#242628',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export const lightTheme = createTheme({
  main: {
    background: '#EEEEEE',
    chart: {
      background: '#EEEEEE',
      grid: '#333333',
      text: '#000000',
    },
    topbar: {
      symbol: '#2962FF',
      interval: {
        display: '#999999',
        selected: '#009999',
      },
      hover: '#DDDDAA',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default darkTheme;
