import "../styles.css";
import TvshowCard from "./TvshowCard";
import React from "react";

function TvshowList({list}){
    return(
        <div className="MovieList">{ list.map( (filmID,index)=>( <TvshowCard key={index} ele={filmID} /> ))} </div>
    )
}

export default TvshowList;