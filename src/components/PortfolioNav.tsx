import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { colorsAtom, contentAtom, selectedAtom } from '../lib/atoms';
import { motion } from 'framer-motion';
import { Menu } from '@headlessui/react';
import { faBars, faX as faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

type NavigationPage = 'home' | 'about' | 'contact';

const PortfolioNav = () => {
  const navigation: NavigationPage[] = ['home', 'about', 'contact'];
  const [colors] = useAtom(colorsAtom);
  const [selected] = useAtom(selectedAtom);
  const [content, setContent] = useAtom(contentAtom);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* menu for larger screen */}
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
        <span
          key={'resume-lg'}
          className='text-2xl text-black dark:text-white cursor-pointer hover:font-semibold'
          onClick={() => window.open('/resume.pdf', '_blank')}>
          resume
        </span>
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
                    <Menu.Item key={'resume'}>
                      <Link
                        href='/resume.pdf'
                        target='_blank'>
                        resume
                      </Link>
                    </Menu.Item>
                  </Menu.Items>
                </motion.div>
              )}
            </>
          )}
        </Menu>
      </div>
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

export default PortfolioNav;
