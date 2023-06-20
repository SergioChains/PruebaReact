import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
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
    <div className="bg-black p-6 rounded-md shadow hover:shadow-[0_35px_60px_-15px_rgba(255,255,255,255)]">
      <div className="mb-4">
        <img src={imageUrl} alt={title} className="w-full h-auto rounded-full" />
      </div>
      <h2 className="text-xl font-bold mb-2s">{title}</h2>
      <p className='text-xl'>{content}</p>
    </div>
  );
}

function App() {

  const cards = [
    {
      title: '---------',
      content: 'Vehiculos garantizados y confiables',
      imageUrl: 'https://c8.alamy.com/compes/pex7ej/icono-de-coche-ilustracion-vectorial-negro-sobre-fondo-blanco-pex7ej.jpg'
    },
    {
      title: '---------',
      content: 'Pagos seguros y sin riesgos',
      imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/000/357/048/small/3__2821_29.jpg'
    },
    {
      title: '---------',
      content: 'Proceso seguro y rapido',
      imageUrl: 'https://png.pngtree.com/png-vector/20190129/ourlarge/pngtree-document-vector-icon-png-image_355823.jpg'
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
  
  // document.addEventListener('DOMContentLoaded', () => {
  //   const elementosCarousel = document.querySelectorAll('.carousel');
  //   MIDIAccess.Carousel.init(elementosCarousel, {
  //     duration: 150,
  //     dist: -80,
  //     shift: 5,
  //     padding: 5,
  //     numVisible: 3,
  //     indicators: true,
  //     noWrap: false
  //   });
  // });

  return (
    
<div className="App">


    <header className="bg-black text-white font-serif">
        <div className="container mx-auto flex items-center justify-between p-4">
          <img src={logo} className="h-12 md:h-24" alt="logo" />
          <nav className="space-x-4 text-base md:text-xl">
            {/* <a href="#Section-1" className="text-white text-3xl hover:text-blue-500 hover:underline">Inicio</a> */}
            <a href="#Section-1" className="text-white text-3xl hover:text-blue-500 hover:underline">Inventario</a>
            <a href="#Section-1" className="text-white text-3xl hover:text-blue-500 hover:underline">Quiero vender</a>
            <a href="#Section-Four" className="text-white text-3xl hover:text-blue-500 hover:underline">Contacto</a>
            <a href="#Section-Four" className="text-white text-3xl hover:text-blue-500 hover:underline">Preguntas frecuentes</a>
          </nav>
        </div>
      </header> 

    
<div className='flex font-serif'>
    <section id="Section-1" className="bg-black p-20 w-screen h-auto content-center justify-center items-center">
        <div className="container mx-auto content-center justify-center items-center w-auto h-auto">
          <div className="flex justify-center content-center justify-center items-center w-auto h-auto">
            <img src={images[currentImage].src} alt={images[currentImage].alt} className="w-604px h-553px content-center justify-center items-center rounded-lg" />
          </div>
        </div>
      </section>

      <div className="bg-black w-screen p-20 ">
      <section className='SectionFor bg-black w-589px h-693px shadow hover:shadow-[20px_40px_60px_-15px_rgba(255,255,255,255)]'>
              <h2 className="text-2xl font-bold font-Graduate mb-4 text-white">¡TE COMPRAMOS TU AUTO!</h2>
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
              <div className='flex column content-between justify-end'>
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
              
      </section>
      </div>
              
              </div>


    <div id='Section-Two' className="Section-Two font-serif">

{/* <div className='container'>
  <div className='row'>
    <div className='col s12'>
      <div className='carousel center-align'>
        <div className='carousel-item'>
          <div className='linea-sivision'>
            <img src='images/imagen1.jpg' alt=''></img>
          </div>
        </div>
      </div>
      <div className='carousel center-align'>
        <div className='carousel-item'>
          <div className='linea-sivision'>
            <img src='images/imagen2.jpg' alt=''></img>
          </div>
        </div>
      </div>
      <div className='carousel center-align'>
        <div className='carousel-item'>
          <div className='linea-sivision'>
            <img src='images/imagen3.jpg' alt=''></img>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */}


     <body>
        <div className='font-serif'>    
           <h1 className=" text-4xl font-bold mb-4">ENCUENTRA EL AUTO QUE NECESITAS</h1>
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
    <div id="Section-Three" className="Section-Three bg-gray-100 py-10 font-serif">
      <body>
        <div>
            <h1 className='text-4xl font-bold mb-4 font-serif'>¡Somos tu mejor opcion!</h1>
        </div>
        <div className="container mx-auto font-serif">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cards.map((card, index) => (
              <Card key={index} title={card.title} content={card.content} imageUrl={card.imageUrl} />
            ))}
          </div>
          </div>
      </body>
    </div>
    <div id='Section-Four' className="Section-Four font-serif">
          <div><h1 className='text-4xl font-bold mb-2 text-white bg-black'>KUMO MOTORS</h1>
          <h2 className='text-lg'>Te podria interesar</h2>
   </div>
<hr></hr>
<div class="">
    <div class="grid grid-cols-2">
      <div class="col-sm-6 col-sm-push-6">
        <h2 className='text-center text-2xl'>PREGUNTAS FRECUENTES</h2>
        <div class="row">
          <div class="col-sm-6">
        <li>¿Como vender mi auto?</li>
          </div>
          <div class="col-sm-6">
            <li>¿Como compro un auto?</li>
          </div>
          <div class="col-sm-6">
            <li>¿Que autos tienen?</li>
          </div>
          <div class="col-sm-6">
         <li> <a className='text-white hover:text-blue-500 hover:underline' href="https://api.whatsapp.com/send?phone=%2B529988807458&data=ARDBBY6AKTZiCjnexUpEKk-Tis_khlkk1mc6IKV_w0KXjUOLTcXUKKbjY5yMaBUXqVhFPz1bj-oyg97kuTUbTTTvQmXF5DBzU--q08clS5DDxHNzv-Zl75PRRMSIvOUBJtx7K1RxNZ-VJTNekZiRRrMx6Q&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR0XpXYQgTtFLHP5CM2qyI3lyAFKCHafei0LcgaM-iyyIhMYtCH4FOxcPQk">Contacto: 9988807458</a></li>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-sm-pull-6">
        <br></br>
        <div class="row">
          <div class="col-sm-6">
          <li><i class="fa-solid fa-phone"></i> <a href="https://api.whatsapp.com/send?phone=%2B529988807458&data=ARDBBY6AKTZiCjnexUpEKk-Tis_khlkk1mc6IKV_w0KXjUOLTcXUKKbjY5yMaBUXqVhFPz1bj-oyg97kuTUbTTTvQmXF5DBzU--q08clS5DDxHNzv-Zl75PRRMSIvOUBJtx7K1RxNZ-VJTNekZiRRrMx6Q&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR0XpXYQgTtFLHP5CM2qyI3lyAFKCHafei0LcgaM-iyyIhMYtCH4FOxcPQk">Telefono: 9988807458</a></li>
          </div>
          <div class="col-sm-6">
          <li><i class="fa-solid fa-envelope"></i> <a href="mailto:kumomotors_ventas@hotmail.com?subject=Contactar&body=Buenas%20tardes%2C%20quisiera%20ponerme%20en%20contacto%20para%20obtener%20mas%20informaci%C3%B3n.%20">Correo Electrónico </a></li>
          </div>
          <div class="col-sm-6">
            <li><a href="https://goo.gl/maps/RLBDU7EaGMWbS1M19">Direccion</a></li>
          </div>
        </div>
      </div>
    </div>
  </div>
           </div>
    
    <div className="bg-black height-auto width-auto font-serif">
      <div className='bg-black'>
        <br></br>
        <br></br>
        <br></br>
      <h1 className='text-4xl font-bold mb-4 font-Graduate text-white bg-black  inset-x-0 top-0'>Ven a visitarnos</h1>
      </div>
      <div className='container mx-auto items-center content-center p-10 map-responsive'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.283398881777!2d-86.83787592409493!3d21.141117183908754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2bbcccf5f36f%3A0x9292707424b50383!2sKumo%20Motors%20Seminuevos!5e0!3m2!1ses!2smx!4v1687276898673!5m2!1ses!2smx" width="1224" height="600" content='center' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d657.8364279490553!2d-86.83550633444858!3d21.14106167821356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2bbcccf5f36f%3A0x9292707424b50383!2sKumo%20Motors%20Seminuevos!5e0!3m2!1ses!2smx!4v1686599551497!5m2!1ses!2smx" width="1500" height="600" content='center'  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
   */}
   </div>
       </div>
<br className='bg-black'></br>
<br className='bg-black'></br>
    <footer className="site-footer font-serif">
    
        <div class="row">
    
          <div class="col-xs-6 col-md-3">
            <h6>Contacto: </h6>
            <ul class="footer-links">
              <li><i class="fa-solid fa-phone"></i> <a href="https://api.whatsapp.com/send?phone=%2B529988807458&data=ARDBBY6AKTZiCjnexUpEKk-Tis_khlkk1mc6IKV_w0KXjUOLTcXUKKbjY5yMaBUXqVhFPz1bj-oyg97kuTUbTTTvQmXF5DBzU--q08clS5DDxHNzv-Zl75PRRMSIvOUBJtx7K1RxNZ-VJTNekZiRRrMx6Q&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR0XpXYQgTtFLHP5CM2qyI3lyAFKCHafei0LcgaM-iyyIhMYtCH4FOxcPQk">9988807458</a></li>
              <li><i class="fa-solid fa-envelope"></i> <a href="mailto:kumomotors_ventas@hotmail.com?subject=Contactar&body=Buenas%20tardes%2C%20quisiera%20ponerme%20en%20contacto%20para%20obtener%20mas%20informaci%C3%B3n.%20">Correo Electrónico </a></li>
       
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Redes Sociales</h6>
            <ul class="footer-links">
              <li><i class="fa-brands fa-facebook"></i> <a href="https://www.facebook.com/KumoMotors">Facebook</a></li>
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
              <li><a class="facebook" href="https://www.facebook.com/KumoMotors"><i class="fab fa-xl fa-facebook"></i></a></li>
              <li><a class="whatsapp" href="https://api.whatsapp.com/send?phone=%2B529988807458&data=ARDBBY6AKTZiCjnexUpEKk-Tis_khlkk1mc6IKV_w0KXjUOLTcXUKKbjY5yMaBUXqVhFPz1bj-oyg97kuTUbTTTvQmXF5DBzU--q08clS5DDxHNzv-Zl75PRRMSIvOUBJtx7K1RxNZ-VJTNekZiRRrMx6Q&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR0XpXYQgTtFLHP5CM2qyI3lyAFKCHafei0LcgaM-iyyIhMYtCH4FOxcPQk"><i class="fa-brands fa-xl fa-whatsapp"></i></a></li></ul>
          </div>
        </div>
      
</footer>
    </div>
 );
   }


export default App;
