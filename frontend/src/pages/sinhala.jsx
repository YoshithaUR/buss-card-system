import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, ArrowLeft } from 'lucide-react';

const Sinhala = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  const themeClasses = darkMode
    ? 'bg-black bg-opacity-60 text-white'
    : 'bg-white bg-opacity-60 text-gray-900';

  return (
    <div
      className={`relative min-h-screen bg-cover bg-center flex flex-col items-center justify-start px-4 sm:px-6 lg:px-12 overflow-x-hidden transition-colors duration-500 ease-in-out ${darkMode ? 'text-white' : 'text-gray-800'}`}
      style={{
        backgroundImage: "url('./gallery/home/Sri Lanka Transport Board (2).jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        animation: 'bg-animation 30s infinite linear',
      }}
    >
      {/* Overlay */}
      <div className={`absolute inset-0 z-0 ${themeClasses}`} />

      {/* Back Button */}
      <button
        onClick={() => window.history.back()}
        className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 p-2 rounded-full bg-white/30 backdrop-blur-md text-white hover:bg-white/40 transition"
        title="Go Back"
      >
        <ArrowLeft size={24} />
      </button>

      {/* Theme Toggle */}
      <button
        onClick={toggleMode}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 p-2 rounded-full bg-white/30 backdrop-blur-md text-white hover:bg-white/40 transition"
        title="Toggle Theme"
      >
        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-5xl flex flex-col items-center text-left py-10"
      >
        {/* Title */}
        <div className="text-center drop-shadow-lg mb-10 px-4">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-wide">
            Online Bus Pass System - Documentation
          </h1>
          <h2 className="text-lg sm:text-2xl md:text-3xl mb-2 font-medium">
            ශ්‍රී ලංකා ගමනා ගමන මණ්ඩලය - ලියාපදිංචි කිරීම සහ ගමනා ගමන පද්ධතිය
          </h2>
        </div>

        {/* Sections */}
        <div className="space-y-8 w-full text-base sm:text-lg px-4">
          {/* Section 1 */}
          <div className="bg-white/20 backdrop-blur-md rounded-lg p-5 sm:p-6 shadow-md">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center sm:text-left">1. පද්ධතියේ විස්තරය</h3>
            <p className="leading-relaxed text-justify">
              මෙම පද්ධතියේ ප්‍රධාන අරමුණ වන්නේ බස් ගමන සඳහා පසස් ලබා ගැනීම සහ එම
              පසස් ක්‍රියාකාරීත්වය සරල සහ පහසු ක්‍රමයකින් පරිශීලකයන්ට ලබා දීමයි.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-white/20 backdrop-blur-md rounded-lg p-5 sm:p-6 shadow-md">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center sm:text-left">2. පරිශීලක ලියාපදිංචි කිරීම</h3>
            <p className="leading-relaxed text-justify">
              පරිශීලකයන්ට ලියාපදිංචි වීමේදී ඔවුන්ගේ නම, විද්‍යුත් ලිපිනය, 
              දුරකථන අංකය සහ අදාළ බස් මාර්ග තෝරා ගැනීමේ ක්‍රමවේදය මත පදනම්ව
              පසස් ලබා ගැනීමට හැකියාව ඇත.
            </p>
          </div>

          {/* Section 3 */}
          <div className="bg-white/20 backdrop-blur-md rounded-lg p-5 sm:p-6 shadow-md">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center sm:text-left">3. පද්ධතියේ විශේෂාංග</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>සංවේදී සහ පහසු අතුරුමුහුණත</li>
              <li>ලියාපදිංචි කිරීම සහ බස් මාර්ග තෝරා ගැනීම</li>
              <li>සාර්ථක ගමනේ පසුබැසීම සහ පසස් වල කාර්ය සාධනය</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="bg-white/20 backdrop-blur-md rounded-lg p-5 sm:p-6 shadow-md">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center sm:text-left">4. ඉදිරියට ක්‍රියාමාර්ග</h3>
            <p className="leading-relaxed text-justify">
              ඉදිරියේදී, මෙම පද්ධතිය වැඩිදියුණු කිරීමේ සහාය ඇතිව, පරිශීලක අත්දැකීම
              වැඩි දියුණු කිරීම සඳහා විශේෂාංග කිහිපයක් එක් කිරීමට අපේක්ෂා කරයි.
            </p>
          </div>
        </div>

        {/* Registration Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 flex justify-center w-full px-4"
        >
          <a
            href="/sinhalaReg"
            className={`inline-block py-2 px-6 sm:py-3 sm:px-8 rounded-full shadow-md hover:scale-105 transition-transform duration-300 font-semibold text-sm sm:text-lg
              ${darkMode 
                ? 'bg-white text-black hover:bg-gray-200' 
                : 'bg-black text-white hover:bg-gray-800'}`}
          >
            ලියාපදිංචි වන්න
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Sinhala;
