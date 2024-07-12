import React, { useState } from 'react';
import styles from './Contact.module.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert('¡Gracias! Nos pondremos en contacto :)');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Error al enviar el mensaje');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Error al enviar el mensaje');
  }
};


  return (
    <div className={styles.contact}>
      <h2 className={styles.contact__title}>Contáctanos</h2>
      <form className={styles.contact__form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nombre"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Correo Electrónico"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Mensaje"
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contact;
