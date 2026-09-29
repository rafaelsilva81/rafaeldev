import { useAtom } from "jotai";
import { useEffect } from "react";
import { contentAtom } from "../lib/atoms";
import HomeContent from "./content/HomeContent";
import AboutContent from "./content/AboutContent";
import ContactContent from "./content/ContactContent";
import ProjectsContent from "./content/ProjectsContent";

const panels = [
  { page: "home", Content: HomeContent },
  { page: "about", Content: AboutContent },
  { page: "contact", Content: ContactContent },
];

const PortfolioContent = () => {
  const [page] = useAtom(contentAtom);

  useEffect(() => {
    if (window.matchMedia("(max-width: 767px), (max-height: 599px)").matches) {
      window.scrollTo(0, 0);
    }
  }, [page]);

  return (
    <div className="portfolio-content">
      {/* Desktop shares panel height; mobile shows only the active panel. */}
      {panels.map(({ page: panel, Content }) => (
        <section
          key={panel}
          id={`panel-${panel}`}
          role="tabpanel"
          aria-labelledby={`tab-${panel}`}
          aria-hidden={page !== panel}
          tabIndex={page === panel ? 0 : -1}
          className={`portfolio-panel ${page !== panel ? "invisible pointer-events-none" : ""}`}
        >
          <Content />
        </section>
      ))}
      {page === "projects" && (
        <section className="portfolio-panel">
          <ProjectsContent />
        </section>
      )}
    </div>
  );
};

export default PortfolioContent;
