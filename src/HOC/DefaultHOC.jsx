import React from "react";
import { Route, Routes } from "react-router-dom";

//components
import DefaultLayout from "../layouts/Default.layout";

//Pages
import HomePage from "../pages/Home.page";


const DefaultHOC = () => {
    return (
        <>
          <Routes>
            <Route path="/" element={<DefaultLayout><HomePage /></DefaultLayout>} />
          </Routes>
        </> 
    );
};

export default DefaultHOC;