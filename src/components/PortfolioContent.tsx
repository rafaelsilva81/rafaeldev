import React from 'react';
import BoldText from './common/BoldText';
import { useAtom } from 'jotai';
import { contentAtom } from '../lib/atoms';
import {
  faLinkedinIn,
  faInstagram,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ContactElement from './common/ContactElement';
import { motion } from 'framer-motion';

const PortfolioContent = () => {
  const [page] = useAtom(contentAtom);

  console.log(page);
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ delay: 0.6, duration: 0.3 }}
      className='flex flex-col justify-center flex-wrap
    text-dark dark:text-light gap-2 text-justify md:w-4/5'>
      {page === 'home' && <HomeContent />}
      {page === 'about' && <AboutContent />}
      {page === 'contact' && <ContactContent />}
    </motion.div>
  );
};

const HomeContent = () => {
  const [, setPage] = useAtom(contentAtom);

  return (
    <>
      {/* Header */}
      <span className='text-3xl md:text-5xl uppercase font-bold'>
        Rafael Galdino da Silva,
      </span>

      {/* Paragraph (text) */}
      <span className='text-xl md:text-xl font-semibold text-justify'>
        <BoldText>Fullstack Web Developer</BoldText>, Computer Science
        undergraduate, Tech enthusiast and more.
      </span>

      <span className='text-xl md:text-xl font-semibold text-justify'>
        Based in Brazil and interested in all sorts of tech, my main focus is
        modern web development. <br /> I use my knowledge to build software
        solutons using the latest technologies.
      </span>

      <span className='text-xl md:text-xl font-semibold text-justify'>
        {`I'm currently looking for an Trainee or Junior position, if you are
        interested, please `}
        <BoldText>
          <button
            className='hover:opacity-80 transition ease-in-out'
            onClick={() => setPage('contact')}>
            {' '}
            contact me!{' '}
          </button>
        </BoldText>
      </span>
    </>
  );
};

const AboutContent = () => {
  return (
    <>
      {/* Header */}
      <span className='text-3xl md:text-5xl uppercase font-bold'>About me</span>

      {/* Paragraph (text) */}
      <span className='text-xl md:text-xl font-semibold text-justify'>
        {`
        My passion for tech started when I was little, 
        I was always interested in game development, but this shifted
        to web development when I was 15. I started learning HTML, CSS and JS,
        and I was hooked.`}
      </span>

      <span className='text-xl md:text-xl font-semibold text-justify'>
        {` 
          I started to learn more and more, and in the recent years I've been learning 
          about modern web development, using the latest technologies such as
        `}
        <BoldText>
          React, NextJS, NodeJS, TypeScript, REST, MongoDB, Git, Firebase,
          TailwindCSS
        </BoldText>{' '}
        and more!
      </span>

      <span className='text-xl md:text-xl font-semibold text-justify'>
        {`English is my second language, so I'm available for international remote work, and I'm also open to collaborate on freelance projects `}
      </span>
    </>
  );
};

const ContactContent = () => {
  return (
    <>
      {/* Header */}
      <span className='text-3xl md:text-5xl uppercase font-bold'>
        Get in Touch.
      </span>

      {/* Paragraph (text) */}
      <span className='text-xl md:text-xl font-semibold text-justify'>
        You can reach out to me clicking below to talk about a project,
        collaboration, position, or just to say <BoldText>hi!</BoldText>
      </span>

      {/* Social buttons */}
      <div className='flex flex-col mt-2'>
        <ContactElement
          icon={faLinkedinIn}
          link='https://www.linkedin.com/in/rafaelgaldinosilva81/'
          name='/rafaelgaldinosilva81'
        />
        <ContactElement
          icon={faGithub}
          link='https://github.com/rafaelsilva81'
          name='/rafaelsilva81'
        />
        <ContactElement
          icon={faInstagram}
          link='https://www.instagram.com/rafaelsilva.81/'
          name='@rafaelsilva.81'
        />
        <ContactElement
          icon={faEnvelope}
          link='mailto:rafaelgaldinosilva81@gmail.com'
          name='rafaelgaldinosilva81@gmail.com'
        />
      </div>
    </>
  );
};

export default PortfolioContent;
