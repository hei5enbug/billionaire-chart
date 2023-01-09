import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#131722',
    },
    text: {
      primary: '#d1d4dc',
    },
    background: {
      default: 'grey',
      paper: 'blue',
    },
  },

  spacing: 4,
});
