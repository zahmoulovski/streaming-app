import React, {useState,useEffect} from 'react';
import TvshowList from './TvshowList';
import { tvshow } from '../data/Data';
import "../styles.css";

function Tvshows(){
  const [list,setList] = useState(tvshow);
  const [filterVideos] = useState(list);
  return(
    <div>
      <TvshowList list={filterVideos} />
    </div>
      );
}

export default Tvshows;
