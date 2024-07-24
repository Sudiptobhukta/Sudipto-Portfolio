import React from 'react'
import sitting from "../assets/sitting.png"
import face from '../assets/face.png'
import { ABOUT_TEXT } from '../constants'
import { motion } from "framer-motion"

const container= (delay)=>({
  hidden:{x:-100, opacity: 0},
  visible: { x:0,
   opacity: 1,
  transition:{duration: 0.5, delay:delay}}

})

function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1 
      initial={{x:-100, opacity:0}}
      animate={{x:0, opacity:1}}
      transition={{duration:1.2,delay:1}}
      className="mb-20 text-center text-4xl font-mono">About 
      <span className="text-neutral-500"> Me</span></motion.h1>
      <div className="flex flex-wrap">
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:0.5}}
        className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
          <img src={sitting} alt="" /></div>
        </motion.div>
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:0.5}}
        className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
          <p className="my-2 maxw-w-xl py-6 font-mono">{ABOUT_TEXT}</p>
          </div>
          </motion.div>
      </div>
     
    </div>
  )
}

export default About
