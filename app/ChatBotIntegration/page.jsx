"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ChatbotIntegration = () => {
  const [integrationStatus, setIntegrationStatus] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleTestChatbot = () => {
    if (isClient) {
      window.open("https://example.com", "_blank");
    }
  };

  const handleIntegrateChatbot = () => {
    if (isClient) {
      alert("Choose between copying code or sending mail to the developer.");
    }
  };

  const handleTestIntegration = () => {
    const success = Math.random() > 0.5;
    setIntegrationStatus(success ? "success" : "failure");
  };

  const handleSocialShare = () => {
    if (isClient) {
      alert("Sharing on social media...");
    }
  };

  return (
    <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#0A0A0A] to-[#2F2F2F] p-6"
  >
    {/* 🔹 Top Notification Bar */}
    <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-yellow-400 to-orange-500 p-2 text-center text-black font-medium">
      Chatbot not working as intended?{" "}
      <a
        href="mailto:your-email@example.com?subject=Feedback&body=Your feedback here"
        className="underline text-blue-900 hover:text-blue-700"
      >
        Share Feedback
      </a>
    </div>
  
    {/* 🔹 Heading */}
    <h2 className="text-3xl font-extrabold text-gray-800 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text p-3 rounded-lg shadow-lg mb-6 transform hover:scale-105 transition-all duration-500">
      Chatbot Integration & Testing
    </h2>
  
    {/* 🔹 Buttons (Before Integration) */}
    {integrationStatus === null && (
      <div className="flex flex-col gap-6">
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          onClick={handleTestChatbot}
          className="px-6 py-3 bg-[#35DE57] text-white font-medium rounded-lg shadow-xl hover:bg-[#1A1A1A] hover:text-[#35DE57] hover:border-[#35DE57] transition-all duration-300 transform hover:scale-110 ease-in-out"
        >
          Test Chatbot
        </motion.button>
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          onClick={handleIntegrateChatbot}
          className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-medium rounded-lg shadow-xl hover:bg-[#1A1A1A] hover:text-[#35DE57] hover:border-[#35DE57] transition-all duration-300 transform hover:scale-110 ease-in-out"
        >
          Integrate on Your Website
        </motion.button>
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          onClick={handleTestIntegration}
          className="px-6 py-3 bg-[#35DE57] text-white font-medium rounded-lg shadow-xl hover:bg-[#1A1A1A] hover:text-[#35DE57] hover:border-[#35DE57] transition-all duration-300 transform hover:scale-110 ease-in-out"
        >
          Test Integration
        </motion.button>
      </div>
    )}
  
    {/* 🔹 Success Message */}
    {integrationStatus === "success" && (
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mt-8 p-6 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg shadow-xl text-center max-w-md"
      >
        <h3 className="text-lg font-semibold tracking-wider">Integration Successful! 🎉</h3>
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          onClick={() => alert("Redirecting to Admin Panel")}
          className="mt-4 px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-all duration-300 transform hover:scale-110 ease-in-out"
        >
          Explore Admin Panel
        </motion.button>
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          onClick={() => alert("Starting Chatbot...")}
          className="mt-4 px-6 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-lg hover:bg-yellow-700 transition-all duration-300 transform hover:scale-110 ease-in-out"
        >
          Start Talking to Your Chatbot
        </motion.button>
        <div className="mt-4">
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            onClick={handleSocialShare}
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:bg-blue-800 transition-all duration-300 transform hover:scale-110 ease-in-out"
          >
            Share on Social Media
          </motion.button>
        </div>
      </motion.div>
    )}
  
    {/* 🔹 Failure Message */}
    {integrationStatus === "failure" && (
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mt-8 p-6 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-lg shadow-xl text-center max-w-md"
      >
        <h3 className="text-lg font-semibold tracking-wider">
          Integration Failed! 😞 Please try again or contact support.
        </h3>
      </motion.div>
    )}
  </motion.div>
  
  
  );
};

export default ChatbotIntegration;
