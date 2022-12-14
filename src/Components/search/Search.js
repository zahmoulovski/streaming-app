import React, {useState,useEffect} from 'react';
import SearchList from './SearchList';
import Filtring from '../search/Filtring.js';
import { datamovie } from '../data/Data';
import "../styles.css";

function Search(){
  
  const [list,setList] = useState(datamovie);
  const [filterVideos, setfilterVideos] = useState(list);
  const [keyword, setKeyword] = useState("");

  function filter(key){
    setKeyword(key);
    setfilterVideos(list.filter( (element)=>{ return ( (element.title.toLowerCase().includes(key.toLowerCase()))) } ));
  }
  useEffect(()=>{ filter(keyword); },[list]);

  return(
    <div>
      <Filtring filter={filter}/>
      <SearchList list={filterVideos} />
    </div>
      );
}

export default Search;
