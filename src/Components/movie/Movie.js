import React, {useState,useEffect} from 'react';
import MovieList from './MovieList';
import Filtring from '../search/Filtring.js';
import { movie } from '../data/Data';
import "../styles.css";


function Movie(){
  const [list,setList] = useState(movie);
  const [filterVideos] = useState(list);
  return(
    <div>
      <MovieList list={filterVideos} />
    </div>
      );
}

export default Movie;
