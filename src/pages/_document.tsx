import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Jogo de memória</title>
          <meta
            name="description"
            content="Trabalho de faculdade, jogo de memória, Arthur Mendes Pereira, Leticia Maria"
          />
          <meta property="og:site_name" content="Jogo de Mempória" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://memory-games-fawn.vercel.app/screen.png"
          />

          <link rel="canonical" href="https://memory-games-fawn.vercel.app/" />
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
