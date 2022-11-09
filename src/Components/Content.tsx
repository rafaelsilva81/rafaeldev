import React from 'react';
import BoldText from './common/BoldText';
import { useAtom } from 'jotai';
import { contentAtom } from '../lib/atoms';
const Content = () => {
  const [page] = useAtom(contentAtom);
  return (
    <div className=''>
      {page === 'home' && <HomeContent />}
      {page === 'about' && <AboutContent />}
      {page === 'contact' && <ContactContent />}
    </div>
  );
};

const HomeContent = () => {
  return (
    <div className='flex flex-col justify-center text-black dark:text-white tracking-widest leading-relaxed gap-3'>
      {/* Header */}
      <span className='text-4xl uppercase font-bold'>
        BIG HEADER, LOREM IPSUM DOLOR SIT AMET
      </span>

      {/* Paragraph (text) */}
      <span className='text-xl font-semibold text-justify'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit
        risus id ullamcorper euismod. Curabitur id tellus volutpat, mattis diam
        at, mattis ante. Curabitur vestibulum sem vel risus laoreet cursus. Sed
        scelerisque molestie condimentum. Ut rhoncus ligula metus, ut tincidunt
        massa faucibus ullamcorper. Nulla facilisi. Donec consectetur
        <BoldText> semper </BoldText>
        hendrerit felis eget rutrum. Donec convallis orci in sapien vulputate
        accumsan. In vel lorem tempor, bibendum eros a, interdum diam. Etiam nec
        blandit ligula, quis hendrerit purus. Aliquam sit amet nisi ligula.
      </span>

      <span className='text-xl font-semibold text-justify'>
        In ultrices arcu lacus, id lacinia purus luctus at. Ut lacinia sodales
        arcu, at aliquet dui. Nam volutpat eros nunc, id ultricies nisl porta
        nec. Nullam eu eros sollicitudin, laoreet sapien sit amet, vulputate
        erat. Fusce ac dictum massa, vitae posuere enim. Cras eleifend metus et
        dolor consequat fringilla. Quisque et dui erat.
      </span>
    </div>
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
      <span> Contact page now </span>
    </>
  );
};

export default Content;
