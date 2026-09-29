import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAtom } from "jotai";
import { preferredLanguageAtom } from "../lib/atoms";

const LangSwitchBtn = () => {
  const [lang, setLang] = useAtom(preferredLanguageAtom);
  const label = lang === "pt" ? "Switch to English" : "Mudar para português";

  return (
    <button
      type="button"
      onClick={() => setLang(lang === "en" ? "pt" : "en")}
      className="control-button gap-2 px-3"
      aria-label={label}
      title={label}
    >
      <FontAwesomeIcon icon={faLanguage} className="h-8 w-8" aria-hidden="true" />
      <span className="w-5 text-base font-bold" aria-hidden="true">
        {lang === "pt" ? "EN" : "PT"}
      </span>
    </button>
  );
};

export default LangSwitchBtn;
