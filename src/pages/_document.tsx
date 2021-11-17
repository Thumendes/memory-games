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
          <meta
            name="description"
            content="Trabalho de faculdade, jogo de memória, Arthur Mendes Pereira, Leticia Maria"
          />
          <meta property="og:title" content="Jogo de Mempória" />
          <meta
            property="og:description"
            content="Jogo para treinar a memória"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://memory-games-fawn.vercel.app/"
          />
          <meta
            property="og:image"
            content="https://memory-games-fawn.vercel.app/screen.png"
          />

          <meta property="twitter:title" content="Jogo de Mempória" />
          <meta
            property="twitter:description"
            content="Jogo para treinar a memória"
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:image"
            content="https://memory-games-fawn.vercel.app/screen.png"
          />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
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
