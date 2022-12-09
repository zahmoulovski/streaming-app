import React, {useState,useEffect} from 'react';
import ItemList from './ItemList.js';
import { datamovie } from './data/Data';
import "./styles.css";

function HomeApp(){
  const [list,setList] = useState(datamovie);
  const [filterVideos] = useState(list);
  return(
    <div>
      <ItemList list={filterVideos} />
    </div>
      );
}

export default HomeApp;
