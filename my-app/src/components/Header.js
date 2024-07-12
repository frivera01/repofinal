// src/components/Header.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext'; // Importa el contexto del carrito
import styles from './Header.module.css';

const Header = () => {
  const { cart } = useContext(CartContext); // Usa el contexto del carrito para obtener el carrito

  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0); // Calcula el número total de artículos en el carrito

  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>Ferretería FerTools</h1>
      <img src="/images/logo.png" alt="Ferretería FerTools Logo" className={styles.headerLogo} />
      <nav className={styles.nav}>
        <Link className={styles.navLink} to="/">Inicio</Link>
        <Link className={styles.navLink} to="/acerca-de">Acerca de</Link>
        <Link className={styles.navLink} to="/contacto">Contacto</Link>
        <Link className={styles.navLink} to="/productos">Productos</Link>
        <Link className={styles.navLink} to="/carrito">Carrito ({cartItemCount})</Link>
        <Link className={styles.navLink} to="/pagar">Pagar</Link>
        <Link className={styles.navLink} to="/devolver-pedido">Devolver Pedido</Link>
      </nav>
    </header>
  );
};

export default Header;
