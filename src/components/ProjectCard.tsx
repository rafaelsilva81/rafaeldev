import React from 'react';
import { motion } from 'framer-motion';
import BoldText from './common/BoldText';

const ProjectCard = ({ project }: { project: Project }) => {
  let imageUrl;

  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
      }}>
      <div
        id='projectCard'
        className='mb-2'>
        <div className='flex flex-col dark:bg-neutral-200 bg-neutral-900 rounded-md md:h-52 h-72 text-right p-1'>
          {/* Grid with project info and image */}
          <div className='grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 h-full'>
            {/* Project info with padding */}
            <div className='flex flex-col justify-center p-4 gap-1 col-span-1 order-2 py-2'>
              <h2 className='text-xl font-bold break-words'>
                <BoldText>{project.name}</BoldText>
              </h2>
              <p className='dark:text-neutral-800 text-white'>
                {project.description}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  target='_blank'
                  rel='noreferrer'
                  className='text-lg hover:opacity-60 transition ease-in-out'>
                  <BoldText>{`<See More/>`}</BoldText>
                </a>
              )}
            </div>
            <div className='flex justify-center items-center m-0 col-span-1 order-1'>
              {/* Contain img inside card */}
              <div
                className='w-full h-full bg-cover bg-center mr-0 md:rounded-l-md md:rounded-tr-none rounded-t-md'
                style={{ backgroundImage: `url(${project.img})` }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
