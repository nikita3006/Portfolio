import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.send('service_l34pqyp', 'template_c0cc9k2', formData, 'kX_YyJCQot2-l0EjT')
      .then((response) => {
        console.log('Email sent successfully:', response);
        setShowConfirmationModal(true);
        setFormData({ name: '', email: '', message: '' }); 
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  const closeModal = () => {
    setShowConfirmationModal(false);
  };

  return (
    <section className='section' id='contact'>
      <div className='container mx-auto '>
        <div className='flex flex-col lg:flex-row '>

          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center '
          >
            <div>
              <h4 className='text-3xl uppercase  text-gradient font-medium mb-0
              tracking-wide'>Get in Touch</h4>
              <h2 className='text-[45px] lg:text-[70px] leading-none mb-12'>
                Let's work <br /> together!</h2>
            </div>
          </motion.div>

          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 border rounded-2xl flex flex-col gap-y-4
            pb-10 p-4 items-center '
            onSubmit={sendEmail}
          >

            <input
              className='bg-transparent border-b py-3 outline-none w-full
              placeholder:text-white focus:border-accent transition-all font-secondary'
              type='text'
              placeholder='Your Email Id'
              id='email'
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              className='bg-transparent border-b py-3 outline-none w-full
              placeholder:text-white focus:border-accent transition-all font-secondary'
              type='text'
              placeholder='Your Name'
              id='name'
              value={formData.name}
              onChange={handleChange}
              required
            />
            <textarea
              className='bg-transparent border-b py-12 outline-none w-full
              placeholder:text-white focus:border-accent transition-all resize-none mb-12 font-secondary'
              placeholder='Your Message'
              id='message'
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button className='btn btn-lg' type="submit">Send Message</button>
          </motion.form>
        </div>
      </div>

     
      {showConfirmationModal && (
        <div className="modal fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg  text-gradient">
            <p className="text-center text-xl font-bold mb-4">Your email was successfully sent. We'll get back to you!</p>
            <button onClick={closeModal} className="bg-accent text-white py-2 px-4 rounded-md">Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
