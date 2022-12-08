import React from 'react'
import {Link} from 'react-router-dom';
import DarkModeToggle from './Components/DarkModeToggle';


const NavBar = () => {
  return (
    <div className='navBar'>
      <ul className='ulContainer'>
        <Link to="/">
        <li>
            <img src='/image/logo-black.png' className='logo' alt="logo"/>
        </li>
        </Link>
        <Link to="/movies">
        <li>
            Movies
        </li>
        </Link>
        <Link to="/tvshows">
        <li>
            TV Show
        </li>
        </Link>
        <Link to="/search">
          <li>
          🔍
          </li>
        </Link>
        <li>
        <DarkModeToggle/>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
