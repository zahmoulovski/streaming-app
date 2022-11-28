import React from 'react';
import {useParams} from 'react-router-dom';
import { info } from './Components/Data';
import YtModal from './Components/YtModal';
import StreamingModal from './Components/StreamingModal';

const Trailer = () => {
  const {id}=useParams()
  const filmID=info.find((e)=>e.id==id)
  return (
    <container className='trailer' style={{ backgroundImage: `url(${filmID.background})` }}>
      <img className='trailerposter' src={filmID.img} alt='Poster' />
      <h1>{filmID.title}</h1>
      <div><YtModal/>   <StreamingModal/></div>
      <p className="description">{filmID.description}</p>
      {/* <p>{filmID.season.SOI}</p><p>{filmID.season.SOII}</p> */}
    </container>
  )
}

export default Trailer
