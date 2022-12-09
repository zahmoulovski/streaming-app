import React from 'react';
import {useParams} from 'react-router-dom';
import { datamovie } from './Components/data/Data';
import { Link } from 'react-router-dom';
import YtModal from './Components/YtModal';
import overlay from './overlay.png';

const Info = () => {
  const {id}=useParams()
  // eslint-disable-next-line
  const filmID=datamovie.find((e)=>e.id==id)
  return (
    <container className='trailer' style={{ backgroundImage: `url(${filmID.backdrop} )`, backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover' }}>
      <div className='leftSide'>
        <img className='trailerposter' src={filmID.poster} alt='Poster' />
        <div className='overlayposter'style={{ backgroundImage: `url(${filmID.backdrop} )`, backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover' }}><img className='postermobil' src={overlay} alt='Poster' /></div>
        <div className='btnsmobil'>
        <h2 className='spanratemobil'>⭐{filmID.rating}   -   {filmID.year}   -   {filmID.runtime}</h2>
          <Link to={`/watch/${filmID.id}`} ><a className="btn btn-warning watchmobil">Watch</a></Link>
          <YtModal/>      
        </div>
      </div>
      <div className='rightSide'>
        <h1>{filmID.title}</h1>
        <div className='innerinfo'>
        <h2 className='spanrate'>⭐ {filmID.rating}</h2>
        <div className='rightinfo'>
          <p>{filmID.year}</p>
          <p>{filmID.runtime}</p>
        </div>
        </div>
        <p className="description">{filmID.description}</p>
        
        <div className='btns'>
          <YtModal/>
          <Link to={`/watch/${filmID.id}`} ><a className="btn btn-outline-warning">Watch</a></Link>      
        </div>
      </div>
    </container>
  )
}

export default Info
