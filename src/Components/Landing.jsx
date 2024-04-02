import React, { useEffect, useState} from "react";
import LandingImage from "../Assets/12713.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Landing = (props) => {
  
  const headerButton = document.querySelector(".header__button");
  const resultsContainer = document.querySelector(".movies__results--container");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [userClicked, setUserClicked] = useState(false);

  function movieSearch(event) {
    event.preventDefault();
  }

  function getMovieKeyword(event) {
    const keyword = event.target.value;
    setSearchKeyword(keyword);
  }

  function moviesLoading() {
    if(searchKeyword.trim() === ""){
      alert("Error: Please enter a movie name or keyword.");
      return;
    }

    props.onAddKeyword(searchKeyword);
    setUserClicked(true);

    headerButton.classList += " movies__loading";
    resultsContainer.classList += " movies__loading";
    document.body.classList += " movies__loaded";
    setTimeout(() => {
      headerButton.classList.remove("movies__loading");
      resultsContainer.classList.remove("movies__loading");
      setUserClicked(false);
      window.location.href = "#movies";
    }, 1000);
  }

  useEffect(() => {
    userClicked && moviesLoading();
  }, []);

  return (
    <header id="landing-page">
      <div className="container">
        <div className="row">
          <div className="header__container">
            <h1 className="header__title">Open Movie Database</h1>
            <h3 className="header__sub-title">
              Curtain Up on Cinema Search with
              <span className="secondary"> OMD</span>
            </h3>
            <form onSubmit={movieSearch}>
              <input
                type="text"
                className="header__input"
                placeholder="Movie Name or Keyword"
                name="keyword"
                value={searchKeyword}
                onChange={getMovieKeyword}
              />
              <button
                type="submit"
                className="header__button"
                onClick={moviesLoading}
              >
                {userClicked ? (
                  <FontAwesomeIcon
                    icon="spinner"
                    className="fa fa-spinner movies__loading--spinner"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon="magnifying-glass"
                    className="fa fa-search"
                  />
                )}
              </button>
            </form>
            <figure className="header__img--wrapper">
              <img src={LandingImage} className="header__img" alt="" />
            </figure>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Landing;
