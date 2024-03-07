import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import emailjs from 'emailjs-com';

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    emailjs.send('service_l34pqyp', 'template_c0cc9k2', formData, 'kX_YyJCQot2-l0EjT')
      .then((response) => {
        console.log('Email sent successfully:', response);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  }
  
  return(
    <section className='section' id='contact'>
      <div className='container mx-auto '>
        <div className='flex flex-col lg:flex-row'>
    
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center'
          >
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-0
              tracking-wide'>Get in Touch</h4>
              <h2 className='text-[45px] lg:text-[70px] leading-none mb-12'>Let's work <br/> together!</h2>
            </div>
          </motion.div>
        
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 border rounded-2xl flex flex-col gap-y-4
            pb-10 p-4 items-center w-[280px]'
            onSubmit={sendEmail}
          >
          
            <input
              className='bg-transparent border-b py-3 outline-none w-full
              placeholder:text-white focus:border-accent transition-all'
              type='text'
              placeholder='Your Email Id'
              id='email'
              required
            />
             
            <input
              className='bg-transparent border-b py-3 outline-none w-full
              placeholder:text-white focus:border-accent transition-all'
              type='text'
              placeholder='Your Name'
              id='name'
              required
            />
            <textarea
              className='bg-transparent border-b py-12 outline-none w-full
              placeholder:text-white focus:border-accent transition-all resize-none mb-12'
              placeholder='Your Message'
              id='message'
              required
            ></textarea>
            <button className='btn btn-lg' type="submit">Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
