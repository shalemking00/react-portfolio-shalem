import { RiJavaLine, RiReactjsLine } from "react-icons/ri"
import { SiMongodb } from "react-icons/si"
import { FaNodeJs } from "react-icons/fa"
import { SiSpringboot } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaAws } from "react-icons/fa6";
import { FaAngular } from "react-icons/fa";
import { motion } from "framer-motion"

const iconVar=(duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat: Infinity,
            repeatType: "reverse"
        },
    },

})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 whileInView={{opcaity:1,y:0}} initial={{opcaity:0,y:-100}} transition={{duration:1.5}} className="my-20 text-center text-4xl">Technologies</motion.h1>
        <motion.div  whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}} className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
            variants={iconVar(2.5)}
            initial="initial"
            animate = "animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiJavaLine className="text-7xl text-orange-400"/>
            </motion.div>
            <motion.div variants={iconVar(2.5)}
            initial="initial"
            animate = "animate"  className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiSpringboot className="text-7xl text-green-400"/>
            </motion.div>
            <motion.div variants={iconVar(3)}
            initial="initial"
            animate = "animate"  className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql className="text-7xl text-blue-400"/>
            </motion.div>
            <motion.div variants={iconVar(3.5)}
            initial="initial"
            animate = "animate"  className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-green-400"/>
            </motion.div>
            <motion.div variants={iconVar(4)}
            initial="initial"
            animate = "animate"  className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div variants={iconVar(4.5)}
            initial="initial"
            animate = "animate"  className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaHtml5 className="text-7xl text-orange-400"/>
            </motion.div>
            <motion.div variants={iconVar(5)}
            initial="initial"
            animate = "animate"  className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-7xl text-green-400"/>
            </motion.div>
            <motion.div variants={iconVar(5.5)}
            initial="initial"
            animate = "animate"  className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaAws className="text-7xl text-black-400"/>
            </motion.div>
            <motion.div variants={iconVar(2.5)}
            initial="initial"
            animate = "animate"  className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaAngular className="text-7xl text-red-400"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies