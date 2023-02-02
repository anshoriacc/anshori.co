import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import store from 'src/redux/store';
import ThemeWrapper from '@components/ThemeWrapper';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeWrapper>
        <Component {...pageProps} />
      </ThemeWrapper>
    </Provider>
  );
}

export default MyApp;
