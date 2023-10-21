import React, { useEffect, useState } from "react";
import axios from "axios";

//components
import EntertainmentCardSlider from "../Entertainment/Entertainment.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upComingMovies, setupComingMovies] = useState([]);


  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get("/movie/popular");
      setPopularMovies(getPopularMovies.data.results);
    }

    requestPopularMovies();
  }, []);

  useEffect(() => {
    const requestTopRatedMovies = async () => {
      const getTopRatedMovies = await axios.get("/movie/top_rated");
      setTopRatedMovies(getTopRatedMovies.data.results);
    }

    requestTopRatedMovies();
  }, []);

  useEffect(() => {
    const requestUpComingMovies = async () => {
      const getUpComingMovies = await axios.get("/movie/upcoming");
      console.log(getUpComingMovies);
      setupComingMovies(getUpComingMovies.data.results);
    }

    requestUpComingMovies();
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
        <div className="container mx-auto px-4 my-8">
          <PosterSlider
            images={topRatedMovies}
            title="Online Streaming Events"
            isDark={false}
          />
        </div>

        <div className="container mx-auto px-4 my-8">
          <PosterSlider
            images={upComingMovies}
            title="Outdoor Events"
            isDark={false}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
