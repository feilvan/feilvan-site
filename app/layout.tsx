import "./globals.css";

import { Metadata } from "next";
import localFont from "next/font/local";

import Footer from "./components/footer";
import LoaderWrapper from "./components/loader-wrapper";
import PageWrapper from "./components/page-wrapper";

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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            try {
              let theme = localStorage.getItem('theme') || 'auto';
              if (theme === 'auto') {
                theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
              }
              document.documentElement.classList.add(theme);
            } catch (e) {}
          `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative flex min-h-svh flex-col items-center bg-white font-mono text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-200`}
        suppressHydrationWarning
      >
        <LoaderWrapper>
          <PageWrapper>{children}</PageWrapper>
          <Footer />
        </LoaderWrapper>
      </body>
    </html>
  );
}