import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const MovieInfo = () => {

  const [selectedMovie, setSelectedMovie] = useState();
  const {id} = useParams();
  
  useEffect(() => {
    const storedMovie = JSON.parse(localStorage.getItem('selectedMovie'));
    if (storedMovie) {
      setSelectedMovie(storedMovie);
    }
  }, []);

  return (
      <div id="movies__body">
      <main id="movies__main">
        <div className="container__movie--selected">
          <div className="row">
            <div className="movie__selected--top">
              <Link to="/movies" className="movie__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/movies" className="movie__link">
                <h2 className="movie__selected--title--top">Movies</h2>
              </Link>
            </div>
            {selectedMovie ? (<>
              <div className="movie__selected">
              <figure className="movie__selected--figure">
                <img src={selectedMovie.Poster} alt="" className="movie__selected--img" />
              </figure>
              <div className="movie__selected--description">
                <h2 className="movie__selected--title">{selectedMovie.Title}</h2>
                <h3 className="movie__summary--title">Year</h3>
                <h4 className="movie__selected--info">{selectedMovie.Year}</h4>
                <h3 className="movie__summary--title">Type</h3>
                <h4 className="movie__selected--info">{selectedMovie.Type}</h4>
                <div className="movie__summary">
                  <h3 className="movie__summary--title">Summary</h3>
                  <p className="movie__summary--para">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nostrum officia nulla earum voluptas aspernatur veniam
                    veritatis necessitatibus sapiente, tempora adipisci,
                    reiciendis obcaecati numquam repellat, amet similique magnam
                    molestiae eos consectetur.
                  </p>
                </div>
              </div>
            </div>
            </>) : (<>
              <p>No movie selected</p>
            </>)}
          </div>
        </div>
      </main>
    </div>
  )
}

export default MovieInfo;