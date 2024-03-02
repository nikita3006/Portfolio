import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/Img1.jpg";
import Img2 from "../assets/Img2.jpg";
import Img5 from '../assets/Img5.jpg'
import { Link } from "react-scroll";

const imgPath = [Img1, Img2];
const projectData = [
  {
    title: "DelightDine",
    viewProject: "View Project 1",
    projectLink: "https://delight-dine.vercel.app/",
    viewProjectLink: "https://github.com/nikita3006/DelightDine.git",
  },
  {
    title: "Expense-Tracker",
    viewProject: "View Project 2",
    projectLink: "https://expense-tracker-amber-two-44.vercel.app/",
    viewProjectLink: "https://github.com/nikita3006/EXPENSE-TRACKER.git",
  },
];

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10  ">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-8 mb-10 lg:mb-0"
          >
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                Work
              </h2>
              <p className="max-w-sm mb-6">
                I began my journey in this field two years ago and have since
                undergone extensive learning, yet I acknowledge there is still
                much more to explore.
              </p>

              <Link
                to="projects"
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-200}
                className="cursor-pointer"
              >
                <button className="btn btn-lg">View all projects</button>
              </Link>
            </div>

            <div
              className="group relative overflow-hidden border-2 
              border-white/50 rounded-xl "
            >
              <div
                className="group-hover:bg-black/50 w-full h-full absolute
                z-40 transition-all duration-300 lg:h-[280px]"
              ></div>
              <img
                className="group-hover:scale-125 transition-all duration-500 "
                src={Img5}
                alt=""
              />
              <div
                className="absolute -bottom-full left-12
                group-hover:bottom-20 transition-all duration-500 z-50"
              >
               <a href="" class="text-gradient cursor-pointer">
                  View Project
              </a>
              </div>
              <div
                className="absolute -bottom-full left-12
                group-hover:bottom-10 transition-all duration-700 z-50"
              >
                <a href='https://github.com/nikita3006/ParallaxWebpage.git' className="text-gradient text-3xl cursor-pointer">
                 Parallax Webpage
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-[135px]"
          >
            <div>
              {projectData.map((project, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden border-2 mb-[135px] border-white/50 rounded-xl"
                >
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="group-hover:bg-black/50 w-full h-full lg:h-full absolute z-40 transition-all duration-300 lg:y-10"></div>
                    <img
                      className="group-hover:scale-125 transition-all duration-500"
                      src={imgPath[index]}
                      alt=""
                    />
                    <div className="absolute -bottom-full left-12 group-hover:bottom-20
                     transition-all duration-500 z-50">
                      <a href={projectData[index].projectLink} className="text-gradient cursor-pointer">
                        {project.viewProject}
                      </a>
                    </div>
                    <div className="absolute -bottom-full left-12 group-hover:bottom-10 transition-all duration-700 z-50">
                      <a href={projectData[index].viewProjectLink}
                       className="text-gradient cursor-pointer text-3xl">
                        {project.title}
                      </a>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
