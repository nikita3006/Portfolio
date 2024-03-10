import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import about from '../assets/about.png'
import { Link } from 'react-scroll'
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const About = () => {

  return (
    <section className="section"  id="about">
      <div className="container mx-auto ">
        <div className="flex flex-col gap-y-5 lg:flex-row
         lg:items-center lg:gap-x-20 lg:gap-y-0 ">
        
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }}
            className="lg:flex mb-14 ml-[-45px]  w-[360px] lg:-max-w-[482px]">
          
           <img src={about} alt='' style={{ width:'320px', height: '360px'}}  />
          </motion.div>
         
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="lg:w-[640px] font-secondary flex-1 lg:text-2xl text-xl"
          >
            <h2 className="h2  text-gradient">About Me</h2>
            <p >
            My journey began with a simple <strong>'Hello, World!'</strong> webpage, igniting a love for crafting seamless user experiences.<br/>Specializing in <strong style={{ color: '#AAFF00' }}>React.js</strong>, <strong style={{ color: '#AAFF00' }}>JavaScript</strong>, and <strong style={{ color: '#AAFF00' }}>Jira</strong>, I thrive on building dynamic interfaces that engage users. With expertise in <strong style={{ color: '#AAFF00' }}>Typescript</strong> and <strong style={{ color: '#AAFF00' }}>API Integration</strong>, I leverage modern web technologies to bring concepts to life.
            </p>
            <p className="">
              I'm proficient in utilize tools like <strong style={{ color: '#AAFF00' }}>Context API</strong> and <strong style={{ color: '#AAFF00' }}>Firebase</strong> to create scalable applications. Whether it's designing responsive layouts with <strong style={{ color: '#AAFF00' }}>Bootstrap</strong> and <strong style={{ color: '#AAFF00' }}>HTML</strong>, or embracing <strong style={{ color: '#AAFF00' }}>Agile Methodologies</strong> and managing projects with <strong style={{ color: '#AAFF00' }}>Postman</strong>, I'm dedicated to delivering exceptional results.
            </p>
            <p className="">
              My toolkit also includes version control with <strong style={{ color: '#AAFF00' }}>Git</strong> and <strong style={{ color: '#AAFF00' }}>Github</strong>, along with expertise in styling with <strong style={{ color: '#AAFF00' }}>Bootstrap</strong> and <strong style={{ color: '#AAFF00' }}>Tailwind CSS</strong>. Let's collaborate and create remarkable digital experiences together!
            </p>
          
            <div className="flex gap-x-6 lg:gap-x-16 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-accent p-4">
                 <CountUp start={0} end={1} duration={3} /> 
                </div>
                <div className="font-primary lg:text-2xl text-xl tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-accent  p-4">
                <CountUp start={0} end={8} duration={3} />+
                </div>
                <div className="font-primary lg:text-2xl text-xl tracking-[2px]">
                  Project <br />
                  Completed
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
            <Link 
                to='contact'
                activeClass='active'
                smooth={true}
                spy={true}
                offset={-200}
                className='cursor-pointer'>
                <button className="btn btn-lg lg:text-2xl text-xl">Contact Me</button>
              </Link>
              <a href="https://github.com/nikita3006">
                    <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/nikitanegi3011/">
                <FaLinkedinIn />
              </a>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
