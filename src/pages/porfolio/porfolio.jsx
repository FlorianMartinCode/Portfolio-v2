import React, { useState } from 'react';
import Slider from '../../components/main/Slider/slider';
import Card from '../../components/main/card/card';
import data from '../../Data/data.js';

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openCardId, setOpenCardId] = useState(null);

  const sortedData = data["portfolio-data"].sort((a, b) => {
    if (a.category < b.category) {
      return 1;
    }
    if (a.category > b.category) {
      return -1;
    }
    return 0;
  });


  let filteredData = sortedData;

  if (selectedCategory !== 'all') {
    filteredData = sortedData.filter(item => item.category === selectedCategory);
  }

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div>
      <Slider />
      <section className="card-container">
        <div>
          <label htmlFor="categorySelect"></label>
          <select
            id="categorySelect"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="all">Toutes les catégories</option>
            <option value="OpenClassrooms">OpenClassrooms</option>
            <option value="Personnel">Personnel</option>
          </select>
        </div>

        <div className='cards-all'>
          {filteredData.length === 0 ? (
            <p>Rien à afficher</p>
          ) : (
            filteredData.slice().reverse().map((item) => (
              <Card
                key={item.id}
                cover={item.cover}
                alt={item.alt}
                title={item.title}
                url={item.url}
                githubUrl={item.githubUrl}
                logos={item.logos}
                description={item.description}
                openCardId={openCardId}
                setOpenCardId={setOpenCardId}
              />
            ))
          )}
        </div>
      </section>
    </div>
  );
}

export default Portfolio;