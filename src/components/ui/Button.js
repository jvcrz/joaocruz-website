import React from "react";
import { useNavigate } from 'react-router-dom';
import styles from './Button.module.css';

const Button = ({ children, className = '', ...props }) => {
  let navigate = useNavigate(); 

  const handleClick = () => { 
    navigate('/contact');
  };

  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={handleClick}
      {...props} 
    >
      {children}
    </button>
  );
};





export default Button