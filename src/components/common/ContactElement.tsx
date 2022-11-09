import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BoldText from './BoldText';

const ContactElement = ({
  icon,
  link,
  name,
}: {
  icon: IconDefinition;
  name: string;
  link: string;
}) => {
  return (
    <a
      href={link}
      rel='noopener noreferrer'
      target='_blank'>
      <div className='flex gap-2 items-center text-dark dark:text-light leading-none hover:opacity-70 transition ease-in-out'>
        <BoldText>
          <FontAwesomeIcon
            icon={icon}
            className='text-lg'
          />
        </BoldText>
        <span className='text-lg font-semibold'> {name} </span>
      </div>
    </a>
  );
};

export default ContactElement;
