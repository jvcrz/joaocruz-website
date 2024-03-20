import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap'
import './Slider.css';
import up_arrow from '../assets/up_arrow.svg';
import down_arrow from '../assets/down_arrow.svg';


const slides = [
    {
        title: 'Crypto Marketplace',
        text: 'Projeto de Marketplace para criptomoedas, protótipo feito para fins de estudo.',
        image: 'https://lh3.googleusercontent.com/pw/AP1GczOzJEc-Q7oh5N9INcnS4-EzTLUzPeWhMzJ71yW4bpQaPoN9AfTisN5bGKAP_R33VQ0FRkR87HI3HOPnuI8z19jZHg7PQjCopT_AHihzVSNGl1Zcl4qDkvreJB72ePQmTKBOTBp4TcAfYbSiRnVrhyEGCCwEDkL_OHkAI4UPNwHiweegtvGXXArs1EYOBO4yOhBSGUSVxZ1oGDBFi_H6xOWnEsBJAnK5s2LwP634M7uGwJWLSCXApL4Fwdzyr95yweqVDGlwcKpZOp5lRm4qJuJS8RSiWHnwygb0kzvKnaisXUAD6_0FLj0JE-p-JHIzNuFCEqEFHmcvykA7hosFy_FSJCGoy__4O2U11ykh0KU3KeAlcgxuNYRuhWY8lyjqTDX7Tb1qlnXFvemOkRqEUkH2LH-6Vsy7k1fJFXV-xY9_GJ6mm6qoWThFnXkmlCNC5rNmzNLAoHq9mXO6Fu5zznJ6x0wrKg7BNsap_18ixRd2Pkat1v3cd6b5suEtIQ4kkTVhLxQYw4QXLQi6Vr_b2jJ9tOBogTAsg7Z0Qms5yJBpR_v1Ruf2IKzHCLLyxbI8WT9nngmSorSPAC5Kz9qWZZCUyURLbUpbYdyqju7wRE1U6jPawr0kHs2r-ewpbKVwmCqSgm4v2CLhhXGhZoludxq_osFh8ovuqLIg2nMwhFp_4HzldCz1fzzt_-68OF-Cq5DdvLnP7HR-K1DC0SpPZlOaxjjgHpJj6MJ8ofhG4PUuVKoPTKmV-FyJceLAyiV20LhkVUWt3bg3veeUorhAbnfkfKFs-4SbPfhcLEbZyKdujcFd-LBTivWkezASQLzD4ckchSsqVIjvztuEl5HcqnRBFwgM1SQmybV6-DGjtHua-1yko9plsrptTuLX1kgqams5gP2GEIyFhhz5s9tSslI=w590-h395-s-no-gm?authuser=0',
    },
    {
        title: 'Ana Cristina',
        text: 'Identidade visual criada para cursos de autopreservação feminina. Plataforma Hotmart, tema "O Diabo Veste Prada"',
        image: 'https://lh3.googleusercontent.com/pw/AP1GczN9raToIc6H6GTXhpQJCg_Xv2JUdJIh9WapkLBM6537906WV0rplkmXySK7qAUl8HPJyZ3naYrNozSXrRWYRz8BJAeQRrWBRZif0oCSZ6K8njiaeZStxP2JDo7REGdhD00yMLMMKAWaEoQPS7IXWLuI7VLlwHkF7inNbqYWED2le9nzbvNdREMJ0E5bpvSEu6qz7nxNPQZzKOQMUhQ9RtJ4q1gJW5FBV9iUdEtuGJQqK98T8ZHjSc7NBfNzRMIz8RRNM_Y6P4qEgAEd6fF4gH6_2Pao79tXCxalaf24MLG-FWBkCsTG8UAwbzF20IbQrgJtrCWZyFzJ9Qzy8naLbB3Ru8uMOEaRMrxWbGTfQsc2WQTtTXCU3ipqE5dwgmzbOqlhphAYYjyPblebgSaW_yWxw07Gf6ERRkDGHPE3xUC7aN3MI3gSDjbG7vKfV2fI_WgrHN-V2HH3skvi5VX5gblfOnzx1FMKHUOp1myY8f1ajrluw6qykrTfaQCMoX052fdB9j3FcMTrRKf7PlzvZvh3LxtXvVBd1DZAO_wjRSf9fUdPzfaNqdCsIv-XPJPGYBEdPtPKHBFaln2Dz1w8fEAAxD9mTkWpT38HEDZN-kJTVQk4F1D1VFZgEzkc3-c7w3fsg8YP5S2Lb7ZOX0Q2KTVDGbh4t87cnpNTklNhCVVQMevPE-C0ZWbqZCHQWxCX3U85plDgl6eiRhDRMkp94oaSk4MKcbIZSw9PCB0PABYXLQykrvKRrkd-XX4itKKY8pEn_F5d9d_a1PEX_dQ_7_ilQigE5BZt1mkk2mxlWFI63gJK61NZvPXPV_xQWN_G5xZ5Solnl5pRNFVbqq3T3NPoFPXnP6_dOiofvUt5FWkO98_CtqxAjlUoW3YFa4QUgHYy1mvRmIixrGQXVae2hE8=w590-h395-s-no-gm?authuser=0',
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
    const slideImageRef = useRef(null); // Referência para a imagem
    const slideTextRef = useRef(null); // Referência para o texto
  
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
    }, [currentSlide]); // Dependência para reanimar quando o slide muda
  
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