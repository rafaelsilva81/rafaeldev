import { motion, Target, TargetAndTransition, useReducedMotion } from "framer-motion";
import { useAtom } from "jotai";
import { ReactNode, useEffect } from "react";
import { preferredLanguageAtom, prefersDarkAtom } from "../lib/atoms";

// Each palette returns to its first color for a seamless 140-second cycle.
// Separate light/dark values preserve contrast as the accent changes.
const accentCycle = {
  "--accent-light": [
    "#b91c1c", "#c2410c", "#a16207", "#15803d",
    "#0369a1", "#4f46e5", "#7e22ce", "#b91c1c",
  ],
  "--accent-dark": [
    "#f87171", "#fb923c", "#fbbf24", "#4ade80",
    "#38bdf8", "#818cf8", "#c084fc", "#f87171",
  ],
};

const initialAccents = {
  "--accent-light": accentCycle["--accent-light"][0],
  "--accent-dark": accentCycle["--accent-dark"][0],
};

export default function PortfolioTheme({ children }: { children: ReactNode }) {
  const [prefersDark] = useAtom(prefersDarkAtom);
  const [lang] = useAtom(preferredLanguageAtom);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", prefersDark);
  }, [prefersDark]);

  return (
    <motion.div
      className={`portfolio-theme ${prefersDark ? "dark" : "light"}`}
      initial={initialAccents as Target}
      animate={(reduceMotion ? initialAccents : accentCycle) as TargetAndTransition}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { duration: 140, ease: "linear", repeat: Infinity }
      }
    >
      {children}
    </motion.div>
  );
}
