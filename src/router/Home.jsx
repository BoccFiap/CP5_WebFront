import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../CSS/Home.css";
import carro3 from "../assets/Byd8.png";
import carro2 from "../assets/Byd7.png";
import carro1 from "../assets/Byd6.png";
import slide1 from "../assets/Byd2.png";
import slide2 from "../assets/Byd3.png";
import slide3 from "../assets/Byd4.png";
import slide4 from "../assets/Byd5.png";
import carro4 from "../assets/Byd9.png";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [slide1, slide2, slide3, slide4];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 3000);
    return () => clearInterval(autoSlide); 
  }, []);

  return (
    <>
      <section className="secao1">
        <h1 className="titulo-home">Bem-vindo à BoccYD</h1>
        <div className="slideshow-container">

          <button className="prev-slide" onClick={prevSlide}>
            &#10094;
          </button>


          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? "active" : ""}`}
            >
              {index === currentSlide && (
                <img src={slide} alt={`Slide ${index}`} className="slide-image" />
              )}
            </div>
          ))}

          <button className="next-slide" onClick={nextSlide}>
            &#10095;
          </button>

          <div className="slide-indicators">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`indicator ${index === currentSlide ? "active" : ""}`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        </div>
        <div className='subtitulo-home1'>
          <h1 className="titulo-home">O seu carro eletrico aqui </h1>
          <p className='paragrafo-home'>Bem-vindo! Explore nossa seleção de carros elétricos</p>
        </div>

      </section>

      <section className="secao-cards">
        <h2 className="subtitulo-home">Explore nossos carros</h2>
        <div className="card-container">
          <div className="card">
            <img src={carro2} alt="SUV" className="card-image" />
            <div className="card-content">
              <h3 className="card-title"></h3>
              <p className="card-description"></p>
              <p className="card-price">R$ 215.000</p>
              <Link to='/produtos'><button className="card-button">Ver Mais</button></Link>
            </div>
          </div>

          
          <div className="card">
            <img src={carro1} alt="Sedan" className="card-image" />
            <div className="card-content">
              <h3 className="card-title"></h3>
              <p className="card-description"></p>
              <p className="card-price">R$ 635.000</p>
              <Link to='/produtos'><button className="card-button">Ver Mais</button></Link>
            </div>
          </div>

          
          <div className="card">
            <img src={carro4} alt="Hatchback" className="card-image" />
            <div className="card-content">
              <h3 className="card-title"></h3>
              <p className="card-description"></p>
              <p className="card-price">R$ 120.000</p>
              <Link to='/produtos'><button className="card-button">Ver Mais</button></Link>
            </div>
          </div>

          
          <div className="card">
            <img src={carro3} alt="Convertible" className="card-image" />
            <div className="card-content">
              <h3 className="card-title"></h3>
              <p className="card-description"></p>
              <p className="card-price">R$ 650.000</p>
              <Link to='/produtos'><button className="card-button">Ver Mais</button></Link>
            </div>
          </div>

          <div className="card">
            <img src={carro1} alt="Sedan" className="card-image" />
            <div className="card-content">
              <h3 className="card-title"></h3>
              <p className="card-description"></p>
              <p className="card-price">R$ 400.000</p>
              <Link to='/produtos'><button className="card-button">Ver Mais</button></Link>
            </div>
          </div>    

        </div>
      </section>
    </>
  );
};

export default Home;
