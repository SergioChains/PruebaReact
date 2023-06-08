import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from 'react';
import Image1 from './images/imagen1.jpg';
import Image2 from './images/imagen2.png';
import Image3 from './images/imagen3.jpg';

const images = [
  { src: Image1, alt: 'Fotografía 1' },
  { src: Image2, alt: 'Fotografía 2' },
  { src: Image3, alt: 'Fotografía 3' }
];

function App() {


  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="App">

<header className="bg-black text-lg text-white">
      <div className="container mx-auto bg-black flex items-center justify-between p-4">
        <img src={logo} className="h-8" alt="logo" />
        <nav className="space-x-4">
          <a href="Section-1" className="text-white hover:text-gray-300">Inicio</a>
          <a href="Section-2" className="text-white hover:text-gray-300">Inventario</a>
          <a href="Section-3" className="text-white hover:text-gray-300">Quiero vender</a>
          <a href="Section-4" className="text-white hover:text-gray-300">Contacto</a>
          <a href="Section-5" className="text-white hover:text-gray-300">Preguntas frecuentes</a>
        </nav>
      </div>
    </header>

      <div className="Section-One">
      <div className="bg-black flex justify-center items-center h-screen bg-gray-100">
          <div className="flex w-full">
            <figure className="w-1/2 vertical-align: middle">
            <img
              src={images[currentImage].src}
              alt={images[currentImage].alt}
              className="w-full h-auto transition-opacity duration-500"/>
            </figure>
            <div className="w-1/2 p-8">
              <h2 className="text-2xl font-bold mb-4">Formulario</h2>
              <input
                type="text"
                placeholder="Nombre"
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded"
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded"
              />
              <textarea
                placeholder="Mensaje"
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded"
              ></textarea>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    

    <div className="Section-Two">
      <body>
        <div>    
           <h1 className=" text-4xl font-bold mb-4 font-Graduate">ENCUENTRA EL AUTO QUE NECESITAS</h1>
           <div className="carousel grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className={`w-full h-auto transition-opacity duration-500 ${
                  index === currentImage ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>
        </div>
        <div>
        </div>
      </body>
    </div>
    <div className="Section-Three">
      <body>
          <h1>Said y Mau me la jalan</h1>
      </body>
    </div>
    <div className="Section-Four">
      <body>
          <h1>Said y Mau me la jalan</h1>
      </body>
    </div>
    <div className="Section-Five">
      <body>
          <h1>Said y Mau me la jalan</h1>
      </body>
    </div>

  <footer className='Foot'>
    <h2>
      Este es para el footer
    </h2>
  </footer>
</div>
 );
   }


export default App;
