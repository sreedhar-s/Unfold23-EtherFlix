import React from 'react';
import { Route, Routes } from 'react-router-dom';

//components
import MovieLayout from '../layouts/Movie.layout';

const MovieHOC = () => {
  return (
    <>
        <MovieLayout></MovieLayout>
    </>
  )
}

export default MovieHOC;
