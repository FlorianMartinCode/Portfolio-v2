import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../themes/themes.scss'
import Icon from '../../assets/favicon-32x32.png'
import { useTheme } from '../../themes/themes'

function Navbar() {
  const { darkTheme, toggleTheme } = useTheme();
  const navbarClasses = darkTheme ? 'nav-menu dark-theme' : 'nav-menu light-theme';

  return (
    <nav className={navbarClasses}>
      <figure>
          <img src={Icon} alt="icone avec les initiales F et M" />
      </figure>
      <div className='nav-menu'>
        <ul>
          <li>
            <NavLink to='/'>
              <i className="fa-solid fa-house"></i>Accueil</NavLink>
          </li>
          <li>
            <NavLink to='/about'>
              <i className="fa-solid fa-user"></i>À propos</NavLink>
          </li>
          <li>
            <NavLink to='/portfolio'>
              <i className="fa-solid fa-folder"></i>Portfolio</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>
              <i className="fa-solid fa-envelope"></i>Contact</NavLink>
          </li>
        </ul>
      </div> 
      <button onClick={toggleTheme}>
        <i className="fa-solid fa-circle-half-stroke"></i>
      </button> 
    </nav>
  )
}

export default Navbar