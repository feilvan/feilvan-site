import "./globals.css";

import { Metadata } from "next";
import localFont from "next/font/local";

import Footer from "./components/footer";
import LoaderWrapper from "./components/loader-wrapper";
import PageWrapper from "./components/page-wrapper";
import { ThemeProvider } from "./components/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template: "%s - FEILVAN",
    default: "FEILVAN",
  },
  description: "FEILVAN portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative flex min-h-svh flex-col items-center antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LoaderWrapper>
            <PageWrapper>{children}</PageWrapper>
            <Footer />
          </LoaderWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
