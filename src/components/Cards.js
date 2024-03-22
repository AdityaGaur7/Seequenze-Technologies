import React, { useState, useEffect } from 'react';
import "./Cards.css"
const Cards = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('https://picsum.photos/v2/list?page=1&limit=6');
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
    fetchImages();
  }, []);

  return (
    <>
    <h1>My Cards</h1>
    <div className="image-gallery">
      {images.map(image => (
       
        <img key={image.id} src={image.download_url} alt={image.author} />
       
      ))}
    </div>
    </>
  );
};

export default Cards;
