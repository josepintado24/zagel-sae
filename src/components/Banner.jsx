import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import bannerImage from '../img/bg-1.jpeg';

function Banner() {
  return (
    <div className="banner container-fluid">
      <div className="row align-items-center p-5">
        {/* Imagen */}
        <div className="col-md-6">
           <div className='img'>
            <svg xmlns="http://www.w3.org/2000/svg" width="400" height="auto" viewBox="0 0 51 40" fill="none">
                <path d="M43.5543 24.0708H31.4757V36.1494H43.5543V24.0708Z" fill="#FE004E"></path>
                <path d="M7.24832 0V12.0786H23.0024L7.24292 27.7086L15.6084 36.1442C15.6084 36.1442 41.741 10.2436 41.9245 10.0493C43.1388 8.75405 44.2452 6.34695 43.0633 3.58905C42.1566 1.468 40.1381 0.188897 37.9091 0.0215883C37.758 0.0107941 37.6014 0.00539707 37.4449 0.00539707H7.24832V0Z" fill="#FE004E"></path>
            </svg>
                <span>SAE A TU ALCANCE</span>
           </div>
        </div>
        
        {/* Texto al costado */}
        <div className="col-md-6">
          <div className="banner-text">
              <h2>Tu éxito comienza con un solo clic. Aprovecha al máximo nuestra plataforma con ayuda para alcanzar tus metas.</h2>
            {/* Aquí puedes agregar más contenido si es necesario */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
