import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { BsArrowUpRight } from "react-icons/bs";


const experiences = [
  {
    name: "Restdali",
    description:
      "Worked on a React restaurant site, adding multilingual support,improving navigation, and using Zod for data validation",
    link: "Learn More",
  },
  {
    name: "Helpy Moto",
    description:
      "Created a user info page for better interactivity and data handling. Built an FAQs section to improve support.",
    link: "Learn More",
  },
  {
    name: "ONE Simulation",
    description:
      "Developed a responsive landing page for a company. Utilized HTML, CSS, and JavaScript to ensure cross-device compatibility and user-friendly design",
    link: "Learn More",
  },
];

const Experience = () => {
  return (
    <section className="section " id="services">
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
              Frontend Developer skilled in
              <br /> React JS, JavaScript, and web design tools
            </h3>
            <button className="btn btn-lg">See my Work</button>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {experiences.map((experience, index) => {
                const { name, description, link } = experience;
                return (
                  <div
                    key={index}
                    className="border-b border-white/20
                 h-[146px] mb-[38px] flex"
                  >
                    <div>
                      <h4
                        className="text-[20px] tracking-wider font-primary
                    font-semibold mb-6"
                      >
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href=""
                        className="btn w-9 h-9 mb-[22px]
                      flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="" className="text-gradient text-sm">
                        {link}
                      </a>
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
