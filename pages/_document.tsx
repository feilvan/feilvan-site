import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="/fonts/texGyreHeros/texgyreheros_bold_macroman/stylesheet.css"
            type="text/css"
            charSet="utf-8"
          />
          <link
            rel="stylesheet"
            href="/fonts/texGyreHeros/texgyreheros_bolditalic_macroman/stylesheet.css"
            type="text/css"
            charSet="utf-8"
          />
          <link
            rel="stylesheet"
            href="/fonts/texGyreHeros/texgyreheros_italic_macroman/stylesheet.css"
            type="text/css"
            charSet="utf-8"
          />
          <link
            rel="stylesheet"
            href="/fonts/texGyreHeros/texgyreheros_regular_macroman/stylesheet.css"
            type="text/css"
            charSet="utf-8"
          />
        </Head>
        <div>
          <Main />
          <NextScript />
        </div>
      </Html>
    );
  }
}

export default MyDocument;
