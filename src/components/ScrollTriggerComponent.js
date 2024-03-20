import React, { useRef, useEffect, Children, cloneElement } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerComponent = ({ children, start, end, scrub, markers, animation, childAnimation }) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: start,
        end: end,
        scrub: scrub,
        markers: markers,
      },
    })
    // A animação base é definida aqui, mas a animação específica de cada filho é aplicada individualmente abaixo.
    .fromTo(element, { ...childAnimation.from }, { ...childAnimation.to });

    return () => ScrollTrigger.getAll().forEach(instance => instance.kill());
  }, [start, end, scrub, markers, childAnimation]);

  // Clonar cada elemento filho para aplicar a ref necessária para animação e incluir delay com base na ordem
  const animatedChildren = Children.map(children, (child, index) => {
    // Calculando o delay com base na ordem do filho
    const delay = index * 0.2; // Ajusta aqui conforme a necessidade de delay entre os filhos

    // Verifica se é a div que contém os Cards para aplicar a animação corretamente
    if (child.props.className === "cardcontent") {
      const cardsWithAnimation = Children.map(child.props.children, (card, cardIndex) => {
        const cardDelay = cardIndex * 0.2; // Delay específico para cada card
        return cloneElement(card, {
          style: { opacity: 0, transform: "translateY(100px)" },
          onAnimationStart: () => {
            gsap.to(card, {
              delay: cardDelay, // Aplica o delay calculado
              opacity: 1,
              y: 0,
              ease: "power3.in",
              duration: 1, // Duração da animação de cada card
            });
          }
        });
      });
      return cloneElement(child, {}, cardsWithAnimation);
    }

    return cloneElement(child);
  });

  return <div ref={ref}>{animatedChildren}</div>;
};

export default ScrollTriggerComponent;
