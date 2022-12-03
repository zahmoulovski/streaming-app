import React, {useState,useEffect} from 'react';
import MovieList from './MovieList.js';
import Filtring from './Filtring.js';
import { info } from './Data.js';
import "./styles.css";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Toast from 'react-bootstrap/Toast';

function HomeApp(){
  
  const [list,setList] = useState(info);
  const [filterVideos, setfilterVideos] = useState(list);
  const [keyword, setKeyword] = useState("");
  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(!showA);

  function filter(key){
    setKeyword(key);

    setfilterVideos(list.filter( (element)=>{ return ( (element.title.toLowerCase().includes(key.toLowerCase())) && (element.rating)  ) } ));
  }
  useEffect(()=>{ filter(keyword); },[list]);

  return(
    <div>
      <Col md={4} className="mb-2">
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
      </Col>
      <MovieList list={filterVideos} />
    </div>
      );
}

export default HomeApp;
