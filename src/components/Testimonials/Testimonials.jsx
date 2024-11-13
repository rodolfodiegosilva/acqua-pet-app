// src/components/Testimonials/Testimonials.jsx
import React from 'react';
import Slider from 'react-slick';
import './Testimonials.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  const testimonials = [
    {
      message: 'Excelente atendimento! Meu cachorro adora ir ao AcquaPet Store.',
      author: 'Ana P.',
    },
    {
      message: 'Sempre muito cuidadosos e atenciosos com nossos pets.',
      author: 'Lucas R.',
    },
    {
      message: 'A melhor loja de peixes ornamentais de Manaus!',
      author: 'Mariana S.',
    },
    {
      message: 'Equipe altamente profissional e dedicada.',
      author: 'Carlos T.',
    },
    {
      message: 'Encontrei tudo o que precisava para meu aquário.',
      author: 'Fernanda M.',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2>Depoimentos</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-item" key={index}>
              <blockquote>
                “{testimonial.message}”
              </blockquote>
              <p>- {testimonial.author}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
