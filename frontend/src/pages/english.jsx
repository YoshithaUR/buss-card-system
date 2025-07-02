import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, ArrowLeft } from 'lucide-react';

const English = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleMode = () => setDarkMode(!darkMode);

  const themeClasses = darkMode
    ? 'bg-black bg-opacity-60 text-white'
    : 'bg-white bg-opacity-60 text-gray-900';

  return (
    <div
      className={`relative min-h-screen flex flex-col items-center justify-start px-3 sm:px-6 md:px-10 transition-colors duration-500 ease-in-out ${
        darkMode ? 'text-white' : 'text-gray-800'
      }`}
      style={{
        backgroundImage: "url('./gallery/home/Sri Lanka Transport Board (2).jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      {/* Background Overlay */}
      <div className={`absolute inset-0 z-0 ${themeClasses}`} />

      {/* Back Button */}
      <button
        onClick={() => window.history.back()}
        className="absolute top-3 left-3 z-20 p-2 rounded-full bg-white/30 backdrop-blur-md text-white hover:bg-white/40 transition"
        title="Go Back"
      >
        <ArrowLeft size={18} />
      </button>

      {/* Theme Toggle */}
      <button
        onClick={toggleMode}
        className="absolute top-3 right-3 z-20 p-2 rounded-full bg-white/30 backdrop-blur-md text-white hover:bg-white/40 transition"
        title="Toggle Theme"
      >
        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
      </button>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-4xl flex flex-col items-center text-left"
      >
        {/* Title */}
        <div className="text-center drop-shadow-lg mb-8 sm:mb-12 px-2 sm:px-0">
          <h1 className="text-xl xs:text-2xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-wide leading-tight">
            Online Bus Pass System - Documentation
          </h1>
          <h2 className="text-md xs:text-lg sm:text-2xl md:text-3xl mb-2 font-medium leading-snug">
            Sri Lanka Transport Board - Registration & Travel Process
          </h2>
        </div>

        {/* Documentation Sections */}
        <div className="space-y-5 sm:space-y-8 w-full text-sm xs:text-base sm:text-lg">
          {[
            {
              title: '1. System Overview',
              text: 'The main goal of this system is to provide users with a simple and efficient method to obtain bus passes and manage travel-related services.',
            },
            {
              title: '2. User Registration Process',
              text: 'Users must register by providing their name, email, phone number, and selecting the relevant bus routes to request a pass.',
            },
            {
              title: '3. Features',
              text: (
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>User-friendly and clean interface</li>
                  <li>Registration and bus route selection</li>
                  <li>Efficient travel management and pass tracking</li>
                </ul>
              ),
            },
            {
              title: '4. Future Enhancements',
              text: 'In the future, we plan to enhance the system with additional features to improve user experience and performance.',
            },
          ].map((section, idx) => (
            <div
              key={idx}
              className="bg-white/20 backdrop-blur-md rounded-lg p-4 sm:p-6 shadow-md"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                {section.title}
              </h3>
              <div className="leading-relaxed">{section.text}</div>
            </div>
          ))}
        </div>

        {/* Register Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 flex justify-center w-full"
        >
          <a
            href="/englishReg"
            className={`inline-block py-2.5 px-6 sm:px-8 rounded-full shadow-md hover:scale-105 transition-transform duration-300 font-semibold text-sm sm:text-lg ${
              darkMode
                ? 'bg-white text-black hover:bg-gray-200'
                : 'bg-black text-white hover:bg-gray-800'
            }`}
          >
            Register
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default English;
