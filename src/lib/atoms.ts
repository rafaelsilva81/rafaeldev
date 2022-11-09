import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

const colorsAtom = atom([
  '#DC2626', // tailwind red-600
  '#F97316', // tailwind orange-500
  '#F59E0B', // tailwind yellow-500
  '#16A34A', // tailwind green-600
  '#0284C7', // tailwind sky-600 (blue)
  '#6366f1', // tailwind indigo-500
  '#7C3AED', // tailwind violet-600
]);

const selectedAtom = atomWithStorage('selected_color', 0);

const contentAtom = atom<'home' | 'about' | 'contact'>('home');

//Get preferred theme from prefers-color-scheme
const prefersDarkAtom = atomWithStorage<boolean>('color_theme', false);

export { colorsAtom, selectedAtom, contentAtom, prefersDarkAtom };
