import React, { useEffect, useState } from "react";

//components
import EntertainmentCardSlider from "../Entertainment/Entertainment.component";


const HomePage = () => {
  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="container mx-auto px-4">
          <h1 className="text-xl font-bold text-gray-800 my-3">
            The Best of Entertainment
          </h1>
          <EntertainmentCardSlider />
        </div>
      </div>
    </>
  );
};

export default HomePage;
