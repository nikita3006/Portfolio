import React, { useState } from "react";
import chatgpt from '../assets/certificate/chatgpt.jpg';
import coursera from '../assets/certificate/coursera.jpg';
import htmlCss from '../assets/certificate/htmlCss.jpg';
import javascript from '../assets/certificate/javascript.jpg';
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const certificates = [
  { title: 'React ', image: coursera },
  { title: 'Javscript', image: javascript },
  { title: 'HTML-CSS', image: htmlCss },
  { title: 'Chatgpt', image: chatgpt },
];

const Certificate = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const openModal = (image) => {
    setSelectedCertificate(image);
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
        <div className="flex flex-wrap justify-center">
          {certificates.map((certificate, index) => (
            <motion.div
              key={index}
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              className='group relative overflow-hidden border-2
              border-white/50 rounded-xl lg:m-38  m-4 lg:h-56 lg:w-[400px]'
              onClick={() => openModal(certificate.image)}
            >   
             <div
                className="group-hover:bg-black/50 w-full h-full absolute
                z-40 transition-all duration-300 lg:h-[280px]"
              ></div>   
              <img src={certificate.image} alt={certificate.title} 
                 title={`Certificate - ${certificate.title}`}/>
        
              <div className='absolute -bottom-full lg:left-12
               group-hover:bottom-6 transition-all duration-700 z-50 '>
                <span className='text-gradient lg:text-3xl cursor-pointer text-[20px]'>{certificate.title}</span>
              </div>
              
            </motion.div>
          ))}
        </div>
      </div>
      {selectedCertificate && (
        <Modal image={selectedCertificate} onClose={closeModal} />
      )}
    </section>
  );
};

const Modal = ({ image, onClose }) => {
  return (
    <div className="fixed top-0 left-0 lg:w-[800px] lg:h-[600px] lg:ml-[232px] 
     bg-black bg-opacity-50 flex 
     justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg">
        <img src={image} alt="Certificate" />
        <button className="bg-gray-500 text-white px-4 py-2 rounded mt-4" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Certificate;
