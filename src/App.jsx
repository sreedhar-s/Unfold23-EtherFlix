import React from 'react';
import { Route, Routes } from "react-router-dom";
import axios from 'axios';

//components
import DefaultHOC from './HOC/DefaultHOC';
import Navbar from './components/Navbar/navbar.component';

//Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<DefaultHOC />} />
      </Routes>
    </>
  )
}

export default App;