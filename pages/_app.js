import '../styles/globals.css';
import '../styles/cardstyles.css';
import ImageContextProvider from '../components/Context/ImageContextProvider.jsx';

function MyApp({ Component, pageProps }) {
  return (
    <ImageContextProvider >
      <Component {...pageProps} />
    </ImageContextProvider>
  );
}

export default MyApp;
