import React from 'react';

function Card({ cover, alt, title, url, description, openCardId, setOpenCardId }) {
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
            <p>{description}</p>
            <a href={url} target="_blank" rel="noopener noreferrer">
              Visiter le site
            </a>
          </div>
        )}
      </article>
    </div>
  );
}

export default Card;
