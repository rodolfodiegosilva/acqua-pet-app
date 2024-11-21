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
    {
      message: 'Recomendo a todos que procuram qualidade e bom atendimento.',
      author: 'Pedro L.',
    },
    {
      message: 'Meu gato nunca esteve tão feliz e saudável.',
      author: 'Sofia N.',
    },
    {
      message: 'Variedade incrível de produtos e preços justos.',
      author: 'Renato G.',
    },
    // Adicione mais depoimentos conforme necessário
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Mostrar 2 depoimentos por vez
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768, // Em telas menores que 768px
        settings: {
          slidesToShow: 1, // Mostrar apenas 1 depoimento
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
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
