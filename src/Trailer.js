import React from 'react';
import {useParams} from 'react-router-dom';
import { info } from './Components/data/Data';
import YtModal from './Components/YtModal';
import YoutubeEmbed from './Components/YoutubeID';

const Trailer = () => {
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
    <div className='rightSide'><YoutubeEmbed embedId={filmID.trailer} /></div>
    </container>
  )
}

export default Trailer
