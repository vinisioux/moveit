import { Provider } from 'next-auth/client';
import { ToastContainer } from 'react-toastify';
import { ThemeProviderApp } from '../contexts/ThemeContext';

import { GlobalStyle } from '../styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <ThemeProviderApp>
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
        <Component {...pageProps} />
      </ThemeProviderApp>
    </Provider>
  );
}

export default MyApp;
