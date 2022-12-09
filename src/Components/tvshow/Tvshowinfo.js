import React from 'react';
import {useParams} from 'react-router-dom';
import { dataserie } from '../data/Data';
import { Link } from 'react-router-dom';
import YtModal from './YtModalserie';
import overlay from './overlay.png';

const Tvshowinfo = () => {
  const {id}=useParams()
  // eslint-disable-next-line
  const serieID=dataserie.find((e)=>e.id==id)
  return (
    <container className='trailer' style={{ backgroundImage: `url(${serieID.backdrop} )`, backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover' }}>
      <div className='leftSide'>
        <img className='trailerposter' src={serieID.poster} alt='Poster' />
        <div className='overlayposter'style={{ backgroundImage: `url(${serieID.backdrop} )`, backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover' }}><img className='postermobil' src={overlay} alt='Poster' /></div>
        <div className='btnsmobil'>
        <h2 className='spanratemobil'>⭐{serieID.rating}   -   {serieID.year}   -   {serieID.runtime}</h2>
          <Link to={`/watch/${serieID.id}`} ><a className="btn btn-warning watchmobil">Watch</a></Link>
          <YtModal/>      
        </div>
      </div>
      <div className='rightSide'>
        <h1>{serieID.title}</h1>
        <div className='innerinfo'>
        <h2 className='spanrate'>⭐ {serieID.rating}</h2>
        <div className='rightinfo'>
          <p>{serieID.year}</p>
          <p>{serieID.runtime}</p>
        </div>
        </div>
        <p className="description">{serieID.description}</p>
        
        <div className='btns'>
          <YtModal/>
          
          <Link to={`/watch/${serieID.id}`} ><a className="btn btn-outline-warning">Watch</a></Link>      
        </div>
      </div>
    </container>
  )
}

export default Tvshowinfo