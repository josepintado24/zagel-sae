import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/fonts.css'; // Importa el archivo CSS de las fuentes
import './App.css'; // Asegúrate de importar tus estilos generales
import Header from './components/Header.jsx';
import Banner from './components/Banner.jsx';
import Tarjetas from './components/Tarjetas.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Tarjetas />
      {/* <main className="container mt-5">
        <div className="row">
          <div className="col">
            <h2>Sección 1</h2>
            <p>Este es un párrafo en la primera sección.</p>
          </div>
          <div className="col">
            <h2>Sección 2</h2>
            <p>Este es un párrafo en la segunda sección.</p>
          </div>
        </div>
      </main> */}
    </div>
  );
}

export default App;
