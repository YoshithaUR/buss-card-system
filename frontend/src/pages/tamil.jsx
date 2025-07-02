import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, ArrowLeft } from 'lucide-react';

const Tamil = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  const themeClasses = darkMode
    ? 'bg-black bg-opacity-60 text-white'
    : 'bg-white bg-opacity-60 text-gray-900';

  return (
    <div
      className={`relative min-h-screen flex flex-col items-center justify-start transition-colors duration-500 ease-in-out font-sans ${darkMode ? 'text-white' : 'text-gray-800'}`}
      style={{
        backgroundImage: "url('./gallery/home/Sri Lanka Transport Board (2).jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className={`absolute inset-0 z-0 ${themeClasses} backdrop-blur-sm`} />

      {/* Back Button */}
      <button
        onClick={() => window.history.back()}
        className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition"
        title="Go Back"
      >
        <ArrowLeft size={20} />
      </button>

      {/* Theme Toggle */}
      <button
        onClick={toggleMode}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition"
        title="Toggle Theme"
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-6xl px-4 sm:px-8 pt-24 flex flex-col items-center text-left"
      >
        {/* Title */}
        <div className="text-center drop-shadow-lg mb-10 px-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 tracking-wide leading-tight">
            Online Bus Pass System - Documentation
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl font-medium leading-snug">
            இலங்கை பேருந்து பயணம் குழு - பதிவு மற்றும் பயண முறைமை
          </h2>
        </div>

        {/* Sections */}
        <div className="space-y-6 w-full text-sm sm:text-base md:text-lg">
          {[
            {
              title: '1. அமைப்பு பற்றிய விவரங்கள்',
              content:
                'இந்த அமைப்பின் முக்கிய நோக்கம் பேருந்து பயணத்துக்கான கடவுச்சீட்டுகளை பெறுவதும், அந்த கடவுச்சீட்டுகளின் செயல்பாட்டை எளிமையான மற்றும் சாதாரண முறையில் பயனருக்கு வழங்குவதும் ஆகும்.',
            },
            {
              title: '2. பயனர் பதிவு செயல்முறை',
              content:
                'பயனர்கள் பதிவு செய்வதற்குள், அவர்களின் பெயர், மின்னஞ்சல், தொலைபேசி எண் மற்றும் சம்பந்தப்பட்ட பேருந்து வழிகளைக் கொண்டு கடவுச்சீட்டு பெறுவதற்கான செயல்முறை பற்றி தேர்வு செய்யலாம்.',
            },
            {
              title: '3. அமைப்பின் அம்சங்கள்',
              content: (
                <ul className="list-disc ml-5 space-y-1">
                  <li>தெரியுமான மற்றும் எளிதான பயனர் இடைமுகம்</li>
                  <li>பதிவு மற்றும் பேருந்து வழிகளை தேர்வு செய்வது</li>
                  <li>வெற்றிகரமான பயணம் மற்றும் கடவுச்சீட்டுகளின் செயல்திறன்</li>
                </ul>
              ),
            },
            {
              title: '4. எதிர்கால மேம்பாடுகள்',
              content:
                'எதிர்காலத்தில், இந்த அமைப்பை மேலும் மேம்படுத்துவதற்காக, பயனர் அனுபவத்தை மேம்படுத்த பல அம்சங்களை சேர்க்க விரும்புகிறோம்.',
            },
          ].map((section, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-lg p-5 sm:p-6 shadow-md max-w-3xl mx-auto"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{section.title}</h3>
              <div className="leading-relaxed">{section.content}</div>
            </div>
          ))}
        </div>

        {/* Final Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 flex justify-center w-full"
        >
          <a
            href="/tamilReg"
            className={`inline-block py-3 px-8 rounded-full shadow-md hover:scale-105 transition-transform duration-300 font-semibold text-lg
              ${darkMode 
                ? 'bg-white text-black hover:bg-gray-200' 
                : 'bg-black text-white hover:bg-gray-800'}`}
          >
            பதிவு செய்யவும்
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Tamil;
