import React from "react";
import Movie from "./UI/Movie";


const MovieSearch = ({movies, keyword}) => {
  
  return (
    <section id="movies">
    <div className="container">
      <div className="row">
        <div className="movies__results--container">
          <h3 className="movies__header">
            Search Results for:
            <span className="secondary movie__keyword">{keyword ? <>" ${keyword} "</> : <> Enter keyword above!</>} </span>
          </h3>
        </div>
        <div className="movies__container">
          <Movie movieData={movies.slice(0, 6)} key={movies.imdbID} />
        </div>
      </div>
    </div>
  </section>
  );
};

export default MovieSearch;

