import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

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
      </Head>
      <Component {...pageProps} />
    </>
  );
}
