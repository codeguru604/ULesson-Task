import React from 'react';
import { Route, Routes, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import Mathematics from '../Mathematcis/Mathematics';
import './Container.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/mathematics",
    element: <Mathematics />
  }
]);

const Container = () => {
  return (
    <div className='main-container'> 
      <RouterProvider router={router}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mathematics" element={<Mathematics />} />
        </Routes>
      </RouterProvider>
    </div>
  );
}

export default Container;
