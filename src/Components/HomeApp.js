import React, {useState,useEffect} from 'react';
import MovieList from './MovieList.js';
import { info } from './data/Data';
import "./styles.css";

function HomeApp(){
  const [list,setList] = useState(info);
  const [filterVideos] = useState(list);
  return(
    <div>
      <MovieList list={filterVideos} />
    </div>
      );
}

export default HomeApp;
