import React from "react";

//components
import Navbar from "../components/Navbar/navbar.component";
import HeroCarousel from "../components/HeroCarousal/HeroCarousal.component";

const DefaultLayout = ({children}) => {
  return (
    <>
        <Navbar />
        {<HeroCarousel />}
        {children}
    </>
  );
};

export default DefaultLayout;