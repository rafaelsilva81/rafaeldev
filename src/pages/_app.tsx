import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title> Rafael Galdino da Silva </title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        />
        <meta
          name='description'
          content='Rafael Galdino da Silva, Fullstack Developer, NodeJS, ReactJS, NextJS, Typescript and more'
        />
        <meta
          name='author'
          content='@rafaelsilva81'
        />
        <meta
          name='keywords'
          content='portoflio, webdev, web, react, next, developer, programmer'
        />
        <meta
          property='og:site_name'
          content='Rafael Galdino da Silva - Portfolio'
        />
        <meta
          property='og:title'
          content='Rafael Galdino da Silva - Portfolio'
        />
        <meta
          property='og:description'
          content='Rafael Galdino da Silva, Fullstack Developer, NodeJS, ReactJS, NextJS, Typescript and more'
        />
        <meta
          property='og:image'
          itemProp='image'
          content='https://i.imgur.com/iqA94gK.png'
        />

        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link
          rel='manifest'
          href='/site.webmanifest'
        />
        <link
          rel='mask-icon'
          href='/safari-pinned-tab.svg'
          color='#f8f8f8'
        />
        <meta
          name='msapplication-TileColor'
          content='#121212'
        />
        <meta
          name='theme-color'
          content='#ffffff'
        />
      </Head>
      <Script
        async
        strategy='afterInteractive'
        src='https://www.googletagmanager.com/gtag/js?id=G-KWJ1N1PN94'
      />
      <Script
        id='google-analytics'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-KWJ1N1PN94');
        `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
