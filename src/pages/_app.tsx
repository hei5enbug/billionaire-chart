import createEmotionCache from '@/createEmotionCache';
import { themeState } from '@/recoil/theme/atoms';
import '@/styles/globals.css';
import darkTheme, { lightTheme } from '@/styles/theme';
import { CacheProvider, EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement, ReactNode, useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot, useRecoilState } from 'recoil';

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  emotionCache?: EmotionCache;
};

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const clientSideEmotionCache = createEmotionCache();

function ThemeMode({ props }: { props: AppPropsWithLayout }) {
  const { Component, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);

  const [mode] = useRecoilState(themeState);

  return <ThemeProvider theme={mode === 'dark' ? darkTheme : lightTheme}>
    <CssBaseline />
    {getLayout(<Component {...pageProps} />)}
  </ThemeProvider>;
}


export default function App(props: AppPropsWithLayout) {
  const { emotionCache = clientSideEmotionCache, pageProps } = props;
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
            <ThemeMode props={props} />
          </CacheProvider>
        </RecoilRoot>
      </Hydrate>
    </QueryClientProvider>
  );
}
