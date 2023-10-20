import React, { useEffect, useState } from "react";
import axios  from "axios";

//components
import EntertainmentCardSlider from "../Entertainment/Entertainment.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";


const HomePage = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const requestTopRatedMovies = async () => {
      const getTopRatedMovies = await axios.get("/movie/top_rated");
      console.log(getTopRatedMovies)
      setTopRatedMovies(getTopRatedMovies.data.results);
    }

    requestTopRatedMovies();
  }, []);
  

  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="container mx-auto px-4">
          <h1 className="text-xl font-bold text-gray-800 my-3">
            The Best of Entertainment
          </h1>
          <EntertainmentCardSlider />
        </div>
        <div className="bg-bms-800 py-12">
          <div className="container mx-auto px-4 flex flex-col gap-3">
            <PosterSlider 
              images={popularMovies} 
              title="Premiers" 
              subtitle="Brand new releases every Friday" 
              isDark={true}
            />
          </div>
        </div>
        <div className="container mx-auto px-4 my-4">
          <PosterSlider
            images={topRatedMovies}
            title="Top rated movies"
            isDark={false}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
