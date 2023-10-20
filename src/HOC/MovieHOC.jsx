import React from 'react';
import { Route, Routes } from 'react-router-dom';

//components
import MovieLayout from '../layouts/Movie.layout';

//pages
import MoviePage from '../pages/Movie.page';

const MovieHOC = () => {
  return (
    <>
        <MovieLayout>{<MoviePage />}</MovieLayout>
    </>
  )
}

export default MovieHOC;
