import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/card.css'; // Asegúrate de tener estilos adicionales para el efecto flip
import card1Front from '../img/card1-a.jpeg';
import card1Back from '../img/card1-b.jpeg';
import card2Front from '../img/card2-a.jpeg';
import card2Back from '../img/card2-b.jpeg';
import card3Front from '../img/card3-a.jpeg';
import card3Back from '../img/card3-b.jpeg';

function CardSection() {
  const cards = [
    {
      frontImage: card1Front,
      backImage: card1Back,
    },
    {
        frontImage: card2Front,
        backImage: card2Back,
    },
    {
        frontImage: card3Front,
        backImage: card3Back,
    },
  ];

  return (
    <div className="container mt-5">
        <h2 className='text-center'>Servicios populares</h2>
      <div className="row my-5">
        {cards.map((card, index) => (
         <div className="col-6 col-md-4 mb-4" key={index}>
            <div className="flip-box">
              <div className="flip-box-inner">
                <div className="flip-box-front">
                    <img src={card.frontImage} alt="Front" className="img-fluid" />
                </div>
                <div className="flip-box-back">
                <img src={card.backImage} alt="Front" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardSection;
