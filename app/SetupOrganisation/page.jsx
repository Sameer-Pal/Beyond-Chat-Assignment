"use client"
import React, { useState, useEffect } from "react";

// import SetupOrganisation from "../components/SetupOrganisation/SetupOrganisation";
import { motion } from "framer-motion";

export default function SetupOrganisation() {


  const [companyName, setCompanyName] = useState("");
  const [websiteURL, setWebsiteURL] = useState("");
  const [description, setDescription] = useState("");
  const [pages, setPages] = useState([
    { url: "https://en.wikipedia.org/wiki/React_(software)", status: "Scraped", chunks: ["Welcome text", "Services list"] },
    { url: "https://example.com/about", status: "Pending", chunks: [] },
    { url: "https://example.com/contact", status: "Scraped", chunks: ["Email", "Phone number"] },
  ]);
  const [selectedPage, setSelectedPage] = useState(null);

  const handleFetchMetaDescription = async () => {
    // Mock fetching meta description
    setDescription("This is a sample meta description fetched from the website.");
  };

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="p-6 max-w-2xl mx-auto bg-gray-900 justify-center bg-opacity-60 backdrop-blur-lg rounded-lg shadow-lg"
  >
<div className="flex items-center justify-center h-full">
  <h2 className="text-3xl font-extrabold text-gray-800 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text p-3 rounded-lg shadow-lg mb-6 transform hover:scale-105 transition-all duration-500">
    Setup Organisation
  </h2>
</div>

    <input
      type="text"
      placeholder="Company Name"
      value={companyName}
      onChange={(e) => setCompanyName(e.target.value)}
      className="p-3 border border-gray-600 rounded w-full mb-4 text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#35DE57] transition-all"
    />

    <input
      type="text"
      placeholder="Company Website URL"
      value={websiteURL}
      onChange={(e) => setWebsiteURL(e.target.value)}
      className="p-3 border border-gray-600 rounded w-full mb-4 text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#35DE57] transition-all"
    />
<div className="flex justify-center">
  <button
    onClick={handleFetchMetaDescription}
    className="bg-[#35DE57] text-white mt-4 px-16 py-3 border-2 bg-[#35DE57] text-white rounded-lg shadow-lg hover:border-[#35DE57] hover:bg-[#1A1A1A] hover:text-[#35DE57] transition-all duration-300 transform hover:scale-110 mb-4 
      sm:px-8 sm:py-2 sm:text-sm 
      md:px-10 md:py-2 md:text-base"
  >
    Fetch Meta Description
  </button>
</div>

    <textarea
      placeholder="Company Description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      className="p-3 border border-gray-600 rounded w-full mb-4 text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#35DE57] transition-all"
    />

    <h3 className="text-xl font-semibold text-white mb-2">Detected Webpages</h3>
    <ul className="border rounded p-2 bg-gray-800">
      {pages.map((page, index) => (
        <motion.li
          key={index}
          className="p-2 border-b flex justify-between cursor-pointer hover:bg-gray-700 transition-all duration-200"
          onClick={() => setSelectedPage(page)}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-white">{page.url}</span>
          <span className={page.status === "Scraped" ? "text-green-500" : "text-yellow-500"}>
            {page.status}
          </span>
        </motion.li>
      ))}
    </ul>

    {selectedPage && (
      <div className="mt-4 p-4 border rounded bg-gray-800 text-white">
        <h3 className="text-lg font-semibold">Scraped Data Chunks</h3>
        {selectedPage.chunks.length > 0 ? (
          <ul className="list-disc ml-5">
            {selectedPage.chunks.map((chunk, idx) => (
              <li key={idx}>{chunk}</li>
            ))}
          </ul>
        ) : (
          <p>No data chunks available.</p>
        )}
      </div>
    )}
  </motion.div>
  );
};
