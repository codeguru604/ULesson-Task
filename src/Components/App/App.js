import React, {Component} from 'react';
import './App.css';

import Main from '../Main/Main';
// import Login from '../Login/Login';
import { Route, Router, Routes } from "react-router-dom";


/**
 * App React Class
 * @class App
 */
class App extends Component {

  render() {
    return (
    <div className="App">
      <Main />
    </div>

  )
  }
}

export default App;
