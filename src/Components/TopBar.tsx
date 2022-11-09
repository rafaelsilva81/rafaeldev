import Image from 'next/image';
import NextIcon from '../assets/NextIcon.svg';
import TsIcon from '../assets/TsIcon.svg';
import ReactIcon from '../assets/ReactIcon.svg';
import NodeIcon from '../assets/NodeIcon.svg';
import { ProfileIcon } from './common/ProfileIcon';
import { useAtom } from 'jotai';
import { colorsAtom, selectedAtom } from '../lib/atoms';

const TopBar = () => {
  const [colors] = useAtom(colorsAtom);
  const [selected, setSelected] = useAtom(selectedAtom);

  const iconStyle = {
    '&:hover': {
      color: colors[selected],
    },
  };

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
    <>
      {/* Logo */}
      <div
        className='flex justify-center items-center gap-2 cursor-pointer'
        onClick={handleColorChange}>
        <ProfileIcon color={colors[selected]} />
        <span className='text-2xl text-black dark:text-white'>
          rafael
          <span
            className='font-bold'
            style={{ color: colors[selected] }}>
            galdino
          </span>
          silva
        </span>
      </div>
      {/* Technologies */}
      <div className='flex flex-row justify-center items-center gap-4'>
        <div className='flex items-center dark:bg-white rounded-lg bg-black'>
          <Image
            width={44}
            src={NodeIcon}
            alt='NodeJS'
            className='dark:invert-0 invert'
          />
        </div>

        <div className='flex items-center dark:bg-white rounded-lg bg-black'>
          <Image
            width={44}
            src={ReactIcon}
            alt='NodeJS'
            className='dark:invert-0 invert'
          />
        </div>
        <div className='flex items-center dark:bg-white rounded-lg bg-black'>
          <Image
            width={44}
            src={NextIcon}
            alt='NodeJS'
            className='dark:invert-0 invert'
          />
        </div>

        {/* Ts icon is different */}
        <Image
          width={44}
          src={TsIcon}
          alt='NodeJS'
          className='dark:invert-0 invert'
        />
      </div>
    </>
  );
};

export default TopBar;
