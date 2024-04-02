import React, { useEffect } from "react";
import axios from "axios";

const FetchMovies = (props,{onFetchedMovies}) => {

    const API_KEY = "af3cb781"
    const movieURL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=`

    useEffect(() => {
        const getMovies = async () => {
            try{
                const { data } = await axios.get(movieURL + props.keyword);
                const movieData = data.Search;
                props.onFetchedMovies(movieData);
            }
            catch(error){
                console.error("Error fetching movies: ", error)
            }
        }
        getMovies();

    },[props.keyword])

    return null
}
export default FetchMovies;