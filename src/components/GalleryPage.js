import React from 'react';
import './GalleryPage.css';

const GalleryPage = () => {
  const images = [
  ];

  return (
    <section id="gallery" className="gallery">
      <h2 data-aos="fade-up">Gallery</h2>
      <div className="gallery-container">
        {images.map((image, index) => (
          <div key={index} className="gallery-item" data-aos="zoom-in">
            <img src={image} alt={`Gallery Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryPage;