import React, { useState, useEffect } from 'react';
import './home.scss'; // Importez le fichier SCSS
import PhotoDeProfil from '../../assets/photo-de-profil.png'
import { Link } from 'react-router-dom';

function Home() {

  const dynamicTitles = ["Développeur Web", "Amoureux du Code"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dynamicTitles.length);
    }, 4000);

    return () => clearInterval(intervalId); // Nettoie l'intervalle lors de la désactivation du composant
  }, [dynamicTitles.length]);

  return (
    <main>
      <div className='home-content'>
        <figure className='home-pdp'>
          <img src={PhotoDeProfil} alt="Florian Martin" />
        </figure>
        <div className='home-text-et-btn'>
          <h1 className='home-titre'>Florian Martin <span id="dynamic-title">{dynamicTitles[currentIndex]}</span></h1>
          <p className='home-description'>Je suis un développeur front-end junior passionné par l'apprentissage et la création de sites web innovants. Mon objectif est de développer mes compétences et de contribuer à des projets web excitants tout en acquérant de l'expérience dans le domaine du développement front-end.</p>
          <Link to="/about" className='btn-about'>À propos</Link>
        </div>
      </div>
    </main>
  );
}

export default Home;
