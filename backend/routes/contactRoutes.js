const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Agrega console.log para ver los datos recibidos
    console.log('Datos recibidos:', { name, email, message });

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Agrega console.log para confirmar que el contacto se guardó correctamente
    console.log('Contacto guardado:', newContact);

    res.status(200).json({ message: '¡Gracias! Nos pondremos en contacto :)' });
  } catch (error) {
    // Agrega console.error para manejar cualquier error ocurrido
    console.error('Error al guardar el mensaje:', error);
    res.status(500).json({ error: 'Error al guardar el mensaje' });
  }
});

module.exports = router;
