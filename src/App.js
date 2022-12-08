import React from 'react'
import { Route,Routes } from 'react-router-dom'
import HomeApp from './Components/HomeApp'
import NavBar from './Navbar'
import Movie from './Components/movie/Movie'
import Tvshow from './Components/tvshow/Tvshow'
import Search from './Components/search/Search'
import Info from './Info'
import Watch from './Watch'

function App() {
  return (
    <div>
    <NavBar/>
        <Routes>
            <Route path='/' element={<HomeApp/>} />
            <Route path='/search' element={<Search/>}/>
            <Route path='/movies' element={<Movie/>}/>
            <Route path='/tvshows' element={<Tvshow/>}/>
            <Route path='/info/:id' element={<Info/>}/>
            <Route path='/watch/:id' element={<Watch/>}/>
        </Routes>
        
    </div>
  )
}

export default App
