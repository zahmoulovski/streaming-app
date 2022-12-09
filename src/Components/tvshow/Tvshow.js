import React, {useState,useEffect} from 'react';
import TvshowList from './TvshowList';
import { datamovie } from '../data/Data';
import "../styles.css";

function Tvshows(){
  const [list,setList] = useState(datamovie);
  const [filterVideos] = useState(list);
  return(
    <div>
      <TvshowList list={filterVideos} />
    </div>
      );
}

export default Tvshows;
