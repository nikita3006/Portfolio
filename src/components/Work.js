import React from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from '../assets/Img1.jpg'
import Img2 from '../assets/Img2.jpg'
import Img3 from '../assets/Img3.jpg'


const Work = () => {
  return(
    <section className='section' id='work'>
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row gap-x-10  '>
            <motion.div
               variants={fadeIn("right", 0.2)}
               initial="hidden"
               whileInView={"show"}
               viewport={{ once: false, amount: 0.3 }}
               className='flex-1 flex flex-col gap-y-8 mb-10 lg:mb-0'>
              {/* text */}
              <div>
                <h2 className='h2 leading-tight text-accent'>
                  My Latest <br/>
                  Work
                </h2>
                <p className='max-w-sm mb-6'>
                I began my journey in this field two years ago and have since undergone extensive learning, yet I acknowledge there is still much more to explore. 
                </p>
                <button className='btn btn-lg'> 
                  View all Projects
                </button>
              </div>
              {/* img */}
              <div className='group relative overflow-hidden border-2 
              border-white/50 rounded-xl'>
                {/* overlay */}
                <div className='group-hover:bg-black/50 w-full h-full lg:h-full absolute
                z-40 transition-all duration-300'></div>
                {/* img */}
                <img className='group-hover:scale-125 transition-all duration-500 ' src={Img1} alt=''/>
                {/* pretitle */}
                <div className='absolute -bottom-full left-12
                group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>UI/UX Design</span>
                
                </div>
                {/* title */}
                <div className='absolute -bottom-full left-12
                group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-gradient text-3xl' >Project Title</span>
                </div>
              </div>
            </motion.div>
            <motion.div
               variants={fadeIn("left", 0.2)}
               initial="hidden"
               whileInView={"show"}
               viewport={{ once: false, amount: 0.3 }} className='flex-1 flex flex-col gap-y-24'>
              {/* img */}
              <div className='group relative overflow-hidden border-2 
              border-white/50 rounded-xl '>
                {/* overlay */}
                <div className='group-hover:bg-black/50 w-full h-full lg:h-full absolute
                z-40 transition-all duration-300'></div>
                {/* img */}
                <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt=''/>
                {/* pretitle */}
                <div className='absolute -bottom-full left-12
                group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>UI/UX Design</span>
                
                </div>
                {/* title */}
                <div className='absolute -bottom-full left-12
                group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-gradient text-3xl' >Project Title</span>
                </div>
              </div>
              {/* img */}
              <div className='group relative overflow-hidden border-2 
              border-white/50 rounded-xl'>
                {/* overlay */}
                <div className='group-hover:bg-black/50 w-full h-full lg:h-full absolute
                z-40 transition-all duration-300'></div>
                {/* img */}
                <img className='group-hover:scale-125 transition-all duration-500 ' src={Img3} alt=''/>
                {/* pretitle */}
                <div className='absolute -bottom-full left-12
                group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>UI/UX Design</span>
                
                </div>
                {/* title */}
                <div className='absolute -bottom-full left-12
                group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-gradient text-3xl' >Project Title</span>
                </div>
              </div>
            </motion.div>
          </div>
      </div>
    </section>
    )
};

export default Work;
