import React from "react";
import { Route, Routes } from "react-router-dom";

//components
import DefaultLayout from "../layouts/Default.layout";


const DefaultHOC = () => {
    return (
        <>
          <Routes>
            <Route path="/" element={<DefaultLayout></DefaultLayout>} />
          </Routes>
        </> 
    );
};

export default DefaultHOC;