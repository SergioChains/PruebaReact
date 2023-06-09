import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from 'react';
// import Card from './Card';
import Image1 from './images/imagen1.jpg';
import Image2 from './images/imagen2.jpg';
import Image3 from './images/imagen3.jpg';

const images = [
  { src: Image1, alt: 'Fotografía 1' },
  { src: Image2, alt: 'Fotografía 2' },
  { src: Image3, alt: 'Fotografía 3' }
];
 
function Card({ title, content, imageUrl }) {
  return (
    <div className="bg-black p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <img src={imageUrl} alt={title} className="w-full h-auto rounded-md" />
      </div>
      <h2 className="text-xl font-bold mb-2s">{title}</h2>
      <p className='text-xl'>{content}</p>
    </div>
  );
}

function App() {

  const cards = [
    {
      title: '------',
      content: 'Vehiculos garantizados y confiables',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
    },
    {
      title: '-----',
      content: 'Pagos seguros y sin riesgos',
      imageUrl: 'https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg'
    },
    {
      title: '-----',
      content: 'Proceso seguro y rapido',
      imageUrl: 'https://cdn.pixabay.com/photo/2017/10/17/16/10/fantasy-2861107_1280.jpg'
    }
  ];

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
      <div className="bg-black flex align-center justify-center items-center h-screen border-white">
          <div className="flex w-auto bg-white">
            <figure className="w-1/2 content-center">
            <img
              src={images[currentImage].src}
              alt={images[currentImage].alt}
              className="w-full h-auto transition-opacity duration-500"/>
            </figure>
            <div className="w-1/2 p-8 shadow-white">
              <h2 className="text-2xl font-bold mb-4 text-white">¡Te compramos tu auto!</h2>
              <div className='display flex'>
              <input 
                type="text"
                placeholder="Marca"
                className="bg-black w-full mb-4 px-4 py-2 border border-white text-white text-xl rounded mr-2 rounded-md"
              />
              <input
                type="text"
                placeholder="Modelo"
                className="bg-black w-full mb-4 px-4 py-2 border border-white text-xl text-white rounded ml-2 rounded-md"
              />
              </div>
              <div className='display flex'>
              <input
                type="text"
                placeholder="Año"
                className="bg-black w-full mb-4 px-4 py-2 border border-white text-xl text-white rounded mr-2 rounded-md"
              />
              <input
                type="text"
                placeholder="Version"
                className="bg-black w-full mb-4 px-4 py-2 border border-white text-xl text-white rounded ml-2 rounded-md"
              />
              </div>
              
              <input
                type="email"
                placeholder="Correo electronico"
                className="bg-black w-full mb-4 px-4 py-2 border border-white text-xl text-white rounded-md"
              />
              <input
                type="text"
                placeholder="Telefono"
                className="bg-black w-full mb-4 px-4 py-2 border border-white text-xl text-white rounded-md"
              />
              <textarea
                placeholder="Motivo de venta"
                className="bg-black w-full mb-4 px-4 py-2 border border-white text-xl text-white rounded-md"
              ></textarea>
              <div className='content-end content-between'>
              <button
                type="submit"
                className="w-26 px-4 py-1 bg-[#1D44B9] text-xl text-white rounded-md hover:bg-blue-600 ml-12"
              >
                Limpiar
              </button>
              <button
                type="submit"
                className="w-30 px-4 py-1 bg-[#DC5F00] text-xl text-white rounded-md hover:bg-orange-500 ml-2"
              >
                Contactar
              </button>
              </div>
              
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
    <div className="Section-Three bg-gray-100 py-10">
      <body>
        <div>
            <h1 className='text-4xl font-bold mb-4 font-Graduate'>¡Somos tu mejor opcion!</h1>
        </div>
        <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cards.map((card, index) => (
              <Card key={index} title={card.title} content={card.content} imageUrl={card.imageUrl} />
            ))}
          </div>
          </div>
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
