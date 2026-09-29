import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const contentAtom = atom<"home" | "about" | "contact" | "projects">("home");

const prefersDarkAtom = atomWithStorage<boolean>("color_theme", false);

// Ignore saved language preferences while the language switch is disabled.
const preferredLanguageAtom = atom<"pt" | "en">("pt");

export { contentAtom, prefersDarkAtom, preferredLanguageAtom };
