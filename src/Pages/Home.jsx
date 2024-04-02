import React, { useEffect, useState } from 'react'
import Landing from "../Components/Landing";
import MovieSearch from "../Components/MovieSearch";
import FetchMovies from "../Components/UI/FetchMovies";

const Home = (props) => {

  const[movieKeyword, setMovieKeyword] = useState("");
  const [userSearched, setUserSearched] = useState(false);
  const [fetchedMovies, setFetchedMovies] = useState([]);

  function handleSearch(searchKeyword){
    setMovieKeyword(searchKeyword);
    setUserSearched(true);
  }

  function handleFetchedMovies(movieData){
    setFetchedMovies(movieData);
  }

  return (
    <>
    <Landing onAddKeyword={handleSearch}/>
    {userSearched && <FetchMovies keyword={movieKeyword} onFetchedMovies={handleFetchedMovies}/>}
    <MovieSearch keyword={movieKeyword} movies={fetchedMovies}/>
    </>
  )
}

export default Home;