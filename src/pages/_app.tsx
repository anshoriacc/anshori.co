import { useEffect, useRef } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { Router } from 'next/router';
import LoadingBar from 'react-top-loading-bar';
import { Analytics } from '@vercel/analytics/react';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const ref = useRef<any>(null);

  const startLoading = () => {
    ref.current.continuousStart();
  };

  const endLoading = () => {
    ref.current.complete();
  };

  useEffect(() => {
    Router.events.on('routeChangeStart', startLoading);
    Router.events.on('routeChangeComplete', endLoading);
    Router.events.on('routeChangeError', endLoading);

    return () => {
      Router.events.off('routeChangeStart', startLoading);
      Router.events.off('routeChangeComplete', endLoading);
      Router.events.off('routeChangeError', endLoading);
    };
  }, []);

  return (
    <ThemeProvider attribute="class">
      <LoadingBar color="#3b82f6" ref={ref} shadow={false} />
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
}

export default MyApp;
