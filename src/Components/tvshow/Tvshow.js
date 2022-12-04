import React, {useState,useEffect} from 'react';
import MovieList from './MovieList';
import Filtring from '../search/Filtring.js';
import { tvshow } from '../data/Data';
import "../styles.css";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Toast from 'react-bootstrap/Toast';

function Movie(){
  
  const [list,setList] = useState(tvshow);
  const [filterVideos, setfilterVideos] = useState(list);
  const [rate,setRate] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(!showA);

  function filter(key, rate){
    setKeyword(key);
    setRate(rate);
    setfilterVideos(list.filter( (element)=>{ return ( (element.title.toLowerCase().includes(key.toLowerCase())) && (element.rating >= rate)  ) } ));
  }
  useEffect(()=>{ filter(keyword,rate); },[list]);

  return(
    <div>
      {/* <Col md={4} className="mb-2">
        <Button onClick={toggleShowA} className="mb-2">
          Filter
        </Button>
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <strong className="me-auto">Filter</strong>
            <small>Close</small>
          </Toast.Header>
          <Toast.Body><Filtring filter={filter}/></Toast.Body>
        </Toast>
      </Col> */}
      <MovieList list={filterVideos} />
    </div>
      );
}

export default Movie;
