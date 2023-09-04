import React from 'react'
import './footer.scss'
import { useTheme } from '../../themes/themes'

function Footer() {
    const { darkTheme } = useTheme();
    const footerClasses = darkTheme ? 'footer dark-theme' : 'footer light-theme';

  return (
    <div className={footerClasses}>
        <p className='copyright'>© 2023 Florian MARTIN. Tous droits réservés.</p>
    </div>
  )
}

export default Footer