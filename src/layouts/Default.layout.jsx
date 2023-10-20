import React from "react";

//components
import Navbar from "../components/Navbar/navbar.component";

const DefaultLayout = ({children}) => {
  return (
    <>
        <Navbar />
        {children}
    </>
  );
};

export default DefaultLayout;