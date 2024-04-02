import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MoviesInfo from "../../Pages/MovieInfo";

const Movie = (MovieData) => {
 
  const movies = MovieData.movieData;

  function sendMovies(movie){
    localStorage.setItem('selectedMovie', JSON.stringify(movie));
  }
  
  return (
    <>
      {movies.map((movie) => {
        return (
            <div className="movies" key={movie.imdbID}>
              <figure className="movies__img-wrapper">
                <Link to={`/${movie.imdbID}`} onClick={() => sendMovies(movie)}>
                  <img src={movie.Poster} alt="" className="movies__img"></img>
                </Link>
              </figure>
              <Link to={`/${movie.imdbID}`} onClick={() => sendMovies(movie)}>
                <h3 className="movies__title">{movie.Title}</h3>
              </Link>
              <h4 className="movies__year">{movie.Year}</h4>
            </div>
        );
      })}
    </>
  );
};

export default Movie;
