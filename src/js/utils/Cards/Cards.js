import React from 'react';
import css from './Cards.scss';

const reefData = [
  {
    id: 1,
    country: 'Australia',
    title: 'Great Barrier Reef',
    description: 'The world\'s largest coral reef system, home to thousands of species.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/ISS-45_StoryOfWater%2C_Great_Barrier_Reef%2C_Australia.jpg'
  },
  {
    id: 2,
    country: 'Caribbean Sea',
    title: 'Belize Barrier Reef',
    description: 'A UNESCO World Heritage site with over 100 coral species and 500 fish species.',
    image: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcT2L2yKkwiXfgheMEnegPV_ahVnhF_9S9_IVzkvFMz0QAHOpgIT6Wb1-5EIgICiu4CmHhCSbdW0pxB2yoODW56jKkMEDT1nr474cb_CJw'
  },
  {
    id: 3,
    country: 'Indonesia',
    title: 'Raja Ampat',
    description: 'One of the most biodiverse marine habitats on Earth.',
    image: 'https://www.papuaparadise.com/wp-content/uploads/2018/05/reef-1200x800.jpg'
  }
];

const Card = () => {
  return (
    <div className={css["reef-container"]}>
      <h1 className={css["reef-title"]}>Explore the world beneath the waves</h1>
      <p className={css["reef-subtitle"]}>
        Immerse yourself in the beauty and diversity of coral reef ecosystems from around the globe.
      </p>

      <div className={css["card-list"]}>
        {reefData.map((reef) => (
          <div key={reef.id} className={css["card"]}>
            <div className={css["image-box"]}>
              <img src={reef.image} alt={reef.title} />
              <span className={css["tag"]}>{reef.country}</span>
            </div>
            <div className={css["card-content"]}>
              <h2>{reef.title}</h2>
              <p>{reef.description}</p>
              <a href="#" className={css["explore-link"]}>Explore more</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
