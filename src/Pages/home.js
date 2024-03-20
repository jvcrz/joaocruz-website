import React from "react"
import Button from '../components/ui/Button'
import Styles from './home.css'
import Arsenal from '../components/Arsenal'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import styles from '../components/layout/Navbar.module.css'
import { useActiveLink } from "../components/context/ActiveLinkContext"

import ScrollTriggerComponent from "../components/ScrollTriggerComponent"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import figma_ico_62 from '../components/assets/figma_ico_62.svg'
import photoshop_ico_62 from '../components/assets/photoshop_ico_62.svg';
import illustrator_ico_62 from '../components/assets/illustrator_ico_62.svg';
import indesign_ico_62 from '../components/assets/indesign_ico_62.svg';
import html_ico_62 from '../components/assets/html_ico_62.svg';
import css_ico_62 from '../components/assets/css_ico_62.svg';
import javascript_ico_62 from '../components/assets/javascript_ico_62.svg';
import react_ico_62 from '../components/assets/react_ico_62.svg';
import elementor_ico_62 from '../components/assets/elementor_ico_62.svg';
import wordpress_ico_62 from '../components/assets/wordpress_ico_62.svg';

import Slider from '../components/ui/Slider'

import Card from '../components/ui/Card'

const Home = () => {
  

    const { setActive } = useActiveLink();

    return (
        <div className="home-container">
        <div className="home-content">
            <div className="home-content2">
            <h1 className="open-title">
                <span className="gradient-text">Sua </span>
                <span className="pe2"> Visão, </span>
                <span className="pe2">Nossa </span>
                <span className="gradient-text">Missão</span>
            </h1>
            <div className="label-content">
            <p className="body-large">Design interativo e funcional que elevam sua visão, destacando você em mercados competitivos.</p>

            <NavLink className='aclass' to='/contact'>
                <Button
                    className={styles.button}
                    onClick={() => setActive('contact')}
                >
                    Unir Forças
                </Button>
            </NavLink>



            </div>
            </div>
            <img src={`${process.env.PUBLIC_URL}/flow-img.svg`} alt='Flowimg' className="flow-img" />

        </div>


        
        <div className="separador"></div>
        <div className="carrossel">
        <h3>Domínio Profissional</h3>
        <Arsenal />
        </div>



        <div>
        <h3 className="justmargin">Soluções Disponíveis</h3>
        <p className="body-large">Em um mundo onde a primeira impressão muitas vezes é digital, separei um escopo de soluções para garantir que sua marca seja vista, sentida e lembrada. Seja com interfaces inteligentes que chamam atenção, estratégias sociais que se apegam ou identidades visuais que dão vida à sua história e publicações editoriais que informam e inspiram, a missão é conectar cada design e assim,  comunicar sua essência. Eu ofereço essa oferta de transformação visual, onde cada pixel tem um propósito e cada post tem uma promessa.</p>

        <ScrollTriggerComponent
        start="top: 900px"
        end="top: 1000px"
        scrub={1}
        markers={false}
        childAnimation={{
        from: { opacity: 0, y: 100 },
        to: { opacity: 1, y: 0, ease: "power3.in" }
        }}
      >

        <div className="cardcontent">
      <Card
        title="UI / UX"
        label="Mergulho fundo em seus objetivos para desenvolvemos soluções de UI/UX que vão além do esperado. Trato da nossa parceria como elemento crucial para moldar experiências de usuário que se destacam."
        icons={[figma_ico_62, photoshop_ico_62, html_ico_62, css_ico_62, javascript_ico_62, react_ico_62, elementor_ico_62, wordpress_ico_62]}
      />
      <Card
        title="Social Media"
        label="Coloco a autenticidade da sua marca em foco e destaque. Com uma estratégia de mídia social feita sob medida, trazendo uma significativa presença online de forma eficiente e impactante."
        icons={[photoshop_ico_62, illustrator_ico_62, indesign_ico_62, figma_ico_62]}
      />
      <Card
        title="Identidade Visual"
        label="Sua visão direciona minha criatividade na elaboração de uma identidade visual autêntica para sua marca. Com um diálogo constante, construo elementos visuais que atinge com precisão seu público-alvo."
        icons={[photoshop_ico_62, illustrator_ico_62, indesign_ico_62, figma_ico_62]}
      />
      <Card
        title="Design Editorial"
        label="Cada projeto editorial é uma chance de materializar sua história. Caminho ao seu lado para assegurar que o design, tipografia e imagens reflitam com precisão o conteúdo e a mensagem que deseja passar."
        icons={[photoshop_ico_62, illustrator_ico_62, indesign_ico_62]}
      />
    </div>

    <div className="separador"></div>


    </ScrollTriggerComponent>

    <ScrollTriggerComponent
        start="top: 900px"
        end="top: 1000px"
        scrub={1}
        markers={false}
        childAnimation={{
        from: { opacity: 0, y: 100 },
        to: { opacity: 1, y: 0, ease: "power3.in" }
        }}
      >
        <h3>Conheça meu Trabalho</h3>
    <Slider />
    </ScrollTriggerComponent>


      




        
    </div>
</div>
)}



export default Home