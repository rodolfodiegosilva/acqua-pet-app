import React from 'react';
import './FishGallery.css';

const FishGallery = () => {
  const fishList = [
    {
      name: 'Peixe Beta',
      image: 'https://th.bing.com/th/id/R.5f71d8c182175a1d295eb5d81f584c49?rik=hr%2bVJHJ0%2bGBXnw&pid=ImgRaw&r=0',
    },
    {
      name: 'Neon Tetra',
      image: 'https://th.bing.com/th/id/R.7ffbd2820b671858b930156e15281e0c?rik=jgLL0xK4W9Dn0A&pid=ImgRaw&r=0',
    },
    {
      name: 'Guppy',
      image: 'https://th.bing.com/th/id/R.b340505756b0ec229e806b3214c06395?rik=iHbMFE8QsPFgpQ&pid=ImgRaw&r=0',
    },
    {
      name: 'Disco',
      image: 'https://th.bing.com/th/id/R.99c9d587cd4d8e8255399b169095cfb9?rik=XNc4WC3qzjyqSQ&pid=ImgRaw&r=0',
    },
  ];

  return (
    <section id="fish" className="fish-gallery">
      <div className="container">
        <h2>Peixes Ornamentais</h2>
        <p>Conheça nossa seleção especial de peixes ornamentais.</p>
        <div className="gallery-grid">
          {fishList.map((fish, index) => (
            <div className="fish-item" key={index}>
              <img src={fish.image} alt={fish.name} />
              <h3>{fish.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FishGallery;
