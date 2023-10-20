import React from 'react';
import { Route, Routes } from "react-router-dom";

//components
import DefaultHOC from './HOC/DefaultHOC';
import Navbar from './components/Navbar/navbar.component';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Navbar />} />
      </Routes>
    </>
  )
}

export default App;