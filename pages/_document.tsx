import Document, { Html, Head, Main, NextScript } from "next/document";
import { config, dom } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <style>{dom.css()}</style>
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
