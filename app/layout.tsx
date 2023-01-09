'use client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import AppBar from '../components/AppBar';
import './globals.css';
import { darkTheme } from '../theme/themes';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <body>
          <AppBar />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
