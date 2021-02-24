import GlobalStyle from '../styles/global';

import { ChallengesProvider } from '../contexts/ChallengeContext';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ChallengesProvider>
  );
}

export default MyApp;
