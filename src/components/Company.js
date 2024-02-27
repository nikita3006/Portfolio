import React  from 'react';
import Header from './Header';
import { motion } from "framer-motion";
import { fadeIn } from "../variants";










const data=[
    {
        id:'1',
        name: 'Restdali',
        designation:'Software Developer(Intern)',
        duration:'4 months',
        responsibilities:'1- Worked on a React restaurant site, adding multilingual support,improving navigation, and using Zod for data validation.2- Boosted engagement with dynamic imports, lazy loading, and URL- based language settings. 3- Met team milestones with high-quality code contributions.4- Made the website responsive for different devices.5- Actively participated in code reviews.'

    },
    {
        id:'2',
        name: 'Restdali',
        designation:'Software Developer(Intern)',
        duration:'4 months',
        responsibilities:'1- Worked on a React restaurant site, adding multilingual support,improving navigation, and using Zod for data validation.2- Boosted engagement with dynamic imports, lazy loading, and URL- based language settings. 3- Met team milestones with high-quality code contributions.4- Made the website responsive for different devices.5- Actively participated in code reviews.'
       

    },
]
const Company = () => {
  return (
    <header className='py-8 bg-pink-500'>
       <div className="container mx-auto ">
        <Header/>
       
       {
            data.map((items,id) =>{
                const {name, designation,duration,responsibilities} =items
              return(
                <div className='bg-gray-100 text-black flex lg:p-8 lg:m-10 lg:gap-x-10 flex-col lg:flex-row' key={id}>
                     <div className='bg-pink-400 lg:py-4 h-[420px] w-[420px] flex8'>
                     <motion.h2
                        variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className="text-[50px] font-bold leading-[0.8] lg:text-[60px] lg:p-8"
                        >
                       {name}
                        </motion.h2>
                        <motion.h3
                        variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className="text-[30px] font-bold leading-[0.8] lg:text-[30px] lg:p-8"
                        >
                        {designation}
                        </motion.h3>
                        <motion.h5
                        variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className="text-[25px] font-bold leading-[0.8] lg:text-[20px] lg:p-8"
                        >
                        {duration}
                        </motion.h5>
                     </div>
                     <motion.p
                        variants={fadeIn("left", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className="text-[25px] font-thin leading-[2.8] lg:text-[20px] lg:p-8"
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
