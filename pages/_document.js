import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="en">
        <title>Tattoo M3</title>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" />
          <source
            className="tattooing"
            src="../public/tattooing.mp4"
            type="video/mp4"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
