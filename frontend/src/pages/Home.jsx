import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const Home = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleMode = () => setDarkMode(!darkMode);

  return (
    <div
      className={`min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center relative transition-all duration-500 ${
        darkMode ? 'text-white' : 'text-gray-900'
      }`}
      style={{
        backgroundImage: "url('/assets/images/sltb-bg.jpg')",
        backgroundColor: '#000',
      }}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 z-0 ${
          darkMode ? 'bg-black/60' : 'bg-white/70'
        }`}
      />

      {/* Theme Toggle Button */}
      <button
        onClick={toggleMode}
        className="absolute top-4 right-4 z-10 flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white font-semibold shadow hover:bg-white/30 transition text-sm sm:text-base"
      >
        {darkMode ? <Moon size={18} /> : <Sun size={18} />}
        {darkMode ? 'NIGHT' : 'DAY'}
      </button>

      {/* Main Content */}
      <div className="relative z-10 text-center w-full px-4 sm:px-6">
        {/* Titles */}
        <div className="mb-6 sm:mb-10 drop-shadow-lg max-w-xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 leading-tight">
            Sri Lanka Transport Board
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-1">
            ශ්‍රී ලංකා ගමනා ගමන මණ්ඩලය.
          </h2>
          <h3 className="text-base sm:text-lg md:text-xl font-medium">
            இலங்கை போக்குவரத்து சபை
          </h3>
        </div>

        {/* Language Selector */}
        <div className="mx-auto w-full max-w-xs sm:max-w-sm bg-white/20 backdrop-blur-md rounded-3xl p-5 sm:p-6 space-y-4 shadow-xl">
          {[
            { lang: 'සිංහල', href: '/Sinhala' },
            { lang: 'தமிழ்', href: '/Tamil' },
            { lang: 'English', href: '/English' },
          ].map((btn, idx) => (
            <a
              key={idx}
              href={btn.href}
              className="block w-full py-3 text-base sm:text-lg font-semibold rounded-full bg-white text-black text-center shadow-md hover:bg-gray-200 transition"
            >
              {btn.lang}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
