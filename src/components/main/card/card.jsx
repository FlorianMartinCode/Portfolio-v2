import React from 'react';

function Card({ cover, alt, title, url }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="card-link">
      <article>
        <img src={cover} alt={alt} />
        <h3>{title}</h3>
      </article>
    </a>
  );
}

export default Card;