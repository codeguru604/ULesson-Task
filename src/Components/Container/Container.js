import React, { Component } from 'react';
import { Route, Routes, createBrowserRouter, RouterProvider } from 'react-router-dom';
import './Container.css';


import Home from '../Home/Home';
import Mathematics from '../Mathematcis/Mathematics';
import Loading from '../Loading/Loading';

/**
 * Container React Class - This is where router is implemented to switch between pages
 * @class Container
 */

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path:"/mathematics",
    element: <Loading/>
  }
]);

class Container extends Component {
  render() {
    return (
          <div className='main-container'>
            <RouterProvider router={router}>
              <Home />
            </RouterProvider>
          </div>
      )
  }
}

export default Container;
