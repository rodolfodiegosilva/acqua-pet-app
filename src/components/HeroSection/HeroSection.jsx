// src/components/HeroSection/HeroSection.jsx
import React, { useState, useEffect } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  

  const videos = [
    'https://my-portifolio-images.s3.us-east-2.amazonaws.com/video_hero_background.mp4',
    'https://my-portifolio-images.s3.us-east-2.amazonaws.com/video_hero_background.mp4',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 30000); // 30 segundos em milissegundos

    return () => clearInterval(interval);
  }, [videos.length]);

  return (
    <section className="hero-section">
      <div className="video-background">
        <video
          key={currentVideoIndex}
          src={videos[currentVideoIndex]}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
      <div className="hero-container">
        <div className="hero-content" data-aos="fade-up">
          <h1>Bem-vindo à AcquaPet Store</h1>
          <p>Desde 2017, cuidando do bem-estar dos seus animais de estimação.</p>
          <a href="#services" className="btn">Conheça nossos serviços</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
