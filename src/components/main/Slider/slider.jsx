import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../../../Data/data.json';

function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const portfolioData = data['portfolio-data'];
    const Project = portfolioData[currentIndex];

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? portfolioData.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === portfolioData.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="slider">
            <button onClick={prevSlide}>Précédent</button>
            <div>
                <Link to={Project.url} target="_blank" rel="noopener noreferrer">
                    <img src={Project.cover} alt={Project.title} />
                    <h1>{Project.title}</h1>
                </Link>
            </div>
            <button onClick={nextSlide}>Suivant</button>
        </div>
    );
}

export default Slider;
