import Head from 'next/head';
import TopBar from '../components/TopBar';
import { useAtom } from 'jotai';
import { prefersDarkAtom } from '../lib/atoms';
import ClientOnly from '../components/ClientOnly';
import Content from '../components/Content';
import BottomBar from '../components/BottomBar';

export default function Index() {
  const [prefersDark, setPrefersDark] = useAtom(prefersDarkAtom);

  /* TODO: Mobile view */

  return (
    <ClientOnly>
      <div className={prefersDark ? 'dark' : 'light'}>
        <div className='bg-light dark:bg-dark p-5'>
          <div className='min-h-screen max-w-7xl mx-auto grid md:gap-6 gap-4'>
            {/* Top Bar section */}
            <div className='flex flex-col md:flex-row gap-4 items-start md:items-center justify-between'>
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
