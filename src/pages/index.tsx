import ClientOnly from "../lib/ClientOnly";
import HeaderLogo from "../components/HeaderLogo";
import TechBadges from "../components/TechBadges";
import PortfolioNav from "../components/PortfolioNav";
import ThemeSwitchBtn from "../components/ThemeSwitchBtn";
import PortfolioContent from "../components/PortfolioContent";
import PortfolioTheme from "../components/PortfolioTheme";

export default function Index() {
  return (
    <ClientOnly>
      <PortfolioTheme>
        <div className="portfolio-shell">
          <header className="flex items-center justify-between gap-6">
            <HeaderLogo />
            <TechBadges />
          </header>
          <main className="portfolio-main">
            <PortfolioContent />
          </main>
          <footer className="portfolio-footer">
            <PortfolioNav />
            <ThemeSwitchBtn />
          </footer>
        </div>
      </PortfolioTheme>
    </ClientOnly>
  );
}
