import React, { useState } from "react";
import coursera from '../assets/certificate/coursera.jpg';
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import {Link} from 'react-router-dom'


const Certificate = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const openModal = () => {
    setSelectedCertificate(coursera);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <section className='section' id='certificate'>
      <div className="container mx-auto shadow-2xl rounded-md ">
        <motion.div
         variants={fadeIn("up", 0.2)}
         initial="hidden"
         whileInView={"show"}
         className='flex justify-center items-center'>
          <h2
            className="text-[50px] font-bold leading-[0.8] p-2 lg:text-[60px] lg:p-8 text-gradient"
          >
            Certificates
          </h2>
        </motion.div>
      
         <div className="flex justify-center gap-20">
         <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            className='group relative overflow-hidden border-2
            border-white/50 rounded-xl lg:m-38  m-4 lg:h-56 lg:w-[400px]'
            onClick={openModal}
          >   
           <div
              className="group-hover:bg-black/50 w-full h-full absolute
              z-40 transition-all duration-300 lg:h-[280px]"
            ></div>   
            <img src={coursera} alt="React Certificate" 
               title="Certificate - React"/>
      
            <div className='absolute -bottom-full lg:left-12
             group-hover:bottom-6 transition-all duration-700 z-50 '>
              <span className='text-gradient lg:text-3xl cursor-pointer text-[20px]'>React</span>
            </div>
           
          </motion.div>
     
     
     <motion.div className="mt-20"
       variants={fadeIn("left", 0.2)}
       initial="hidden"
       whileInView={"show"}
       onClick={openModal}
     >
     <Link 
                    to='/certificate'
                    activeClass='active'
                    smooth={true}
                    spy={true}
                    offset={-200}
                    className='cursor-pointer'>
                    <button className="btn btn-lg lg:text-2xl text-xl ">See My Certificate</button>
       </Link>
     </motion.div>
     
      
         </div>
      
      </div>
      {selectedCertificate && (
        <Modal image={selectedCertificate} onClose={closeModal}/>
      )}
    </section>
  );
};

const Modal = ({ image, onClose }) => {
  return (
    <div className="fixed bottom-0 left-0 lg:w-[650px] lg:h-[600px] lg:ml-[500px] 
     bg-opacity-50 flex 
     justify-center items-center z-50 w-[200px] h-[50px] ml-[60px] lg:top-0 lg:mt-[300px]">
      <div className="bg-white p-8 rounded-lg mb-[525px]">
        <img src={image} alt="Certificate" />
        <button className="bg-gray-500 text-white px-4 py-2 rounded mt-4" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Certificate;
