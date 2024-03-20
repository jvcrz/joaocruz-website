import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap'
import './Slider.css';
import up_arrow from '../assets/up_arrow.svg';
import down_arrow from '../assets/down_arrow.svg';


const slides = [
    {
        title: 'Crypto Marketplace',
        text: 'Projeto de Marketplace para criptomoedas, protótipo feito para fins de estudo.',
        image: 'https://imgur.com/qz4wrjq.jpeg',
    },
    {
        title: 'Ana Cristina',
        text: 'Identidade visual criada para cursos de autopreservação feminina. Plataforma Hotmart, tema "O Diabo Veste Prada"',
        image: 'https://i.imgur.com/iGFPTUQ.jpeg',
    },
    {
        title: 'Lorem Ipsum',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://i.imgur.com/XpRRkYt.jpeg',
    },
    {
        title: 'Ipsum Lorem',
        text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
        image: 'https://i.imgur.com/bkuVoV8.jpeg',
    },
];

const Slider = () => {
  
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = slides.length;
    const slideImageRef = useRef(null); 
    const slideTextRef = useRef(null); 
  
    const navigateSlide = (direction) => {
      const newIndex = direction === 'up' ? (currentSlide - 1 + totalSlides) % totalSlides : (currentSlide + 1) % totalSlides;
      setCurrentSlide(newIndex);
    };
  
    useEffect(() => {
      // Animação com GSAP
      if (slideImageRef.current && slideTextRef.current) {
        gsap.fromTo(slideImageRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 });
        gsap.fromTo(slideTextRef.current, { y: -30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 });
      }
    }, [currentSlide]); 
  
    return (
      <div className="slider-container">
        <div className="text-content" ref={slideTextRef}>
          <h2>{slides[currentSlide].title}</h2>
          <p>{slides[currentSlide].text}</p>
        </div>
        <div className="controls">
          <button onClick={() => navigateSlide('up')}>
            <img src={up_arrow} alt="Previous slide" />
          </button>
          <button onClick={() => navigateSlide('down')}>
            <img src={down_arrow} alt="Next slide" />
          </button>
        </div>
        <div className="image-content" ref={slideImageRef}>
          <img src={slides[currentSlide].image} alt={`Slide ${currentSlide + 1}`} />
        </div>
      </div>
    );
  };
  
  export default Slider;