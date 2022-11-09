import Head from 'next/head';
import TopBar from '../components/TopBar';
import { useAtom } from 'jotai';
import { prefersDarkAtom } from '../lib/atoms';
import { useEffect } from 'react';
import ClientOnly from '../components/ClientOnly';
import Content from '../components/Content';
import BottomBar from '../components/BottomBar';

export default function Index() {
  const [prefersDark, setPrefersDark] = useAtom(prefersDarkAtom);

  /* TODO: Mobile view */

  console.log(prefersDark);

  return (
    <ClientOnly>
      <div className={prefersDark ? 'dark' : 'light'}>
        <div className='bg-[#f8f8f8] dark:bg-[#121212]'>
          <div className='max-w-7xl p-12 min-h-screen mx-auto flex flex-col gap-20 justify-between'>
            {/* Top Bar section */}
            <div className='flex items-center justify-between'>
              <TopBar />
            </div>

            {/* Main content section */}
            <main className='flex flex-1'>
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
