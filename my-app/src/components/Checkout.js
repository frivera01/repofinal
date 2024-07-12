import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import styles from './Checkout.module.css';

function Checkout() {
  const { cart } = useContext(CartContext);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [message, setMessage] = useState('');
  const [orderId, setOrderId] = useState(null); // Estado para almacenar el ID del pedido

  const handleOrderSubmit = async (e) => {
    e.preventDefault();

    if (!cart || cart.length === 0) {
      setMessage('El carrito está vacío');
      return;
    }

    const order = {
      customerName,
      customerEmail,
      products: cart.map(item => ({
        name: item.name,
        price: item.price,
        quantity: 1 // Suponiendo que cada artículo en el carrito tiene una cantidad de 1
      })),
      total: cart.reduce((sum, item) => sum + item.price, 0)
    };

    try {
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
      });

      if (response.ok) {
        const data = await response.json(); // Obtener la respuesta JSON
        setOrderId(data._id); // Guardar el ID del pedido
        setMessage('Pedido creado exitosamente');
      } else {
        setMessage('Error al crear el pedido');
      }
    } catch (error) {
      setMessage('Error al enviar el pedido');
    }
  };

  return (
    <div className={styles.checkout}>
      <h2 className={styles.checkout__title}>Pagar</h2>
      <form onSubmit={handleOrderSubmit} className={styles.checkout__form}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.checkout__submit}>Enviar Pedido</button>
      </form>
      {message && <p className={styles.message}>{message}</p>}
      {orderId && <p className={styles.message}>ID del Pedido: {orderId}</p>} {/* Mostrar el ID del pedido */}
    </div>
  );
}

export default Checkout;
