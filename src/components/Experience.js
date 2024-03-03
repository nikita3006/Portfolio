import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { BsArrowUpRight } from "react-icons/bs";
import {Link} from 'react-scroll'



const experiences = [
  {
    name: "Restdali",
    description:
      "Worked on a React restaurant site, adding multilingual support,improving ...",
    link: "Learn More",
  },
  {
    name: "Helpy Moto",
    description:
      "Created a user info page for better interactivity and data handling.Built an ...",
    link: "Learn More",
  },
  {
    name: "ONE Simulation",
    description:
      "Developed a responsive landing page for a company. Utilized HTML, CSS,...",
    link: "Learn More",
  },
];

const Experience = () => {
  return (
    <section className="section " id="experience">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom
          lg:bg-mix-blend-lighten bg-no-repeat bg-contain mb-12 lg:mb-0 "
          >
            <h2 className="h2 text-accent mb-6">What I Did</h2>
            <h3 className="h3 max-w-[455px] mb-16">
            I participated in a training
            <br/> program and completed couple of internships...
            </h3>
             
            <Link 
                to='company'
                activeClass='active'
                smooth={true}
                spy={true}
                offset={-200}
                className='cursor-pointer'>
                <button className="btn btn-sm">See My Experience</button>
              </Link>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 gap-4"
          >
            <div>
              {experiences.map((experience, index) => {
                const { name, description, link } = experience;
                return (
                  <div
                    key={index}
                    className="border-b border-white/20
                   h-[186px] mb-[38px] p-0 flex text-[18px] lg:h-[146px]"
                  >
                    <div>
                      <h4
                        className="text-[30px] text-accent tracking-wider font-primary
                    font-semibold mb-6"
                      >
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight ">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end gap-y-2">
                    <Link 
                      to='company'
                      activeClass='active'
                      smooth={true}
                      spy={true}
                      className='cursor-pointer btn w-9 h-9 mb-[22px]
                      flex justify-center items-center'>
                      <BsArrowUpRight />
                    </Link>

                    <Link 
                      to='company'
                      activeClass='active'
                      smooth={true}
                      spy={true}
                      className="text-gradient text-sm cursor-pointer">
                    {link}
                    </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
