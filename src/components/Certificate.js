import React from "react";
// import { motion } from "framer-motion";
// import { fadeIn } from "../variants";

const certificates = [
  { title: 'React Coursera', link: 'src/assets/certificate/Coursera-Certificate.pdf' },
  { title: 'Javscript', link: 'src/assets/certificate/Javascript-Certificate.pdf' },
  { title: 'HTML-CSS', link: 'src/assets/certificate/HTML-CSS-Certificate.pdf' },
  { title: 'Chatgpt', link: 'src/assets/certificate/ChatGPT-Certificate.pdf' },
];

const Certificate = () => {
  return (
    <section className="section" id="certificate">
      <div className="container mx-auto shadow-2xl rounded-md">
        <div className='flex justify-center items-center'>
          <h2
         
            className="text-[50px] font-bold leading-[0.8] p-2 lg:text-[60px] lg:p-8 text-gradient"
          >
            Certificates
          </h2>
        </div>
        {certificates.map((certificate, index) => (
          <div
            key={index}
        
            className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:m-38 m-14'
          >
            <div className='group-hover:bg-black/50 w-full h-full lg:h-full absolute z-40 transition-all duration-300'></div>
            <iframe
              src={certificate.link}
              title={`Certificate - ${certificate.title}`}
              className="w-full h-full"
            ></iframe>
            <div className='absolute -bottom-full left-12 group-hover:bottom-20 transition-all duration-700 z-50 '>
              <span className='text-gradient text-3xl cursor-pointer'>{certificate.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificate;
