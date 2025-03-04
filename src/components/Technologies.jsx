import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiGrafana } from "react-icons/si";
import { animate, motion } from 'framer-motion';


const iconVariants = (duration) => ({
    initial:{y: -10},
    animate:{
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",

        },
    },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24 ">
        <motion.h1 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition= {{duration: 1.5 }} className="my-20 text-center text-4xl">Technologies</motion.h1>
            <motion.div whileInView={{opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{duration: 1.5 }} className="flex flex-wrap item-center justify-center gap-4">
                <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiTailwindCssFill className="text-7xl text-blue-400" />
                </motion.div>
                <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiMsqlServer className="text-7xl text-red-500" />
                </motion.div>
                <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaHtml5 className="text-7xl text-red-700" />
                </motion.div>
                <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className="text-7xl text-green-500" />
                </motion.div>
                <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaPython className="text-7xl text-sky-700" />
                </motion.div>
                <motion.div variants={iconVariants(7)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiGrafana className="text-7xl text-orange-400" />
                </motion.div>
            </motion.div>
    </div>
  );
};

export default Technologies;