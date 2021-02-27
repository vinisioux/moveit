import { ThemeProviderApp } from '../contexts/ThemeContext';

import { GlobalStyle } from '../styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProviderApp>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProviderApp>
  );
}

export default MyApp;
