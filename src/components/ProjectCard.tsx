import React from "react";
import { motion } from "framer-motion";
import BoldText from "./common/BoldText";

const ProjectCard = ({
  project,
  lang,
}: {
  project: Project;
  lang: "pt" | "en";
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
      }}
    >
      <div id="projectCard" className="mb-2">
        <div className="flex flex-col p-1 text-right rounded-md dark:bg-neutral-200 bg-neutral-900 md:h-64 h-72">
          {/* Grid with project info and image */}
          <div className="grid h-full grid-rows-2 md:grid-rows-1 md:grid-cols-2">
            {/* Project info with padding */}
            <div className="flex flex-col justify-center order-2 col-span-1 gap-1 p-4 py-2">
              <h2 className="text-xl font-bold break-words">
                <BoldText>{project.name}</BoldText>
              </h2>
              <p className="text-white dark:text-neutral-800">
                {lang === "en"
                  ? project.description_en
                  : project.description_pt}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg transition ease-in-out hover:opacity-60"
                >
                  <BoldText>
                    {lang === "en" ? "<See more/>" : "<Ver mais/>"}
                  </BoldText>
                </a>
              )}
            </div>
            <div className="flex items-center justify-center order-1 col-span-1 m-0">
              {/* Contain img inside card */}
              <div
                className="w-full h-full mr-0 bg-center bg-cover md:rounded-l-md md:rounded-tr-none rounded-t-md"
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
