import React from 'react';
import { motion } from "framer-motion";

import { fadeIn } from "../variants";
import imagePath1 from '../assets/Img1.jpg';
import imagePath2 from '../assets/Img2.jpg';
import imagePath3 from '../assets/Img3.jpg';
import imagePath4 from '../assets/Img4.jpg';
import imagePath5 from '../assets/Img5.jpg';

const imagePaths = [imagePath1, imagePath2, imagePath3, imagePath4, imagePath5];

const projectData = [
  { title: 'DelightDine', viewProject: 'View Project 1', link: 'https://delight-dine.vercel.app/' },
  { title: 'Expense-Tracker', viewProject: 'View Project 2', link: 'https://expense-tracker-amber-two-44.vercel.app/' },
  { title: 'ChatGptProject', viewProject: 'View Project 3', link: 'https://chat-gpt-project-pi.vercel.app/' },
  { title: 'BlogProject', viewProject: 'View Project 4', link: 'https://blog-project-sigma-one.vercel.app/aboutUs.html' },
  { title: 'Parallax Webpage', viewProject: 'View Project 5', link: 'Link 5' }
];

const Projects = () => {
  return (
    <header className='py-8' id='projects'>
      <div className="container mx-auto shadow-2xl rounded-md">
        <div className='flex justify-center items-center'>
           <motion.h2
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[50px] font-bold leading-[0.8]
                p-2
                lg:text-[60px] lg:p-8 text-gradient"
              >
              Projects          
           </motion.h2>
        </div>
        {imagePaths.map((imageSrc, index) => (
          <motion.div key={index}
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
             className='group relative overflow-hidden border-2
           border-white/50 rounded-xl lg:m-38 m-14'>
            {/* overlay */}
            <div className='group-hover:bg-black/50 w-full h-full lg:h-full
             absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img src={imageSrc} alt={`Project ${index + 1}`} className='group-hover:scale-125
             transition-all duration-500 ' />
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-28
             transition-all duration-500 z-50'>
              <a href={projectData[index].link} className='text-gradient'>{projectData[index].viewProject}</a>
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-20 
            transition-all duration-700 z-50 '>
              <span className='text-gradient text-3xl cursor-pointer'>{projectData[index].title}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </header>
  );
};

export default Projects;
