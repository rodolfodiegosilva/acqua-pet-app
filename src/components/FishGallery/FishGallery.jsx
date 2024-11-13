// src/components/FishGallery/FishGallery.jsx
import React, { useState } from 'react';
import Slider from 'react-slick';
import './FishGallery.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const fishList = [
  {
    name: 'Peixe Beta',
    images: [
      'https://th.bing.com/th/id/R.5f71d8c182175a1d295eb5d81f584c49?rik=hr%2bVJHJ0%2bGBXnw&pid=ImgRaw&r=0',
      'https://jpimg.com.br/uploads/2023/03/5-duvidas-sobre-cuidados-com-o-peixe-betta.jpg',
      'https://super.abril.com.br/wp-content/uploads/2021/05/Uma-breve-historia-do-peixe-Betta.jpg?crop=1&resize=1212,909',
      'https://d1kq2dqeox7x40.cloudfront.net/images/news_uploads/legacy/0/157287.jpg?w=1200',
      'https://www.petz.com.br/blog/wp-content/uploads/2019/03/como-cuidar-do-peixe-beta.jpg',
    ],
    description: 'O Peixe Beta é conhecido por suas cores vibrantes e caudas elaboradas.',
  },
  {
    name: 'Neon Tetra',
    images: [
      'https://aquarioepeixes.com.br/wp-content/uploads/2024/02/Peixe-Tetra-Neon-jpg.webp',
      'https://images.tcdn.com.br/img/img_prod/749804/tetra_neon_cardinal_1_a_3_cm_paracheirodon_axelrodi_913_1_fdf95d55f3a9e2695812dc4331475fef.jpg',
      'https://images.tcdn.com.br/img/img_prod/749804/tetra_neon_innesi_jumbo_reproduzido_em_aquarios_2_5_a_4_cm_paracheirodon_innesi_371_1_fc4317e9aae7ad349cfb30b71e8d2532.jpg',
      'https://images.tcdn.com.br/img/img_prod/648834/tetra_neon_verde_0_5_a_1_cm_paracheirodons_simulans_4311_1_b97de21754c06874c006d0db5ccc4947.jpg',
      'https://aquarioepeixes.com.br/wp-content/uploads/2024/02/Peixe-Tetra-Arco-Iris-Neon-Amarelo-1024x563.webp',
    ],
    description: 'O Neon Tetra é um peixe pequeno e colorido, ideal para aquários comunitários.',
  },
  ,
  {
    name: 'Guppy',
    images: [
      'https://th.bing.com/th/id/R.b340505756b0ec229e806b3214c06395?rik=iHbMFE8QsPFgpQ&pid=ImgRaw&r=0',
      'https://th.bing.com/th/id/R.b340505756b0ec229e806b3214c06395?rik=iHbMFE8QsPFgpQ&pid=ImgRaw&r=0',
    ],
    description: 'O Guppy é um peixe pequeno e colorido, ideal para aquários comunitários.',
  },
  ,
  {
    name: 'Disco',
    images: [
      'https://th.bing.com/th/id/R.99c9d587cd4d8e8255399b169095cfb9?rik=XNc4WC3qzjyqSQ&pid=ImgRaw&r=0',
      'https://th.bing.com/th/id/R.99c9d587cd4d8e8255399b169095cfb9?rik=XNc4WC3qzjyqSQ&pid=ImgRaw&r=0',
    ],
    description: 'O Disco é um peixe pequeno e colorido, ideal para aquários comunitários.',
  },
  // Adicione mais peixes conforme necessário
];

const FishGallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFish, setSelectedFish] = useState(null);

  const openModal = (fish) => {
    setSelectedFish(fish);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedFish(null);
    setModalOpen(false);
  };

  return (
    <section id="fish" className="fish-gallery">
      <div className="container">
        <h2>Peixes Ornamentais</h2>
        <p>Conheça nossa seleção especial de peixes ornamentais.</p>
        <div className="gallery-grid">
          {fishList.map((fish, index) => (
            <div
              className="fish-item"
              key={index}
              onClick={() => openModal(fish)}
            >
              <img src={fish.images[0]} alt={fish.name} />
              <h3>{fish.name}</h3>
            </div>
          ))}
        </div>

        {modalOpen && selectedFish && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h2>{selectedFish.name}</h2>
              <Slider
                dots={true}
                infinite={true}
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
              >
                {selectedFish.images.map((image, idx) => (
                  <img key={idx} src={image} alt={`${selectedFish.name} ${idx + 1}`} />
                ))}
              </Slider>
              <p>{selectedFish.description}</p>
              <button className="close-button" onClick={closeModal}>Fechar</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FishGallery;
