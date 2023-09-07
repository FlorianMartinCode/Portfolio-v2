import React, { useState, useEffect } from 'react';
import './home.scss'; // Importez le fichier SCSS
import { useTheme } from '../../themes/themes'
import PhotoDeProfil from '../../assets/photo-de-profil.png'
import HtmlImg from '../../assets/icon-skills/html.png'
import CssImg from '../../assets/icon-skills/css.png'
import SassImg from '../../assets/icon-skills/sass.png'
import JsImg from '../../assets/icon-skills/js.png'
import ReactImg from '../../assets/icon-skills/react.png'

function Home() {
  const { darkTheme} = useTheme();
  const homeClasses = darkTheme ? 'dark-theme' : 'light-theme';

  const dynamicTitles = ["Développeur Web", "Amoureux du Code"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dynamicTitles.length);
    }, 4000);

    return () => clearInterval(intervalId); // Nettoie l'intervalle lors de la désactivation du composant
  }, [dynamicTitles.length]);

  return (
    <main className={homeClasses}>
      <div className='home-content'>
        <figure className='home-pdp'>
          <img src={PhotoDeProfil} alt="Florian Martin" />
        </figure>
        <div className='home-icon-text'>
          <figure className='home-icon'>
            <img src={HtmlImg} alt="logo html" />
            <img src={CssImg} alt="logo css" />
            <img src={SassImg} alt="logo img" />
            <img src={JsImg} alt="logo js" />
            <img src={ReactImg} alt="logo react" />
          </figure>
          <h1 className='home-titre'>Florian Martin <span id="dynamic-title">{dynamicTitles[currentIndex]}</span></h1>
          <p className='home-description'>Je suis un développeur front-end expérimenté avec des compétences en HTML, CSS, SASS, JavaScript et React. Mon expertise me permet de créer des interfaces utilisateur interactives et esthétiques, en combinant une solide structure, un style impeccable, des fonctionnalités dynamiques et l'utilisation de composants réutilisables. Je suis toujours en quête d'apprentissage pour rester à la pointe des dernières tendances en développement web.</p>
        </div>
      </div>
    </main>
  );
}

export default Home;
