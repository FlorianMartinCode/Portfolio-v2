import React from 'react'
import Collapse from '../../components/main/collapse/collapse'
import HtmlImg from '../../assets/icon-skills/html.png'
import CssImg from '../../assets/icon-skills/css.png'
import SassImg from '../../assets/icon-skills/sass.png'
import JsImg from '../../assets/icon-skills/js.png'
import ReactImg from '../../assets/icon-skills/react.png'
import Data from'../../Data/data.json'

function about() {
  const { "personal-info-1": personalInfo1, "personal-info-2": personalInfo2 } = Data;
  return (
    <main>
      <section className='about-content-info'>
        <div className='about-content-left'>
          <h1 className='about-title'>Infos personnelles</h1>
          <div className='personal-infos'>
            <div className='personal-info-1'>
              {personalInfo1.map((item, index) => (
                <div className="info" key={index}>
                  <h2>{item.label} :</h2>
                  <p>{item.value}</p>
                </div>
              ))}
            </div>
            <div className='personal-info-1'>
            {personalInfo2.map((item, index) => (
              <div className="info personal-info-2" key={index}>
                <h2>{item.label} :</h2>
                <p>{item.value}</p>
              </div>
            ))}
            </div>
          </div>
        </div>
        <div className='about-content-right'>
          <div className='content-right'>
            <h2>1 +</h2>
            <p>Années d'expérience</p>
          </div>
          <div className='content-right'>
            <h2>9 +</h2>
            <p>Projets terminés</p>
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