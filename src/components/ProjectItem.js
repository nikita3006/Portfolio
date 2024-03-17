import React from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const ProjectItem = ({ projectData, imageSrc, index }) => {
  return (
    <motion.div
      key={index}
      variants={fadeIn("down", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className='group relative overflow-hidden border-2 border-white/50 rounded-xl mb-14 w-[280px] h-[150px] lg:w-[900px] lg:h-[400px] '
    >
      <div className='group-hover:bg-black/50 h-full lg:h-full absolute z-40 transition-all w-full duration-300'></div>
      <img
        src={imageSrc}
        alt={`Project ${index + 1}`}
        className='group-hover:scale-125 transition-all duration-500 '
        style={{ height: "100%" }}
      />
      <div className='absolute -bottom-full left-12 group-hover:bottom-8 transition-all duration-500 z-50'>
        <a href={projectData[index].viewProjectLink} className='text-gradient lg:text-[20px]'>
          {projectData[index].viewProject}
        </a>
      </div>
      <div className='absolute -bottom-full left-12 group-hover:bottom-1 transition-all duration-700 z-50 '>
        <a href={projectData[index].projectLink} className='text-gradient lg:text-3xl cursor-pointer text-[20px]'>
          {projectData[index].title}
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
