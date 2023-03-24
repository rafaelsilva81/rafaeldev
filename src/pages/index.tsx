import { useAtom } from "jotai";
import { prefersDarkAtom } from "../lib/atoms";
import ClientOnly from "../lib/ClientOnly";
import HeaderLogo from "../components/HeaderLogo";
import TechBadges from "../components/TechBadges";
import PortfolioNav from "../components/PortfolioNav";
import ThemeSwitchBtn from "../components/ThemeSwitchBtn";
import PortfolioContent from "../components/PortfolioContent";
import LangSwitchBtn from "../components/LangSwitchBtn";

export default function Index() {
  const [prefersDark, setPrefersDark] = useAtom(prefersDarkAtom);

  return (
    <ClientOnly className={prefersDark ? "dark" : "light"}>
      <div className="grid w-full min-h-screen gap-4 px-24 py-4 md:gap-6 bg-light dark:bg-dark">
        {/* Top Bar section */}
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <HomeHeader />
        </div>

        {/* Main content section */}
        <main className="flex flex-1">
          <PortfolioContent />
        </main>

        {/* Bottom Bar section PC */}
        <div className="items-center justify-between hidden md:flex">
          <HomeFooter />
        </div>

        {/* Bottom Bar section Mobile */}
        <div className="flex flex-col gap-2 md:hidden">
          <HomeFooter />
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
      <div className="flex flex-row gap-2">
        <ThemeSwitchBtn />
        <LangSwitchBtn />
      </div>
    </>
  );
};
