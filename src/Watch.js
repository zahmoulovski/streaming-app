import React from 'react';
import {useParams} from 'react-router-dom';
import { info } from './Components/data/Data';
import Streaming from './Components/Streaming';

const Watch = () => {
  const {id}=useParams()
  // eslint-disable-next-line
  const filmID=info.find((e)=>e.id==id)
  return (
    <container className='trailer' style={{ backgroundImage: `url(${filmID.background})` }}>
    <div className='rightSide'>
    <Streaming code={filmID.code} />
    </div>
    </container>
  )
}

export default Watch
