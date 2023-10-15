import React from 'react';
import { Link } from 'react-router-dom';

function Card({ cover, alt, title, url, githubUrl, description, logos, openCardId, setOpenCardId }) {
  const isDescriptionVisible = openCardId === title;

  const toggleDescriptionVisibility = () => {
    if (isDescriptionVisible) {
      setOpenCardId(null);
    } else {
      setOpenCardId(title);
    }
  };

  return (
    <div className={`card-link ${isDescriptionVisible ? 'active' : ''}`} onClick={toggleDescriptionVisibility}>
      <article>
        <img src={cover} alt={alt} />
        <h3>{title}</h3>
        {isDescriptionVisible && (
          <div className="description">
            <div className="card-logos">
              {logos.map((logo, index) => (
                <img key={index} src={logo} alt={`Logo ${title} ${index}`} className="card-logo" />
              ))}
            </div>
            <p>{description}</p>
            {url && (
              <Link to={url} target="_blank" rel="noopener noreferrer">
                Visiter le site
              </Link>
            )}
            {githubUrl && (
              <Link to={githubUrl} target="_blank" rel="noopener noreferrer">
                Voir sur GitHub
              </Link>
            )}
          </div>
        )}
      </article>
    </div>
  );
}

export default Card;
