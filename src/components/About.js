import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import about from '../assets/about.png'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section bg-green-400" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row
         lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen ml-14">
        
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" h-[360px]"
          >
           <img src={about} alt='' style={{ height: '360px'}}  />
          </motion.div>
         
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About Me</h2>
            <h3 className="h3 mb-4">
             I'm a FrontEnd Developer with 1.5 years of Experience
            </h3>
            <p>
            I'm a keen Frontend Developer skilled in React JS, JavaScript, TypeScript, HTML,
              CSS, Bootstrap, Tailwind Css, FireBase, Git, and GitHub. Great team player with good communication.
              Quick learner, always curious about the latest web tech.
            </p>
          
            <div className="flex gap-x-6 lg:gap-x-16 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient p-4">
                 <CountUp start={0} end={1} duration={3} /> 
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient  p-4">
                <CountUp start={0} end={8} duration={3} />+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Project <br />
                  Completed
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-sm">Contact Me</button>
              <a href="" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
