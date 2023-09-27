import React, { useState } from 'react';
import Collapse from '../../components/main/collapse/collapse';
import HtmlImg from '../../assets/icon-skills/html.png';
import CssImg from '../../assets/icon-skills/css.png';
import SassImg from '../../assets/icon-skills/sass.png';
import JsImg from '../../assets/icon-skills/js.png';
import ReactImg from '../../assets/icon-skills/react.png';
import Data from '../../Data/data.js';
import Modal from '../../components/main/modal/modal';

function About() {
  const { "personal-info-1": personalInfo1, "personal-info-2": personalInfo2 } = Data;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDescription, setModalDescription] = useState('');
  const [modalImageUrl, setModalImageUrl] = useState('');

  const openModal = (description, imageUrl) => {
    setModalDescription(description);
    setModalImageUrl(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalDescription('');
    setModalImageUrl('');
    setIsModalOpen(false);
  };
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
      <section className='about-content-collapse'>
        <Collapse title="Compétences"
          content={
            <figure className='home-icon'>
            <img 
            src={HtmlImg} 
            alt="logo html" 
            onClick={() => openModal("HTML est le langage fondamental qui permet de créer la structure d'une page Web en utilisant des balises pour définir le contenu et l'organisation.", HtmlImg)} 
            />
            <img 
            src={CssImg} 
            alt="logo css" 
            onClick={() => openModal("CSS est essentiel pour la mise en forme, la mise en page et l'esthétique des sites Web. Il permet aux développeurs Web de créer des designs attrayants, cohérents et adaptés à différents appareils tout en séparant la structure (HTML) du style (CSS) pour une meilleure maintenabilité et flexibilité des sites Web.", CssImg)} 
            />
            <img 
            src={SassImg} 
            alt="logo sass" 
            onClick={() => openModal("Sass est un outil puissant pour améliorer l'efficacité et la maintenabilité de leurs feuilles de style CSS. Il offre des fonctionnalités avancées tout en restant compatible avec le CSS standard.", SassImg)} 
            />
            <img 
            src={JsImg} 
            alt="logo js" 
            onClick={() => openModal("JavaScript est un langage de programmation essentiel pour le développement web. Il permet de créer des sites web interactifs, d'ajouter des fonctionnalités avancées et de créer des expériences utilisateur riches dans les navigateurs web. Sa polyvalence en fait également un choix populaire pour le développement d'applications web, mobiles et serveur.", JsImg)} 
            />
            <img 
            src={ReactImg} 
            alt="logo react" 
            onClick={() => openModal("React est une bibliothèque JavaScript puissante et populaire pour la création d'interfaces utilisateur modernes et réactives. Elle simplifie la création d'applications web et mobiles complexes en favorisant la réutilisation des composants et en optimisant les performances grâce à son Virtual DOM.", ReactImg)} 
            />
          </figure>
          }
        />
        <Collapse title="Diplômes" content="« Développeur intégrateur web » enregistrée au Répertoire National des Certifications Professionnelles, de niveau 5 (bac +2) sur les cadres français et européens des certifications (European Qualifications Framework)." />
      </section>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          imageUrl={modalImageUrl}
          description={modalDescription}
        />
      )}
    </main>
  )
}

export default About