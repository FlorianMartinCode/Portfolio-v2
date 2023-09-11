import React from 'react'
import { Link } from 'react-router-dom';
import iconInfo from '../../assets/info.png'

function about() {
  return (
    <main>
      <div className='about-content'>
        
        <div className='about-content-left'>
          <h1 className='about-title'>Infos personelles</h1>
          <div className='personal-infos'>
            <div className='info'>
              <h2>Nom :</h2>
              <p>Martin</p>
            </div>
            <div className='info'>
              <h2>Prénom :</h2>
              <p>Florian</p>
            </div>
            <div className='info'>
              <h2>Age :</h2>
              <p>25 ans</p>
            </div>
            <div className='info'>
              <h2>Nationalité :</h2>
              <p>Française</p>
            </div>
            <div className='info'>
              <h2>Freelance :</h2>
              <p>Disponible</p>
            </div>
            <div className='info'>
              <h2>Address :</h2>
              <p>Paris</p>
            </div>
            <div className='info'>
              <h2>Email :</h2>
              <p>florian.martin700@gmail.com</p>
            </div>
            <div className='info'>
              <h2>Langages :</h2>
              <p>Français,</p>
              <p>Anglais "A2"</p>
            </div>
          </div>
          <div className='btn-download-cv'>
          <Link to="/chemin-vers-votre-fichier.pdf" download className="btn-download">Télécharger CV</Link>
          </div>
        </div>
        <div className='about-content-right'>
          <img src={iconInfo} alt="logo info" />
        </div>

      </div>
    </main>
  )
}

export default about