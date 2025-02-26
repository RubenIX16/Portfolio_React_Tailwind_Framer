import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
    
  return (
    <div className=" border-b border-neutral-900 pb-4">
        <motion.h1 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 0.5 }} className="my-20 text-center text-4xl">Projects</motion.h1>
        <div className="flex flex-wrap justify-center align-middle">
            {PROJECTS.map((project, index) => (
                <div key="index" className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0 , x: -100 }} transition={{ duration: 1 }} className="w-full lg:w-1/4 flex justify-center lg:justify-start">
                        <img src={project.image}  width={250} height={200} alt={project.title}  className="mb-6 rounded align-center justify-center lg:mr-0" />
                    </motion.div>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }}  transition={{duration: 1}} className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 mr-6 ml-3 font-semibold">{project.title}</h6>
                        <p className="mb-4 ml-3 text-neutral-400 text-base">{project.description}</p>
                        {project.technologies.map((tech, index) => (
                            <span key={index} className=" mt-4 ml-3 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">{tech}</span>
                        ))}
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Projects;