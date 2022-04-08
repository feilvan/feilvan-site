import "../styles/global.css";
import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import "../public/fonts/texGyreHeros/texgyreheros_bold_macroman/stylesheet.css";
import "../public/fonts/texGyreHeros/texgyreheros_bolditalic_macroman/stylesheet.css";
import "../public/fonts/texGyreHeros/texgyreheros_italic_macroman/stylesheet.css";
import "../public/fonts/texGyreHeros/texgyreheros_regular_macroman/stylesheet.css";
import "../styles/locomotive-scroll.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
