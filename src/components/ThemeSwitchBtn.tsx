import Image from "next/image";
import LightModeIcon from "../assets/LightModeIcon.svg";
import DarkModeIcon from "../assets/DarkModeIcon.svg";
import { useAtom } from "jotai";
import { preferredLanguageAtom, prefersDarkAtom } from "../lib/atoms";

const ThemeSwitchBtn = () => {
  const [prefersDark, setPrefersDark] = useAtom(prefersDarkAtom);
  const [lang] = useAtom(preferredLanguageAtom);
  const label = lang === "pt"
    ? `Ativar modo ${prefersDark ? "claro" : "escuro"}`
    : `Switch to ${prefersDark ? "light" : "dark"} mode`;

  return (
    <button
      type="button"
      onClick={() => setPrefersDark(!prefersDark)}
      className="control-button"
      aria-label={label}
      aria-pressed={prefersDark}
      title={label}
    >
      <Image
        src={prefersDark ? LightModeIcon : DarkModeIcon}
        alt=""
        width={32}
        height={32}
        className="dark:invert"
      />
    </button>
  );
};

export default ThemeSwitchBtn;
