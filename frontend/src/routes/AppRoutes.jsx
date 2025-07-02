// AppRoutes.jsx

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Page Components
import Home from "../pages/Home";
import Tamil from "../pages/tamil";
import Sinhala from "../pages/sinhala";
import English from "../pages/english";
import SinhalaReg from "../pages/Regester Forms/sinhalaReg";
import EnglishReg from "../pages/Regester Forms/englishReg";
import TamilReg from "../pages/Regester Forms/tamilReg";
import Dashboard from "../pages/Account/Dashboard";
// import Sidebar from "../pages/Account/Sidebar"; // Only keep if Sidebar is to be shown standalone

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home & Languages */}
        <Route path="/" element={<Home />} />
        <Route path="/sinhala" element={<Sinhala />} />
        <Route path="/tamil" element={<Tamil />} />
        <Route path="/english" element={<English />} />

        {/* Registration Forms */}
        <Route path="/sinhalaReg" element={<SinhalaReg />} />
        <Route path="/englishReg" element={<EnglishReg />} />
        <Route path="/tamilReg" element={<TamilReg />} />

        {/* Account Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Sidebar (optional test route) */}
        {/* <Route path="/sidebar" element={<Sidebar />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;