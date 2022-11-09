/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Main, Head, NextScript } from 'next/document';
import { useAtom } from 'jotai';
import { prefersDarkAtom } from '../lib/atoms';
import { useEffect } from 'react';

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
