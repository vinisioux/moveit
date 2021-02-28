import { Provider } from 'next-auth/client';
import { ThemeProviderApp } from '../contexts/ThemeContext';

import { GlobalStyle } from '../styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <ThemeProviderApp>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProviderApp>
    </Provider>
  );
}

export default MyApp;
