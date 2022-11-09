import Head from 'next/head';
import TopBar from '../Components/TopBar';
import { useAtom } from 'jotai';
import { prefersDarkAtom } from '../lib/atoms';
import { useEffect } from 'react';
import ClientOnly from '../Components/ClientOnly';
import Content from '../Components/Content';
import BottomBar from '../Components/BottomBar';

export default function Index() {
  const [prefersDark, setPrefersDark] = useAtom(prefersDarkAtom);

  /*   useEffect(() => {
    setPrefersDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
  }); */

  console.log(prefersDark);

  return (
    <ClientOnly>
      <div className={prefersDark ? 'dark' : 'light'}>
        <div className='bg-[#f8f8f8] dark:bg-[#121212]'>
          <div className='max-w-7xl min-h-screen mx-auto flex flex-col gap-28 justify-center'>
            {/* Top Bar section */}
            <div className='flex items-center justify-between'>
              <TopBar />
            </div>

            {/* Main content section */}
            <main>
              <Content />
            </main>

            {/* Bottom Bar section */}
            <div className='flex items-center justify-between'>
              <BottomBar />
            </div>
          </div>
        </div>
      </div>
    </ClientOnly>
  );
}
