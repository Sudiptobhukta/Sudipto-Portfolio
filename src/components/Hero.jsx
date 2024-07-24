import React from 'react'
import { HERO_CONTENT } from '../constants';
import bust from "../assets/bust.png"
import { motion } from "framer-motion"

const container= (delay)=>({
  hidden:{x:-100, opacity: 0},
  visible: { x:0,
   opacity: 1,
  transition:{duration: 0.5, delay:delay}}

})

function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-3.5">
      <div className="flex flex-wrap">
      <div className="w-full lg:w-1/2">
            <div className=" flex flex-col items-center lg:items-start">
            <motion.h1 
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-6 text-6xl font-mono tracking-tight lg:mt-16 lg:text-6xl">Sudipto Bhukta</motion.h1>
            <motion.span
             variants={container(0.5)}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">Full Stack Developer</motion.span>
            <motion.p 
            variants={container(1)}
            initial="hidden"
            animate="visible" className="my-2 max-w-xl py-6 font-mono tracking-tighter">{HERO_CONTENT}</motion.p>
            </div>
      </div>
      <div  className="w-full lg:w-1/3 lg:motion.p-8">
        <motion.div 
         initial={{x:100, opacity:0}} 
          animate= {{x:0, opacity:1}}
           transition={{duration:1,delay:1.2}}
        className="flex justify-center">
            <motion.img 
             whileHover={{ scale: [null, 1.5, 1.2] }}
              transition={{ duration: 0.3 }}     
            src={bust} alt="Sudipto" />
            </motion.div>
      </div>
      </div>
    </div>
  );
}

export default Hero
