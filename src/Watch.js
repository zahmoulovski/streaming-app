import React from 'react';
import {useParams} from 'react-router-dom';
import { datamovie } from './Components/data/Data';
import Streaming from './Components/Streaming';

const Watch = () => {
  const {id}=useParams()
  // eslint-disable-next-line
  const filmID=datamovie.find((e)=>e.id===id)
  return (
    <container>
    <div className='stream'>
    <Streaming code={filmID.streamingcode} />
    </div>
    </container>
  )
}

export default Watch
