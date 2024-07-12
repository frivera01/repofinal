// src/components/Home.js
import React from 'react';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.home}>
      <h2 className={styles.home__title}>Bienvenido a Nuestra Tienda</h2>
      <p className={styles.home__text}>Encuentra los mejores productos ferreteros aquí.</p>
      <p className={styles.home__text}>
        Ofrecemos una amplia gama de herramientas, materiales de construcción y productos de ferretería para satisfacer todas tus necesidades.
      </p>
      <p className={styles.home__text}>
        Nuestro objetivo es proporcionarte productos de alta calidad a precios competitivos. ¡Explora nuestro catálogo y descubre todo lo que tenemos para ofrecerte!
      </p>
    </div>
  );
}

export default Home;
