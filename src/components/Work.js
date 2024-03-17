import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";
import Img1 from "../assets/Img1.jpg";
import Img2 from '../assets/Img2.jpg';
import { ProjectData } from "../constant/ProjectData";

const imgPath = [Img1, Img2];


const projectData = ProjectData.slice(0, 2);

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div>
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex justify-center items-center"
          >
            <h2 className="h2 leading-tight text-gradient">
              My Latest Work
            </h2>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex lg:flex-row justify-around items-center flex-col"
          >
            <p className="lg:w-[500px] mb-10 max-w-lg lg:text-2xl text-xl font-secondary">
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
              <button className="btn btn-lg lg:text-2xl text-xl">
                View all projects
              </button>
            </Link>
          </motion.div>
        </div>

        <div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="flex lg:flex-row justify-evenly items-center flex-col gap-y-6 mt-8">
              {projectData.map((project, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[250px] lg:w-[400px] w-[230px] h-[150px]"
                >
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="group-hover:bg-black/50 absolute z-40 transition-all duration-300 "></div>
                    <img
                      className="group-hover:scale-125 transition-all duration-500"
                      src={imgPath[index]}
                      alt={project.title}
                      style={{ height: '100%' }}
                    />
                    <div className="absolute -bottom-full left-12 group-hover:bottom-8 transition-all duration-500 z-50">
                      <a href={project.projectLink} className="text-gradient text-[10px] cursor-pointer">
                        {project.viewProject}
                      </a>
                    </div>
                    <div className="absolute -bottom-full left-12 group-hover:bottom-2 transition-all duration-700 z-50">
                      <a href={project.viewProjectLink} className="text-gradient cursor-pointer lg:text-3xl text-[20px]">
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
