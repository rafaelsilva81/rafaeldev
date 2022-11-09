import React from 'react';
import BoldText from './common/BoldText';
import { useAtom } from 'jotai';
import { contentAtom } from '../lib/atoms';
const Content = () => {
  const [page] = useAtom(contentAtom);
  return (
    <div className='flex flex-col justify-center 
    text-black dark:text-white tracking-wide leading-relaxed gap-3 text-justify w-3/4'>
      {page === 'home' && <HomeContent />}
      {page === 'about' && <AboutContent />}
      {page === 'contact' && <ContactContent />}
    </div>
  );
};

const HomeContent = () => {
  const [, setPage] = useAtom(contentAtom);
  return (
    <>
      {/* Header */}
      <span className='text-5xl uppercase font-bold'>
        Rafael Galdino da Silva,
      </span>

      {/* Paragraph (text) */}
      <span className='text-xl font-semibold text-justify'>
        <BoldText>Fullstack Web Developer</BoldText>, Computer Science undergraduate, Tech enthusiast and more.
      </span>
      <span className='text-xl font-semibold text-justify'>
        Based in Brazil and interested in all sorts of tech, but my main focus is modern web development. <br/>
        I use my knowledge to build software solutons using the latest technologies. 
      </span>

      <span className='text-xl font-semibold text-justify mt-4'>
        I'm currently looking for an Trainee or Junior position, if you are interested, please
        {' '}
        <BoldText> 
          <button onClick={() => setPage('contact')}> hit me up. </button> 
        </BoldText>
      </span>

    </>
  );
};

const AboutContent = () => {
  return (
    <>
      <span className='text-white'> About page now </span>
    </>
  );
};

const ContactContent = () => {
  return (
<>
      {/* Header */}
      <span className='text-4xl uppercase font-bold'>
        Enter in contact!
      </span>

      {/* Paragraph (text) */}
      <span className='text-xl font-semibold text-justify'>
        You can reach out to me to talk about a project, collaboration, position, or just to say hi! 
      </span>

      {/* Social buttons */}

      
    </>
  );
};

export default Content;
