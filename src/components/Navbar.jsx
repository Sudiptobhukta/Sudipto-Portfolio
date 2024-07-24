import React from 'react'
import logo from "../assets/logo.png"
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'
import { IoMoon, IoSunny } from 'react-icons/io5'
import Dbutton from './Dbutton'
import { motion } from 'framer-motion'

const container = ()=>({
   whileHover:{ scale: 1.2 },
      whileTap:{ scale: 0.9 },
      transition:{ type: "spring", stiffness: 400, damping: 17 }
})

function Navbar() {
  return (<nav className=" mb-20 flex items-center justify-between py-2">
  <div className="flex flex-shrink-0 items-center">
  <img className="mx-2 " src={logo} alt="logo"/>
  </div>
  <div className="m-8 flex items-center justify-center gap-4 text-2xl">
  <motion.div
  variants={container()}
  whileHover="whileHover"
  whileTap="whileTap"
  transition="transition"
  ><FaLinkedin/></motion.div>

  <motion.div
  variants={container()}
  whileHover="whileHover"
  whileTap="whileTap"
  transition="transition"><FaGithub/></motion.div>

  <motion.div
   variants={container()}
  whileHover="whileHover"
  whileTap="whileTap"
  transition="transition"><FaSquareXTwitter/></motion.div>

  <motion.div
   variants={container()}
  whileHover="whileHover"
  whileTap="whileTap"
  transition="transition"><FaInstagram/></motion.div>

  </div>
  </nav>
  )
}

export default Navbar
