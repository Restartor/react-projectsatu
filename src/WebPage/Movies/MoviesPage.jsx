import React from "react";
import { useParams } from "react-router-dom";
import MostWatched from "./MostWatched";
import TopRated from "./TopRated";
import Trending from "./Trending";
import Error404 from "../ErrNotFound.jsx";


const movieComponents = {
    mostwatched: MostWatched,
    toprated: TopRated,
    trending: Trending,
};

function MoviesPage(){
    const { movies } = useParams();
    const key = typeof movies === 'string' ? movies.toLowerCase().replace(/-/g, '') : ''; // penjelasan bahasa manusia: 
    const MovieComponent = movieComponents[key] || null;
    return MovieComponent ? <MovieComponent /> : <Error404 />;
}

export default MoviesPage;