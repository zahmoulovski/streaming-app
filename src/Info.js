import React from 'react';
import {useParams} from 'react-router-dom';
import { info } from './Components/data/Data';
import { Link } from 'react-router-dom';
import YtModal from './Components/YtModal';

const Info = () => {
  const {id}=useParams()
  // eslint-disable-next-line
  const filmID=info.find((e)=>e.id==id)
  return (
    <container className='trailer' style={{ backgroundImage: `url(${filmID.background})` }}>
    <div className='leftSide'>
      <img className='trailerposter' src={filmID.img} alt='Poster' />
      <br/>
      <h1>{filmID.title}</h1>
      <p className="description">{filmID.description}</p>
    </div>
    <div className='rightSide'>
    <div>
    <YtModal/>
    <Link to={`/watch/${filmID.id}`} ><a className="btn btn-success">Watch</a></Link>
       
      
    </div>
    </div>
    </container>
  )
}

export default Info
