import React, { useEffect, useState } from "react";
import Movie from "../Components/UI/Movie";
import { generate } from "random-words";
import FetchMovies from "../Components/UI/FetchMovies";

const Movies = () => {

  const [fetchedMovies, setFetchedMovies] = useState([]);
  const [random, setRandom] = useState("");
  const [moviesLoaded, setMoviesLoaded] = useState(false);

  useEffect(() => {
    const getRandomKeyword = () => {
      const randomWord = generate();
      setRandom(randomWord);
    };
    getRandomKeyword();
  }, []);

  const handleFetchedMovies = (movieData) => {
    try{
      setFetchedMovies(movieData);
    setTimeout(() => {
      setMoviesLoaded(true);
    }, 2000);
    }
    catch(error){
      alert(error, "Error finding movies, please try again!");
    }
  };

  useEffect(() => {
    if (random) {
      <FetchMovies keyword={random} onFetchedMovies={handleFetchedMovies} />;
    }
  }, [random]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="movies__results--container">
            <h3 className="movies__header">Movies You Might Like!</h3>
          </div>
          <div className="movies__container">
            {!moviesLoaded ? (
              <>
                  <FetchMovies
                    keyword={random}
                    onFetchedMovies={handleFetchedMovies}
                  />
                {new Array(9).fill(0).map((_, index) => (
                    <div className="movies">
                      <figure className="movies__img--wrapper">
                        <div className="movies__img movies__img--skeleton"></div>
                      </figure>
                      <div className="skeleton movies__title movies__title--skeleton"></div>
                      <div className="skeleton moives__year movies__year--skeleton"></div>
                    </div>
                ))}
              </>
            ) : (
                  <Movie
                    movieData={fetchedMovies.slice(0, 9)}
                    key={fetchedMovies.index}
                  />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Movies;
