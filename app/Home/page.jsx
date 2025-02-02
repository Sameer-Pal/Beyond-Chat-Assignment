"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
const Home = () => {
    const router = useRouter(); t
  
    const handleNavigation = (page) => {
      router.push(`/${page}`); 
    };
  
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center h-screen"
      >
        <h1 className="text-3xl font-extrabold text-gray-800 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text p-3 rounded-lg shadow-lg mb-6 transform hover:scale-105 transition-all duration-500">
  Welcome to BeyondChats</h1>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" // Navigate to /register
        >
          Get Started
        </button>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => handleNavigation("setupOrganisation")} // Navigate to /setupOrganisation
        >
          Set Up Organisation
        </button>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => handleNavigation("chatBotIntegration")} // Navigate to /chatBotIntegration
        >
          ChatBot Integration
        </button>
      </motion.div>
    );
  };
  
  export default Home;
  
