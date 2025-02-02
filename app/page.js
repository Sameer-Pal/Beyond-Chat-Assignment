"use client";

import React from "react";
import { motion } from "framer-motion";

const Button = ({ text, href, delay }) => (
  <motion.a
    href={href}
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
    className="w-full text-center px-6 py-3 text-white bg-[#35DE57] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
  >
    {text}
  </motion.a>
);


export default function Home() {

  return (
    <div className="relative flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-black p-4">
    <motion.div
    className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1),_rgba(0,0,0,0.9))] opacity-50 hover:scale-110"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    ></motion.div>

    <motion.div
      className="relative z-10 flex flex-col items-center justify-center w-full max-w-md p-8 bg-white bg-opacity-10 border border-gray-300 rounded-xl shadow-2xl backdrop-blur-lg hover:scale-110"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >

      
<motion.h1
  className="text-4xl font-bold font-extrabold text-gray-800 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text p-3 rounded-lg shadow-lg mb-6 transform hover:scale-105 transition-all duration-500 hover:scale-110"
  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }} // Grey shadow
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.2 }}
>
  Welcome to <span className="text-[#35DE57]">BeyondChats</span>
</motion.h1>


      <motion.div className="flex flex-col gap-4 w-full">
        <Button text="Get Started" href="Register" delay={0.3} />
        <Button text="Set Up Organisation" href="SetupOrganisation" delay={0.5} />
        <Button text="ChatBot Integration" href="ChatBotIntegration" delay={0.7} />
      </motion.div>
    </motion.div>
  </div>
  );
}
