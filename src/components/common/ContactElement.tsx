import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
      className='contact-link'
      rel='noopener noreferrer'
      target='_blank'>
      <FontAwesomeIcon
        icon={icon}
        className='text-accent h-5 w-6 shrink-0'
        aria-hidden='true'
      />
      <span className='min-w-0 break-words'> {name} </span>
    </a>
  );
};

export default ContactElement;
