import { useAtom } from 'jotai';
import { prefersDarkAtom } from '../lib/atoms';
import ClientOnly from '../lib/ClientOnly';
import HeaderLogo from '../components/HeaderLogo';
import TechBadges from '../components/TechBadges';
import PortfolioNav from '../components/PortfolioNav';
import ThemeSwitchBtn from '../components/ThemeSwitchBtn';
import PortfolioContent from '../components/PortfolioContent';

export default function Index() {
  const [prefersDark, setPrefersDark] = useAtom(prefersDarkAtom);

  return (
    <ClientOnly className={prefersDark ? 'dark' : 'light'}>
      <div className='bg-light dark:bg-dark p-5'>
        <div className='min-h-screen max-w-7xl mx-auto grid md:gap-6 gap-4'>
          {/* Top Bar section */}
          <div className='flex flex-col md:flex-row gap-4 items-start md:items-center justify-between'>
            <HomeHeader />
          </div>

          {/* Main content section */}
          <main className='flex flex-1'>
            <PortfolioContent />
          </main>

          {/* Bottom Bar section */}
          <div className='flex items-center justify-between'>
            <HomeFooter />
          </div>
        </div>
      </div>
    </ClientOnly>
  );
}

const HomeHeader = () => {
  return (
    <>
      <HeaderLogo />
      <TechBadges />
    </>
  );
};

const HomeFooter = () => {
  return (
    <>
      <PortfolioNav />
      <ThemeSwitchBtn />
    </>
  );
};
