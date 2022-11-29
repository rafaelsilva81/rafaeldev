/* eslint-disable @next/next/no-title-in-document-head */
import { useAtom } from 'jotai';
import { Html, Main, Head, NextScript } from 'next/document';
import { prefersDarkAtom } from '../lib/atoms';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel='preconnect'
          href='https://fonts.googleapis.com'
        />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin=''
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;600;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
