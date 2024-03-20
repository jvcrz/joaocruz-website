import styles from '../ui/Card.css'
import figma_ico_62 from '../assets/figma_ico_62.svg';
import photoshop_ico_62 from '../assets/photoshop_ico_62.svg';
import illustrator_ico_62 from '../assets/illustrator_ico_62.svg';
import indesign_ico_62 from '../assets/indesign_ico_62.svg';
import html_ico_62 from '../assets/html_ico_62.svg';
import css_ico_62 from '../assets/css_ico_62.svg';
import javascript_ico_62 from '../assets/javascript_ico_62.svg';
import react_ico_62 from '../assets/react_ico_62.svg';
import elementor_ico_62 from '../assets/elementor_ico_62.svg';
import wordpress_ico_62 from '../assets/wordpress_ico_62.svg';
import React from 'react'



const Card = ({ title, label, icons }) => {
    return (
      <div className='card'>

          <h3 className='titlecard'>{title}</h3>
          <p className='labelcard'>{label}</p>
          <div className='icocard'>
            {icons.map((Icon, index) => (
              <img className='svgcard' key={index} src={Icon} alt="icon" />
            ))}
             <div className='gradient'>
          </div>
        </div>
      </div>
    );
  }





export default Card