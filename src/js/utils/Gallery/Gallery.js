import React, { useState } from "react";
import css from "./Gallery.scss"; 

const images = [
  {
    id: 1,
    src: "assets/coralimage1.jpeg",
    alt: "Great Barrier Reef, Australia",
    description:
      "The world’s largest coral reef system, home to thousands of species. It’s a UNESCO World Heritage Site, currently threatened by bleaching and climate change.",
  },
  {
    id: 2,
    src: "assets/coralimage2.jpeg",
    alt: "Tubbataha Reefs, Philippines",
    description:
      "A pristine reef in the Sulu Sea, known for its high biodiversity. Protected as a marine park and recognized for sustainable conservation efforts.",
  },
  {
    id: 3,
    src: "assets/coralimage3.jpeg",
    alt: "Belize Barrier Reef, Belize",
    description:
      "The second-largest reef system in the world. Famous for the Great Blue Hole and diverse marine life including manatees and sea turtles.",
  },
  {
    id: 4,
    src: "assets/coralimage4.jpeg",
    alt: "New Caledonia Barrier Reef, New Caledonia (France)",
    description:
      "Surrounds the island with vivid blue lagoons and rare species. It is part of one of the world's largest marine parks.",
  },
  {
    id: 5,
    src: "assets/coralimage5.jpeg",
    alt: "Fiji Reefs, Fiji",
    description:
      "Known as the 'Soft Coral Capital of the World'. Fiji’s reefs are incredibly colorful and support local communities and tourism.",
  },
  {
    id: 6,
    src: "assets/coralimage6.jpeg",
    alt: "Maldives Atolls, Maldives",
    description:
      "Coral atolls form the foundation of this island nation. Vital for its tourism industry, but rising sea temperatures pose a serious threat.",
  },
  {
    id: 7,
    src: "assets/coralimage7.jpeg",
    alt: "Red Sea Coral, Egypt",
    description:
      "Resilient coral ecosystems found in warm, salty waters. Known for their unique adaptation and vibrant reef fish.",
  },
  {
    id: 8,
    src: "assets/coralimage8.jpeg",
    alt: "Andaman and Nicobar Islands, India",
    description:
      "Rich coral diversity across shallow tropical waters. Some areas are now marine reserves to help curb bleaching and overfishing.",
  },
  {
    id: 9,
    src: "assets/coralimage9.jpeg",
    alt: "Raja Ampat, Indonesia",
    description:
      "Home to the richest coral reef biodiversity on Earth. Over 75% of the world’s coral species are found in this region.",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className={css.app}>
      <div className={css.gallery}>
        {images.map((img) => (
          <div
            className={css.item}
            key={img.id}
            onClick={() => setSelectedImage(img)}
          >
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className={css.detail} onClick={() => setSelectedImage(null)}>
          <img src={selectedImage.src} alt={selectedImage.alt} />
          <div className={css.content}>
            <div className={css.title}>{selectedImage.alt}</div>
            <div className={css.description}>{selectedImage.description}</div>
            <div className={css.secondary}>Click anywhere to close</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
