import React from 'react'
import iconInfo from '../../assets/info.png'
import Collapse from '../../components/main/collapse/collapse'
import HtmlImg from '../../assets/icon-skills/html.png'
import CssImg from '../../assets/icon-skills/css.png'
import SassImg from '../../assets/icon-skills/sass.png'
import JsImg from '../../assets/icon-skills/js.png'
import ReactImg from '../../assets/icon-skills/react.png'

function about() {
  return (
    <main>
      <section className='about-content-info'>
        <div className='about-content-left'>
          <h1 className='about-title'>Infos personelles</h1>
          <div className='personal-infos'>
            <div className='personal-info-1'>
              <div className='info'>
                <h2>Nom :</h2>
                <span>Martin</span>
              </div>
              <div className='info'>
                <h2>Prénom :</h2>
                <span>Florian</span>
              </div>
              <div className='info'>
                <h2>Age :</h2>
                <p>25 ans</p>
              </div>
              <div className='info'>
                <h2>Nationalité :</h2>
                <p>Française</p>
              </div>
            </div>
            <div className='personal-info-2'>
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
                <span>florian.martin700@gmail.com</span>
              </div>
              <div className='info'>
                <h2>Langages :</h2>
                <p>Français, Anglais "A2"</p>
              </div>
            </div>
          </div>
        </div>
        <div className='about-content-right'>
          <div className='content-right-old'>
            <h2>1 +</h2>
            <p>Années d'expérience</p>
          </div>
          <div className='content-right-projet'>
            <h2>9 +</h2>
            <p>Projet terminé</p>
          </div>
        </div>
      </section>
      <div className='btn-download-cv'>
        <a href="/chemin-vers-votre-fichier.pdf" download>Télécharger CV</a>
      </div>
      <section className='about-content-collapse'>
        <Collapse title="Compétences"
          content={
          <figure className='home-icon'>
            <img src={HtmlImg} alt="logo html" />
            <img src={CssImg} alt="logo css" />
            <img src={SassImg} alt="logo img" />
            <img src={JsImg} alt="logo js" />
            <img src={ReactImg} alt="logo react" />
          </figure>
          }
        />
        <Collapse title="Diplômes" content="Lien du diplome à venir" />
      </section>
    </main>
  )
}

export default about