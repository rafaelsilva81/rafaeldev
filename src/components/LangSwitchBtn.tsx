import Image from "next/image";
import LightModeIcon from "../assets/LightModeIcon.svg";
import DarkModeIcon from "../assets/DarkModeIcon.svg";
import { useAtom } from "jotai";
import {
  colorsAtom,
  preferredLanguageAtom,
  prefersDarkAtom,
  selectedAtom,
} from "../lib/atoms";
import { motion } from "framer-motion";

const usaEmoji = "🇺🇸";
const brEmoji = "🇧🇷";

const LangSwitchBtn = () => {
  const [colors] = useAtom(colorsAtom);
  const [selected] = useAtom(selectedAtom);
  const [lang, setLang] = useAtom(preferredLanguageAtom);

  return (
    <motion.div
      animate={{ x: 0, opacity: 1 }}
      initial={{ x: -100, opacity: 0 }}
      transition={{ delay: 1.2, duration: 0.3 }}
      className="flex items-center"
    >
      <button
        onClick={() => setLang(lang === "en" ? "pt" : "en")}
        className="flex items-center w-8 h-8 p-2 transition ease-in-out rounded-lg hover:opacity-80"
        style={{ background: colors[selected] }}
      >
        {lang === "en" ? brEmoji : usaEmoji}
      </button>
    </motion.div>
  );
};

export default LangSwitchBtn;
