import React from 'react';
import { motion } from 'framer-motion';
import {fadeIn} from '../variants';


const Contact = () => {
  return(
    <section className='section' id='contact'>
     <div className='container mx-auto '>
      <div className='flex flex-col lg:flex-row'>
        {/* text */}
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 flex justify-start items-center'>
          <div>
            <h4 className='text-xl uppercase text-accent font-medium mb-0
            tracking-wide'>Get in Touch</h4>
            <h2 className='text-[45px] lg:text-[70px] leading-none mb-12'>Let's work <br/> together!</h2>
          </div>
        </motion.div>
        {/* form */}
        <motion.form
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 border rounded-2xl flex flex-col gap-y-4
          pb-10 p-6 items-center'
        >
          <input
          className='bg-transparent border-b py-3 outline-none w-full
          placeholder:text-white focus:border-accent transition-all'
          type='text'
          placeholder='Your Email Id'
          />
           <input
          className='bg-transparent border-b py-3 outline-none w-full
          placeholder:text-white focus:border-accent transition-all'
          type='text'
          placeholder='Your Name'
          />
          <textarea className='bg-transparent border-b py-12 outline-none w-full
          placeholder:text-white focus:border-accent transition-all resize-none mb-12'
          placeholder='Your Messsage'></textarea>
          <button className='btn btn-lg'>Send Messsage</button>
        </motion.form>
      </div>
     </div>
    </section>
  );
};

export default Contact;
