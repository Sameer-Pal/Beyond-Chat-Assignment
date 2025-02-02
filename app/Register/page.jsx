"use client";
import React from "react";
// import Register from "../components/Register/Register";
import { motion } from "framer-motion";

const Register = () => (
    <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="flex flex-col items-center justify-center min-h-screen bg-[#1A1A1A] text-white p-6"
  >
   <h2 className="text-3xl font-extrabold text-gray-800 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text p-3 rounded-lg shadow-lg mb-6 transform hover:scale-105 transition-all duration-500">
   Register</h2>

    <motion.input
      type="text"
      placeholder="Name"
      className="p-4 border-2 border-gray-300 rounded-md bg-transparent text-white mb-4 w-80 focus:outline-none focus:ring-2 focus:ring-[#35DE57] transition-all"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    />
    <motion.input
      type="email"
      placeholder="Email"
      className="p-4 border-2 border-gray-300 rounded-md bg-transparent text-white mb-4 w-80 focus:outline-none focus:ring-2 focus:ring-[#35DE57] transition-all"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    />
    <motion.input
      type="password"
      placeholder="Password"
      className="p-4 border-2 border-gray-300 rounded-md bg-transparent text-white mb-6 w-80 focus:outline-none focus:ring-2 focus:ring-[#35DE57] transition-all"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.4 }}
    />

    <motion.button
className="mt-4 px-16 py-3 border-2 bg-[#35DE57] text-white rounded-lg shadow-lg hover:border-[#35DE57] hover:bg-[#1A1A1A] hover:text-[#35DE57] transition-all duration-300 transform hover:scale-110"
initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      Sign Up
    </motion.button>

    <motion.button
className="mt-2 px-4 py-3 border-2 border-[#35DE57] text-[#35DE57] rounded-lg shadow-lg hover:border-[#35DE57] hover:bg-[#35DE57] hover:text-white transition-all duration-300 transform hover:scale-110"
initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      Continue with Google
    </motion.button>
  </motion.div>
);

export default Register;
