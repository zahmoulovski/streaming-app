import "../styles.css";
import SearchCard from "./SearchCard";
import React from "react";

function SearchList({list}){
    return(
        <div className="MovieList">{ list.map( (filmID,index)=>( <SearchCard key={index} ele={filmID} /> ))} </div>
    )
}

export default SearchList;