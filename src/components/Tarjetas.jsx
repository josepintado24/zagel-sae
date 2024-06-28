import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/card.css'; // Asegúrate de tener estilos adicionales para el efecto flip

function CardSection() {
  const cards = [
    {
      frontImage: 'path/to/frontImage1.jpg',
      backImage: 'path/to/backImage1.jpg',
    },
    {
      frontImage: 'path/to/frontImage2.jpg',
      backImage: 'path/to/backImage2.jpg',
    },
    {
      frontImage: 'path/to/frontImage3.jpg',
      backImage: 'path/to/backImage3.jpg',
    },
  ];

  return (
    <div className="container mt-4">
      <div className="row">
        {cards.map((card, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="flip-box">
              <div className="flip-box-inner">
                <div className="flip-box-front">
                  <h2>Hola</h2>
                </div>
                <div className="flip-box-back">
                  <h2>Hola2</h2>
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
