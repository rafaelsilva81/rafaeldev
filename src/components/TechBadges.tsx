import React from 'react';
import TechIcon from './common/TechIcon';
import TsIcon from '../assets/TsIcon.svg';
import ReactIcon from '../assets/ReactIcon.svg';
import NodeIcon from '../assets/NodeIcon.svg';

const TechBadges = () => {
  return (
    <div className='md:flex flex-row items-center gap-4 hidden'>
      <TechIcon icon={NodeIcon} label='Node.js' />
      <TechIcon icon={ReactIcon} label='React' />
      <TechIcon icon={TsIcon} label='TypeScript' />
    </div>
  );
};

export default TechBadges;
