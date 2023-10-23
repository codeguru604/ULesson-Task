// router.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Mathematics from '../Pages/Mathematcis/Mathematics';
const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/mathematics" element={<Mathematics />} />
  </Routes>
);

export default AppRoutes;
