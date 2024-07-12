// src/components/ReturnOrder.js
import React, { useState } from 'react';
import styles from './ReturnOrder.module.css';

const ReturnOrder = () => {
  const [orderId, setOrderId] = useState('');
  const [message, setMessage] = useState('');

  const handleReturnSubmit = async (e) => {
    e.preventDefault();

    if (!orderId) {
      setMessage('Por favor, ingrese el ID del pedido');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/orders/${orderId}/return`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setMessage('Pedido devuelto exitosamente');
      } else {
        setMessage('Error al devolver el pedido');
      }
    } catch (error) {
      setMessage('Error al enviar la solicitud de devolución');
    }
  };

  return (
    <div className={styles.returnOrder}>
      <h2 className={styles.returnOrder__title}>Devolver Pedido</h2>
      <form onSubmit={handleReturnSubmit} className={styles.returnOrder__form}>
        <div>
          <label htmlFor="orderId">ID del Pedido:</label>
          <input
            type="text"
            id="orderId"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.returnOrder__submit}>Devolver Pedido</button>
      </form>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

export default ReturnOrder;
