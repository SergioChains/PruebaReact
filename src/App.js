import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from 'react';
// import Card from './Card';
import Image1 from './images/imagen1.jpg';
import Image2 from './images/imagen2.jpg';
import Image3 from './images/imagen3.jpg';
// import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

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
          <div className="flex w-auto bg-black">
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
    
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d657.8364279490553!2d-86.83550633444858!3d21.14106167821356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2bbcccf5f36f%3A0x9292707424b50383!2sKumo%20Motors%20Seminuevos!5e0!3m2!1ses!2smx!4v1686599551497!5m2!1ses!2smx" width="1500" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
     
    </div>

    <footer className="site-footer">
    
        <div class="row">
    
          <div class="col-xs-6 col-md-3">
            <h6>Contacto</h6>
            <ul class="footer-links">
              <li><a href="https://api.whatsapp.com/send?phone=%2B529988807458&data=ARDBBY6AKTZiCjnexUpEKk-Tis_khlkk1mc6IKV_w0KXjUOLTcXUKKbjY5yMaBUXqVhFPz1bj-oyg97kuTUbTTTvQmXF5DBzU--q08clS5DDxHNzv-Zl75PRRMSIvOUBJtx7K1RxNZ-VJTNekZiRRrMx6Q&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR0XpXYQgTtFLHP5CM2qyI3lyAFKCHafei0LcgaM-iyyIhMYtCH4FOxcPQk">9988807458</a></li>
              <li><a href="mailto:kumomotors_ventas@hotmail.com?subject=Contactar&body=Buenas%20tardes%2C%20quisiera%20ponerme%20en%20contacto%20para%20obtener%20mas%20informaci%C3%B3n.%20">Correo Electrónico </a></li>
       
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Redes Sociales</h6>
            <ul class="footer-links">
              <li><a href="https://www.facebook.com/KumoMotors">Facebook</a></li>
            </ul>
          </div>
        </div>
        <hr></hr>
    
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2023 All Rights Reserved by :
         <a href="#"> KumoMotors</a>.
            </p>
          </div>
          
          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="https://www.facebook.com/KumoMotors"><i class="fab fa-facebook"></i></a></li>
              <li><a class="whatsapp" href="https://api.whatsapp.com/send?phone=%2B529988807458&data=ARDBBY6AKTZiCjnexUpEKk-Tis_khlkk1mc6IKV_w0KXjUOLTcXUKKbjY5yMaBUXqVhFPz1bj-oyg97kuTUbTTTvQmXF5DBzU--q08clS5DDxHNzv-Zl75PRRMSIvOUBJtx7K1RxNZ-VJTNekZiRRrMx6Q&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR0XpXYQgTtFLHP5CM2qyI3lyAFKCHafei0LcgaM-iyyIhMYtCH4FOxcPQk"><i class="fab fa-WhatsApp"></i></a></li></ul>
          </div>
        </div>
      
</footer>
    </div>
 );
   }




  //  <footer className="bg-gray-900 py-8">
  //     <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
  //       <div className="text-white mb-4 md:mb-0">
  //         <h4 className="text-lg font-bold">Contacto</h4>
  //         <p>Email: ejemplo@example.com</p>
  //         <p>Teléfono: 123-456-7890</p>
  //         <p>Dirección: Calle Principal, Ciudad</p>
  //       </div>
  //       <div className="flex space-x-4">
  //         <a href="#" className="text-white hover:text-gray-300">
  //           <FaFacebook size={24} />
  //         </a>
  //         <a href="#" className="text-white hover:text-gray-300">
  //           <FaTwitter size={24} />
  //         </a>
  //         <a href="#" className="text-white hover:text-gray-300">
  //           <FaInstagram size={24} />
  //         </a>
  //       </div>
  //     </div>
  //   </footer>
   

export default App;
