import Image from 'next/image';
import React, { useState } from 'react';
import LightModeIcon from '../assets/LightModeIcon.svg';
import DarkModeIcon from '../assets/DarkModeIcon.svg';
import { useAtom } from 'jotai';
import {
  colorsAtom,
  contentAtom,
  prefersDarkAtom,
  selectedAtom,
} from '../lib/atoms';
import { motion } from 'framer-motion';
import { Menu } from '@headlessui/react';
import { faBars, faX as faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type NavigationPage = 'home' | 'about' | 'contact';

const BottomBar = () => {
  const navigation: NavigationPage[] = ['home', 'about', 'contact'];
  const [colors] = useAtom(colorsAtom);
  const [selected] = useAtom(selectedAtom);
  const [content, setContent] = useAtom(contentAtom);
  const [prefersDark, setPrefersDark] = useAtom(prefersDarkAtom);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Navigation (Will not actually navigate) */}
      <motion.div
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: 100, opacity: 0 }}
        transition={{ delay: 0.9, duration: 0.3 }}
        className='hidden md:flex justify-center items-baseline gap-20 uppercase'>
        {navigation.map((item: NavigationPage) =>
          item === content ? (
            <ActiveItem
              key={item + '-active-lg'}
              current={item}
            />
          ) : (
            <span
              key={item + '-lg'}
              className='text-2xl text-black dark:text-white cursor-pointer hover:font-semibold'
              onClick={() => setContent(item)}>
              {item}
            </span>
          )
        )}
      </motion.div>

      {/*  menu for mobile */}
      <div className='flex flex-row md:hidden items-center gap-2 uppercase'>
        <Menu>
          {({ open }) => (
            <>
              <Menu.Button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='rounded-lg items-center justify-center flex flex-row gap-2 p-2'
                style={{ background: colors[selected] }}>
                <FontAwesomeIcon
                  icon={isMenuOpen ? faClose : faBars}
                  className='w-5 h-5'
                  color={'#f8f8f8'}
                />
              </Menu.Button>
              {isMenuOpen && (
                <motion.div
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}>
                  <Menu.Items
                    static
                    className='flex gap-2'>
                    {navigation.map((item: NavigationPage) =>
                      item === content ? (
                        <Menu.Item key={item}>
                          <ActiveItem current={item} />
                        </Menu.Item>
                      ) : (
                        <Menu.Item key={item}>
                          <span
                            className='text-md text-black dark:text-white cursor-pointer hover:font-semibold'
                            onClick={() => setContent(item)}>
                            {item}
                          </span>
                        </Menu.Item>
                      )
                    )}
                  </Menu.Items>
                </motion.div>
              )}
            </>
          )}
        </Menu>
      </div>

      {/* Light/Dark mode button */}
      <motion.div
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ delay: 1.2, duration: 0.3 }}
        className='flex items-center'>
        <button
          onClick={() => setPrefersDark(!prefersDark)}
          className='rounded-lg p-2 hover:opacity-80 transition ease-in-out'
          style={{ background: colors[selected] }}>
          <Image
            className='w-6 h-6'
            src={prefersDark ? LightModeIcon : DarkModeIcon}
            alt='change-theme'
          />
        </button>
      </motion.div>
    </>
  );
};

const ActiveItem = ({ current }: { current: NavigationPage }) => {
  const [colors] = useAtom(colorsAtom);
  const [selected] = useAtom(selectedAtom);
  return (
    <>
      <div className='flex cursor-pointer text-md md:text-2xl'>
        <span
          className='font-semibold'
          style={{
            color: colors[selected],
          }}>
          {'<'}
        </span>
        <div className='flex flex-col text-dark dark:text-light'>
          <span className='font-bold'>{current}</span>
        </div>
        <span
          className='text-red-600 font-semibold'
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
