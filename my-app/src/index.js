// src/components/Contact.js
import React, { useState } from 'react';
import styles from './components/Contact.module.css';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setMessage(result.message);
      // Clear the form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setMessage('Error submitting form: ' + error.message);
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
          className={styles.contact__input}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Correo Electrónico"
          required
          className={styles.contact__input}
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Mensaje"
          required
          className={styles.contact__textarea}
        />
        <button type="submit" className={styles.contact__button}>Enviar</button>
      </form>
      {message && <p className={styles.contact__message}>{message}</p>}
    </div>
  );
}

export default Contact;
