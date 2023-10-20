import React from 'react';
import { Route, Routes } from "react-router-dom";
import axios from 'axios';

//components
import DefaultHOC from './HOC/DefaultHOC';
import MovieHOC from './HOC/MovieHOC';
import MovieNavbar from './components/Navbar/Movienavbar.component';
import MovieHero from './components/MovieHero/MovieHero.component';

//Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = import.meta.env.VITE_API_KEY;

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<DefaultHOC />} />
        <Route path="/movie/:id" element={<MovieHOC />} />
      </Routes>
    </>
  )
}

export default App;