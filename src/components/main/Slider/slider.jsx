import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from '../../../Data/data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Slider() {
    const [currentIndex, setCurrentIndex] = useState(data['portfolio-data'].length - 1);
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

    useEffect(() => {
        const intervalId = setInterval(prevSlide, 5000);

        return () => clearInterval(intervalId);
    });

    return (
        <section className="slider">
            <div className='slider-link'>
                <Link to={Project.url} target="_blank" rel="noopener noreferrer">
                    <img className='cover' src={Project.cover} alt={Project.title} />
                </Link>
            </div>
            <button className='btn-left' onClick={prevSlide}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className='btn-right' onClick={nextSlide}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
            <ul className='bulletpoints'>
                {portfolioData.map((item, index) => (
                    <li
                        key={index}
                        className={index === currentIndex ? 'active' : ''}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </ul>
        </section>
    );
}

export default Slider;
