import "./styles.css";
import ItemCard from "./ItemCard";
import React from "react";

function ItemList({list}){
    return(
        <div className="MovieList">{ list.map( (filmID,index)=>( <ItemCard key={index} ele={filmID} /> ))} </div>
    )
}

export default ItemList;