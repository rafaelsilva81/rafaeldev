import React from 'react';
import TechIcon from './common/TechIcon';
import NextIcon from '../assets/NextIcon.svg';
import TsIcon from '../assets/TsIcon.svg';
import ReactIcon from '../assets/ReactIcon.svg';
import NodeIcon from '../assets/NodeIcon.svg';

const TechBadges = () => {
  return (
    <div className='md:flex flex-row items-center gap-4 hidden'>
      <TechIcon icon={NodeIcon} />
      <TechIcon icon={ReactIcon} />
      <TechIcon icon={NextIcon} />
      <TechIcon icon={TsIcon} />
    </div>
  );
};

export default TechBadges;
