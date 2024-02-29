import React  from 'react';
import { motion} from "framer-motion";
import { fadeIn } from "../variants";


const data=[
    {
        id:'1',
        name: 'Sharpener',
        designation:'Learner',
        duration:'1 year',
        responsibilities:'1- Completed an intensive program at Sharpener Tech focused on web development and data structures & algorithms.2- Gained proficiency in web development technologies, including HTML, CSS, and JavaScript, through hands-on learning and project-based assignments. 3- Developed basic web pages from scratch, demonstrating proficiency in front-end development and understanding of core concepts.4-Collaborated with peers on various projects, fostering teamwork and communication skills essential for a collaborative work environment.'

    },
    {
        id:'2',
        name: 'Restdali',
        designation:'Software Developer(Intern)',
        duration:'4 months',
        responsibilities:'1- Worked on a React restaurant site, adding multilingual support,improving navigation, and using Zod for data validation.2- Boosted engagement with dynamic imports, lazy loading, and URL- based language settings. 3- Met team milestones with high-quality code contributions.4- Made the website responsive for different devices.5- Actively participated in code reviews.'
    },
      {
        id:'3',
        name: 'Helpy Moto',
        designation:'FrontEnd Developer(Intern)',
        duration:'1 months',
        responsibilities:'1- Created a user info page for better interactivity and data handling. Built an FAQs section to improve support. 2- Played a major role in creating dynamic web pages with React. 3- Worked with back-end teams for smooth feature integration.4- Built an FAQs section to improve support.'
    },
    {
      id:'4',
      name: 'ONE Simulation',
      designation:'Web Developer(Intern)',
      duration:'1 months',
      responsibilities:'1- Developed a responsive landing page for a company.2- Utilized HTML, CSS, and JavaScript to ensure cross-device compatibility and user-friendly design. 3-Implemented responsive design principles to optimize the user experience across various screen sizes.4- Pushed the project to GitHub for seamless sharing and accessibility.'
    },
]
const Company = () => {
  return (
    <header className='' id='company'>
       <div className="container mx-auto shadow-2xl rounded-md ">
       <div className='flex justify-center items-center'>
           <motion.h2
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[50px] font-bold leading-[0.8]
                p-2
                lg:text-[60px] lg:p-8 text-gradient"
              >
              My Work Experience          
           </motion.h2>
           </div>
       
       {
            data.map((items,id) =>{
                const {name, designation,duration,responsibilities} =items
              return(
                <div className=' text-accent flex lg:p-8 lg:m-10 lg:gap-x-10 flex-col lg:flex-row' key={id}>
                     <div className=' lg:py-12 h-[420px] w-[420px]
                      flex-1 p-10 m-4'>
                     <motion.h2
                        variants={fadeIn("right", 0.4)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className="text-[50px] font-bold leading-[0.8]
                         p-2
                         lg:text-[60px] lg:p-8 text-gradient"
                        >
                       {name}
                        </motion.h2>
                        <motion.h3
                        variants={fadeIn("right", 0.4)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className="text-[30px] font-bold
                        p-2 leading-[0.8] lg:text-[30px] lg:p-8"
                        >
                        {designation}
                        </motion.h3>
                        <motion.h5
                        variants={fadeIn("right", 0.4)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className="text-[25px] font-bold 
                        p-2
                        leading-[0.8] lg:text-[20px] lg:p-8"
                        >
                        {duration}
                        </motion.h5>
                     </div>
                     <motion.p
                        variants={fadeIn("left", 0.4)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className="text-[25px] font-thin 
                         m-4 lg:leading-[1.8] leading-[2] lg:text-[20px] lg:p-8 text-white"
                        >
                        {responsibilities}
                    </motion.p>
                </div>
              )
            })
        }
    
      </div>
    </header>
  )
};

export default Company;
