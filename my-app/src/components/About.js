// src/components/About.js
import React from 'react';
import styles from './About.module.css';

function About() {
  return (
    <div className={styles.about}>
      <h2 className={styles.about__title}>Acerca de Nosotros</h2>
      <p className={styles.about__text}>
        Ferretería FerTools es tu tienda de confianza para adquirir todo tipo de herramientas y materiales de construcción. Contamos con más de 20 años de experiencia en el mercado.
      </p>
      <p className={styles.about__text}>
        Nos enorgullecemos de ofrecer productos de alta calidad y un servicio al cliente excepcional. Nuestro equipo está siempre dispuesto a ayudarte a encontrar lo que necesitas.
      </p>
      <p className={styles.about__text}>
        En Ferretería FerTools, tu satisfacción es nuestra prioridad. Visítanos hoy y descubre por qué somos la mejor opción para tus proyectos de bricolaje y construcción.
      </p>
    </div>
  );
}

export default About;
