import '../styles/globals.css';
import '../styles/cardstyles.css';
import '../styles/Profile.css';
import { SessionProvider } from 'next-auth/react';
import ImageContextProvider from '../components/Context/ImageContextProvider.jsx';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <ImageContextProvider>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ImageContextProvider>
  );
}

export default MyApp;
