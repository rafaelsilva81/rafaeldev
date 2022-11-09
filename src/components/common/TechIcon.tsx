import Image from 'next/image';
import { motion } from 'framer-motion';

const TechIcon = ({ icon }: { icon: string }) => {
  return (
    <motion.div
      animate={{ x: 0, opacity: 1 }}
      initial={{ x: -100, opacity: 0 }}
      transition={{ delay: 0.3, duration: 0.3 }}
      className='flex justify-center items-center dark:bg-light rounded-lg bg-dark w-10 h-10 p-2'>
      <Image
        src={icon}
        alt={icon}
        className='dark:invert-0 invert'
      />
    </motion.div>
  );
};

export default TechIcon;
