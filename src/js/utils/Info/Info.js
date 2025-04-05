import React from 'react';
import css from './info.scss';

const InfoCard = () => {
  return (
    <div className={css["info-section"]}>
      <div className={css["info-text"]}>
        <h1>Preserving and protecting coral ecosystems</h1>
        <p>
          We're dedicated to raising awareness about the importance of coral reefs and the threats they face.
          Through innovative technology and community engagement, we aim to inspire a new generation of
          ocean conservationists.
        </p>
      </div>
      <div className={css["info-image"]}>
        <img
          src="https://mediaproxy.salon.com/width/1200/https://media2.salon.com/2024/05/bleached_coral_and_butterflyfish_2152127569.jpg"
          alt="Coral reef"
        />
      </div>
    </div>
  );
};

export default InfoCard;
