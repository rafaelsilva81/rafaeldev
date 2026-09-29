import { KeyboardEvent } from "react";
import { useAtom } from "jotai";
import { contentAtom, preferredLanguageAtom } from "../lib/atoms";

const navigation = [
  { page: "home", pt: "início", en: "home" },
  { page: "about", pt: "sobre", en: "about" },
  { page: "contact", pt: "contato", en: "contact" },
] as const;

const PortfolioNav = () => {
  const [lang] = useAtom(preferredLanguageAtom);
  const [content, setContent] = useAtom(contentAtom);

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex: number;
    switch (event.key) {
      case "ArrowRight":
        nextIndex = (index + 1) % navigation.length;
        break;
      case "ArrowLeft":
        nextIndex = (index + navigation.length - 1) % navigation.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = navigation.length - 1;
        break;
      default:
        return;
    }
    event.preventDefault();
    setContent(navigation[nextIndex].page);
    document.getElementById(`tab-${navigation[nextIndex].page}`)?.focus();
  };

  return (
    <div
      role="tablist"
      aria-label={lang === "pt" ? "Seções do portfólio" : "Portfolio sections"}
      className="portfolio-nav"
    >
      {navigation.map((item, index) => (
        <button
          key={item.page}
          id={`tab-${item.page}`}
          type="button"
          role="tab"
          aria-selected={item.page === content}
          aria-controls={`panel-${item.page}`}
          tabIndex={item.page === content ? 0 : -1}
          onClick={() => setContent(item.page)}
          onKeyDown={(event) => handleKeyDown(event, index)}
          className="navigation-tab"
        >
          <span className="tab-marker" aria-hidden="true">{"<"}</span>
          <span>{item[lang]}</span>
          <span className="tab-marker" aria-hidden="true">{"/>"}</span>
        </button>
      ))}
    </div>
  );
};

export default PortfolioNav;
