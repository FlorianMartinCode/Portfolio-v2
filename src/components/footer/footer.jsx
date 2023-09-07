import React from 'react'
import { Link } from 'react-router-dom'
import './footer.scss'
import LinkedIn from '../../assets/reseau/linkedin.png'
import GitHub from '../../assets/reseau/github.png'
import Twitter from '../../assets/reseau/twitter.png'
import { useTheme } from '../../themes/themes'

function Footer() {
    const { darkTheme } = useTheme();
    const footerClasses = darkTheme ? 'dark-theme' : 'light-theme';

  return (
    <footer className={footerClasses}>
      <div className='footer-content'>
        <div className='footer-link'>
          <Link to="https://www.linkedin.com/in/florian-martin-477748266/" target="_blank" rel="noreferrer">
            <img src={LinkedIn} alt="logo linkedin" />
          </Link>
          <Link to="https://github.com/FlorianMartinCode" target="_blank" rel="noreferrer">
            <img src={GitHub} alt="logo github" />
          </Link>
          <Link to="https://twitter.com/florian_martin" target="_blank" rel="noreferrer">
            <img src={Twitter} alt="logo x" />
          </Link>
        </div>
        <p className='copyright'>© 2023 Florian MARTIN. Tous droits réservés.</p>
      </div>
    </footer>
  )
}

export default Footer