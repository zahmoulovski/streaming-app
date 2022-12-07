import React from 'react';
import {useParams} from 'react-router-dom';
import { info } from './Components/data/Data';
import Streaming from './Components/Streaming';
import YtModal from './Components/YtModal';

const Stream = () => {
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
    
    <div className='rightSide'><div><YtModal/></div><Streaming code={filmID.code} /></div>
    </container>
  )
}

export default Stream
