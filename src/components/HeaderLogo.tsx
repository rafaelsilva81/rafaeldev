import React from 'react';
import { ProfileIcon } from './common/ProfileIcon';
import { useAtom } from 'jotai';
import { colorsAtom, selectedAtom } from '../lib/atoms';
import { motion } from 'framer-motion';

const HeaderLogo = () => {
  const [colors] = useAtom(colorsAtom);
  const [selected, setSelected] = useAtom(selectedAtom);

  const handleColorChange = () => {
    /* loop the array */
    const nextColor = selected + 1;
    if (nextColor >= colors.length) {
      setSelected(0);
    } else {
      setSelected(nextColor);
    }
  };

  return (
    <motion.div
      animate={{ x: 0, opacity: 1 }}
      initial={{ x: 100, opacity: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      className='flex justify-center items-center gap-2 cursor-pointer'
      onClick={handleColorChange}>
      <div className='hidden md:block'>
        <ProfileIcon color={colors[selected]} />
      </div>

      <div className='block md:hidden'>
        <ProfileIcon
          color={colors[selected]}
          size={40}
        />
      </div>
      <span className='text-xl md:text-2xl text-dark dark:text-light'>
        rafael
        <span
          className='font-bold'
          style={{ color: colors[selected] }}>
          galdino
        </span>
        silva
      </span>
    </motion.div>
  );
};

export default HeaderLogo;
