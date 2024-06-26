import React from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "../assets/avatar.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh]
       flex items-center
      m-16"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg-gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[50px] font-bold leading-[0.8] lg:text-[60px] text-blue-300"
            >
              NIKITA <span>NEGI</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[40px] font-secondary
                font-semibold uppercase lg:leading-[2]"
            >
              <span className="text-blue-300 mr-4">I am a</span>
              <TypeAnimation
                sequence={["Developer", 2000, "Designer", 2000]}
                speed={50}
                className="text-blue-400"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
             className="mb-8 max-w-lg mx-auto lg:mx-0 text-2xl">
              Hi, I'm a FrontEnd Developer  who loves to create visually appealing and interactive,
               user-friendly webpages. <br/>I find peace and enjoyment in blending my artistic skills with
                technology.
            </motion.p>
            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
             className="flex max-w-max gap-x-6 items-center mb-6 mx-auto lg:mx-0">
              <Link 
                to='contact'
                activeClass='active'
                smooth={true}
                spy={true}
                offset={-200}
                className='cursor-pointer'>
                <button className="btn btn-lg text-xl">Contact Me</button>
              </Link>
          
                  <a href="https://github.com/nikita3006">
                    <FaGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/nikitanegi3011/">
                    <FaLinkedinIn />
                  </a>
      
            </motion.div>
         
           
          </div>
       
          <div
          //  variants={fadeIn("down", 0.4)}
          //  initial="hidden"
          //  whileInView={"show"}
          //  viewport={{ once: false, amount: 0.8 }}
           className="hidden lg:flex mb-14 mr-5 flex-1 max-w-[320px] lg:-max-w-[482px]">
            <img src={Image} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
