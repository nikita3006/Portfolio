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
  { title: 'DelightDine',
   viewProject: 'View Project 1',
   projectLink: 'https://delight-dine.vercel.app/',
    viewProjectLink: 'https://github.com/nikita3006/DelightDine.git' },
  { title: 'Expense-Tracker',
   viewProject: 'View Project 2',
   projectLink: 'https://expense-tracker-amber-two-44.vercel.app/',
    viewProjectLink: 'https://github.com/nikita3006/EXPENSE-TRACKER.git' },
  { title: 'ChatGptProject',
   viewProject: 'View Project 3',
   projectLink: 'https://chat-gpt-project-pi.vercel.app/',
    viewProjectLink: 'https://github.com/nikita3006/chatGptProject.git' },
  { title: 'BlogProject',
   viewProject: 'View Project 4',
   projectLink: 'https://blog-project-sigma-one.vercel.app/aboutUs.html',
    viewProjectLink: 'https://github.com/nikita3006/BlogProject.git' },
  { title: 'Parallax Webpage',
   viewProject: 'View Project 5',
    projectLink: 'Link 5',
   viewProjectLink: 'https://github.com/nikita3006/ParallaxWebpage.git' }
];

const Projects = () => {
  return (
    <section className='py-8' id='projects'>
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
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
             className='group relative overflow-hidden border-2
           border-white/50 rounded-xl
            lg:m-32 mb-14 lg:ml-48 lg:w-[800px] w-[280px] h-[150px] '>
          
            <div className='group-hover:bg-black/50 h-full lg:h-full
             absolute z-40 transition-all w-full duration-300'></div>
         
            <img src={imageSrc} alt={`Project ${index + 1}`}
             className='group-hover:scale-125
             transition-all duration-500 '
             style={{height:"100%"}}
              />
          
            <div className='absolute -bottom-full left-12 group-hover:bottom-8
             transition-all duration-500 z-50'>
              <a href={projectData[index].viewProjectLink}
               className='text-gradient text-[10px]'>{projectData[index].viewProject}</a>
            </div>
        
            <div className='absolute -bottom-full left-12 group-hover:bottom-1 
            transition-all duration-700 z-50 '>
              <a href={projectData[index].projectLink}
               className='text-gradient lg:text-3xl cursor-pointer text-[20px]'>{projectData[index].title}</a>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
