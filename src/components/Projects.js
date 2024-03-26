import React from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import ProjectItem from '../components/ProjectItem';
import { ProjectData } from '../constant/ProjectData';
import imagePath1 from '../assets/Img1.jpg';

import imagePath3 from '../assets/Img3.jpg';
import imagePath4 from '../assets/Img4.jpg';
import imagePath5 from '../assets/Img5.jpg';

const imagePaths = [imagePath1, imagePath3, imagePath4, imagePath5];

const Projects = () => {
  const projectData = ProjectData;
  
  return (
    <section className='py-8' id='projects'>
      <div className="container mx-auto shadow-2xl rounded-md">
        <div className='flex justify-center items-center'>
          <motion.h2
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-[50px] font-bold leading-[0.8] p-2 lg:text-[60px] lg:p-8 text-gradient"
          >
            Projects
          </motion.h2>
        </div >
        <div className='flex flex-col justify-center items-center'>
          {imagePaths.map((imageSrc, index) => (
            <ProjectItem
              key={index}
              projectData={projectData}
              imageSrc={imageSrc}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
