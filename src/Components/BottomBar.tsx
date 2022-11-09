import Image from 'next/image';
import React from 'react';
import LightModeIcon from '../assets/LightModeIcon.svg';
import DarkModeIcon from '../assets/DarkModeIcon.svg';
import { useAtom } from 'jotai';
import {
  colorsAtom,
  contentAtom,
  prefersDarkAtom,
  selectedAtom,
} from '../lib/atoms';

type NavigationPage = 'home' | 'about' | 'contact';

const BottomBar = () => {
  const navigation: NavigationPage[] = ['home', 'about', 'contact'];
  const [colors] = useAtom(colorsAtom);
  const [selected] = useAtom(selectedAtom);
  const [content, setContent] = useAtom(contentAtom);
  const [prefersDark, setPrefersDark] = useAtom(prefersDarkAtom);

  return (
    <>
      {/* Navigation (Will not actually navigate) */}
      <div className='flex flex-row justify-center items-baseline gap-20 uppercase'>
        {navigation.map((item: NavigationPage) =>
          item === content ? (
            <ActiveItem
              key={item}
              current={item}
            />
          ) : (
            <span
              key={item}
              className='text-2xl text-black dark:text-white cursor-pointer'
              onClick={() => setContent(item)}>
              {item}
            </span>
          )
        )}
      </div>

      {/* Light/Dark mode button */}
      <div className='flex items-center'>
        <button
          onClick={() => setPrefersDark(!prefersDark)}
          className='rounded-2xl p-3 text-black dark:text-white'
          style={{ background: colors[selected] }}>
          <Image
            src={prefersDark ? LightModeIcon : DarkModeIcon}
            alt='light-mode'
          />
        </button>
      </div>
    </>
  );
};

const ActiveItem = ({ current }: { current: NavigationPage }) => {
  const [colors] = useAtom(colorsAtom);
  const [selected] = useAtom(selectedAtom);
  return (
    <>
      <div className='flex gap-1 cursor-pointer'>
        <span
          className='text-2xl font-semibold'
          style={{
            color: colors[selected],
          }}>
          {'<'}
        </span>
        <div className='flex flex-col'>
          <span className='text-2xl text-black dark:text-white font-bold'>
            {current}
          </span>
        </div>
        <span
          className='text-2xl text-red-600 font-semibold'
          style={{
            color: colors[selected],
          }}>
          {'/>'}
        </span>
      </div>
    </>
  );
};

export default BottomBar;
