import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaUserGraduate,
  FaMoon,
  FaSun,
  FaArrowLeft,
} from "react-icons/fa";

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const toggleMode = () => setDarkMode(!darkMode);

  const themeClasses = darkMode
    ? "bg-black bg-opacity-70 text-white"
    : "bg-white bg-opacity-80 text-gray-900";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <div
      className={`relative min-h-screen flex items-center justify-center px-4 transition duration-500 ${
        darkMode ? "text-white" : "text-gray-800"
      }`}
      style={{
        backgroundImage: "url('./gallery/home/Sri Lanka Transport Board (2).jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className={`absolute inset-0 z-0 ${themeClasses}`} />

      {/* Theme Toggle */}
      <button
        onClick={toggleMode}
        className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/30 backdrop-blur-md text-white hover:bg-white/40 transition"
        title="Toggle Theme"
      >
        {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
      </button>

      {/* Back Button */}
      <button
        onClick={() => window.history.back()}
        className="absolute top-4 left-4 z-20 p-2 rounded-full bg-white/30 backdrop-blur-md text-white hover:bg-white/40 transition"
        title="Go Back"
      >
        <FaArrowLeft size={18} />
      </button>

      {/* Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-md bg-white/20 backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-2xl"
      >
        <h2 className="text-2xl font-bold text-center mb-6 drop-shadow-lg">
          {isLogin ? "Login to Continue" : "Create an Account"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          {!isLogin && (
            <div className="flex items-center gap-2 bg-white/30 px-4 py-2 rounded-lg">
              <FaUser />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full bg-transparent outline-none placeholder:text-white"
                required
              />
            </div>
          )}

          {/* Email */}
          <div className="flex items-center gap-2 bg-white/30 px-4 py-2 rounded-lg">
            <FaEnvelope />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full bg-transparent outline-none placeholder:text-white"
              required
            />
          </div>

          {/* Password */}
          <div className="flex items-center gap-2 bg-white/30 px-4 py-2 rounded-lg">
            <FaLock />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full bg-transparent outline-none placeholder:text-white"
              required
            />
          </div>

          {/* Confirm Password */}
          {!isLogin && (
            <div className="flex items-center gap-2 bg-white/30 px-4 py-2 rounded-lg">
              <FaLock />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full bg-transparent outline-none placeholder:text-white"
                required
              />
            </div>
          )}

          {/* Role Dropdown */}
          {!isLogin && (
            <div className="flex items-center gap-2 bg-white/30 px-4 py-2 rounded-lg">
              <FaUserGraduate />
              <select
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className="w-full bg-transparent outline-none text-white"
                required
              >
                <option value="" className="text-black">Select Role</option>
                <option value="School Student" className="text-black">School Student</option>
                <option value="University or Technical Student" className="text-black">University or Technical Student</option>
                <option value="Adult" className="text-black">Adult</option>
              </select>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-2.5 rounded-full font-bold transition-all duration-300 ${
              darkMode
                ? "bg-yellow-300 text-black hover:bg-yellow-400"
                : "bg-blue-600 text-white hover:bg-blue-700"
            } hover:scale-105`}
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        {/* Forgot Password */}
        {isLogin && (
          <div className="mt-3 text-right text-sm">
            <button
              onClick={() => alert("Forgot Password flow...")}
              className="text-yellow-200 hover:text-yellow-300 transition"
            >
              forgot Password?
            </button>
          </div>
        )}

        {/* Bottom Switch */}
        <div className="mt-6 border-t border-white/30 pt-4 text-center">
          <span className="text-sm">
            {isLogin ? (
              <>
                Don’t have an account?{" "}
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-blue-300 hover:text-blue-200 transition font-semibold"
                >
                  register
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-blue-300 hover:text-blue-200 transition font-semibold"
                >
                  setIsLogin
                </button>
              </>
            )}
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginRegister;
