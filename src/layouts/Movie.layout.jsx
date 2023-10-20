import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import axios from 'axios';

//components
import MovieNavbar from '../components/Navbar/Movienavbar.component';

//context
import { MovieContext } from '../context/movie.context';

const MovieLayout = ({children}) => {
  const {id} = useParams();
  const {movie, setMovie} = useContext(MovieContext);

  useEffect(() => {
    const requestMovie = async () => {
      const getMovieData = await axios.get(`/movie/${id}`);
      setMovie(getMovieData.data);
    };

    requestMovie();
  },[id])

  return (
    <>
        <MovieNavbar />
        {children}
    </>
  )
}

export default MovieLayout;