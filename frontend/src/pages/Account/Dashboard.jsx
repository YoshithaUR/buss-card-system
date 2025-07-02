import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import { FaUserCircle } from 'react-icons/fa';
import { IoMdNotificationsOutline } from 'react-icons/io';

const UserAccount = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const travelData = [
    { month: 'Jan', days: 12 },
    { month: 'Feb', days: 18 },
    { month: 'Mar', days: 22 },
    { month: 'Apr', days: 9 },
    { month: 'May', days: 15 },
    { month: 'Jun', days: 20 },
    { month: 'Jul', days: 17 },
  ];

  return (
    <>
      {/* Calendar text color override */}
      <style>{`
        .react-calendar, .react-calendar * {
          color: black !important;
        }
      `}</style>

      <div className="min-h-screen flex font-sans bg-[#1C2038] text-white">
        {/* Sidebar */}
        <aside className="w-64 bg-yellow-400 text-white h-screen flex flex-col sticky top-0">
          <div className="text-2xl font-bold p-6">LOGO</div>
          <nav className="flex-1 overflow-y-auto px-4 pb-4 space-y-3">
            {[
              'Dashboard',
              'Time Table',
              'Ticket Price',
              'Other Details',
              'Setting',
              'Profile',
              'Notifications',
              'Reports',
              'Bus Schedule',
              'Driver Info',
              'Passenger Stats',
              'Routes Map',
              'FAQ',
              'Help',
              'Logout',
            ].map((item, index) => (
              <button
                key={index}
                className="w-full text-left py-2 px-4 rounded hover:bg-white hover:text-yellow-600 transition duration-200"
              >
                {item}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="bg-white shadow p-4 flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              whileHover={{ scale: 1.03 }}
              className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text tracking-wide"
            >
              SRI LANKA TRANSPORT BOARD
            </motion.div>

            {/* React Icons */}
            <div className="flex gap-4 items-center text-blue-600 text-2xl">
              <IoMdNotificationsOutline className="hover:text-indigo-600 cursor-pointer transition duration-200" />
              <FaUserCircle className="hover:text-indigo-600 cursor-pointer transition duration-200" />
            </div>
          </header>

          {/* Content */}
          <main className="p-6 bg-[#1C2038] text-white flex flex-col flex-grow overflow-hidden">
            {/* Top Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <motion.div
                data-aos="fade-up"
                className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg text-center border border-white/30"
              >
                <div className="text-lg font-bold">Total Travel Days</div>
                <div className="text-4xl text-blue-400 mt-2">00</div>
              </motion.div>
              <motion.div
                data-aos="fade-up"
                data-aos-delay="100"
                className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg text-center border border-white/30"
              >
                <div className="text-lg font-bold">Days Without Travel</div>
                <div className="text-4xl text-blue-400 mt-2">00</div>
              </motion.div>
              <motion.div
                data-aos="fade-up"
                data-aos-delay="200"
                className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg flex items-center justify-center text-xl font-bold border border-white/30"
              >
                Kandy ⇄ Gampola
              </motion.div>
            </div>

            {/* Calendar + Bar Chart */}
            <motion.div
              data-aos="zoom-in"
              className="flex flex-col lg:flex-row gap-6 flex-grow overflow-hidden"
            >
              {/* Calendar */}
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg w-full lg:w-1/2 flex flex-col border border-white/30">
                <Calendar
                  onChange={setDate}
                  value={date}
                  className="rounded-lg w-full flex-grow"
                  tileClassName={({ date, view }) => {
                    if (view === 'month') {
                      const isSunday = date.getDay() === 0;
                      const isSaturday = date.getDay() === 6;
                      if (isSunday || isSaturday) {
                        return 'bg-green-200 text-black font-bold';
                      }
                    }
                  }}
                />
                <div className="flex justify-center gap-4 mt-4 text-sm text-white">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-500 rounded"></div> Use
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-500 rounded"></div> Not Use
                  </div>
                </div>
              </div>

              {/* Bar Chart */}
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg w-full lg:w-1/2 flex flex-col border border-white/30">
                <h3 className="text-lg font-bold text-center mb-2 text-white">
                  Monthly Travel
                </h3>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={travelData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                    <XAxis dataKey="month" stroke="#fff" tick={{ fill: '#fff' }} />
                    <YAxis stroke="#fff" tick={{ fill: '#fff' }} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#1C2038', border: '1px solid #fff' }}
                      labelStyle={{ color: '#fff' }}
                      itemStyle={{ color: '#fff' }}
                    />
                    <Bar dataKey="days" fill="#4F46E5" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Buttons */}
            <div className="flex justify-center mt-10">
              <div className="flex flex-col md:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded transition duration-200 text-sm md:text-base">
                  DOWNLOAD YOUR QR CODE
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded transition duration-200 text-sm md:text-base">
                  PAYMENT
                </button>
              </div>
            </div>
          </main>

          {/* Footer */}
          <footer className="bg-gray-900 text-white text-center py-4 mt-6">
            © {new Date().getFullYear()} Sri Lanka Transport Board. All rights reserved.
          </footer>
        </div>
      </div>
    </>
  );
};

export default UserAccount;
