import React from "react";
import { useAtom } from "jotai";
import { contentAtom, preferredLanguageAtom } from "../lib/atoms";
import { motion } from "framer-motion";
import HomeContent from "./content/HomeContent";
import AboutContent from "./content/AboutContent";
import ContactContent from "./content/ContactContent";
import ProjectsContent from "./content/ProjectsContent";

const PortfolioContent = () => {
  const [page] = useAtom(contentAtom);

  console.log(page);
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ delay: 0.6, duration: 0.3 }}
      className="flex flex-col flex-wrap justify-center gap-2 text-justify text-dark dark:text-light"
    >
      {page === "home" && <HomeContent />}
      {page === "about" && <AboutContent />}
      {page === "contact" && <ContactContent />}
      {page === "projects" && <ProjectsContent />}
    </motion.div>
  );
};

export default PortfolioContent;
