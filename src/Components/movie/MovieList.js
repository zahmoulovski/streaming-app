import "../styles.css";
import MovieCard from "./MovieCard";
import React from "react";

function MovieList({list}){
    return(
        <div className="MovieList">{ list.map( (filmID,index)=>( <MovieCard key={index} ele={filmID} /> ))} </div>
    )
}

export default MovieList;