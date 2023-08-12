import createEmotionCache from '@/createEmotionCache';
import '@/styles/globals.css';
import theme from '@/styles/theme';
import { CacheProvider, EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement, ReactNode, useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  emotionCache?: EmotionCache;
};

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const clientSideEmotionCache = createEmotionCache();

export default function App(props: AppPropsWithLayout) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydreatedState}>
        <RecoilRoot>
          <CacheProvider value={emotionCache}>
            <Head>
              <title>Billionaire</title>
              <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {getLayout(<Component {...pageProps} />)}
            </ThemeProvider>
          </CacheProvider>
        </RecoilRoot>
      </Hydrate>
    </QueryClientProvider>
  );
}
