import React, { useRef, useEffect } from 'react';
import './Arsenal.css'; 
import figma_ico_62 from './assets/figma_ico_62.svg';
import photoshop_ico_62 from './assets/photoshop_ico_62.svg';
import illustrator_ico_62 from './assets/illustrator_ico_62.svg';
import indesign_ico_62 from './assets/indesign_ico_62.svg';
import html_ico_62 from './assets/html_ico_62.svg';
import css_ico_62 from './assets/css_ico_62.svg';
import javascript_ico_62 from './assets/javascript_ico_62.svg';
import react_ico_62 from './assets/react_ico_62.svg';
import elementor_ico_62 from './assets/elementor_ico_62.svg';
import wordpress_ico_62 from './assets/wordpress_ico_62.svg';
import { gsap } from 'gsap'


const icons = [figma_ico_62, photoshop_ico_62, illustrator_ico_62, indesign_ico_62, html_ico_62, css_ico_62, javascript_ico_62, react_ico_62, elementor_ico_62, wordpress_ico_62];

    
    const Arsenal = () => {
        const carouselRef = useRef(null)

        useEffect(() => {
            // Supondo que carouselRef.current seja o elemento que você está animando
            if (carouselRef.current) {
                const animation = gsap.to(carouselRef.current, {
                    x: '-50%', 
                    ease: "none",
                    duration: 20,
                    repeat: -1,
                    modifiers: {
                        x: gsap.utils.unitize(x => parseFloat(x) % (carouselRef.current.scrollWidth / 2))
                    }
                });
                return () => {
                    animation.kill(); // Interrompe a animação
                };
            }
        }, []);

        return (
            <div className='arsenal-container'>
            <div className="arsenal-carousel" ref={carouselRef}>
                {icons.concat(icons).map((icon, index) => (
                    <img className='image-ico' key={index} src={icon} alt={`Icon ${index}`} />
                ))}
            </div>
        </div>
        );
    };

export default Arsenal;


