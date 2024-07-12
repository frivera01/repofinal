// src/routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Ruta para crear un nuevo pedido
router.post('/', async (req, res) => {
  const { customerName, customerEmail, products, total } = req.body;

  try {
    const newOrder = new Order({
      customerName,
      customerEmail,
      products,
      total,
    });

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(400).json({ message: 'Error al crear el pedido', error: err.message });
  }
});

// Ruta para devolver un pedido
router.post('/:orderId/return', async (req, res) => {
  const { orderId } = req.params;

  try {
    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({ message: 'Pedido no encontrado' });
    }

    if (order.returned) {
      return res.status(400).json({ message: 'El pedido ya ha sido devuelto' });
    }

    order.returned = true;
    await order.save();

    res.status(200).json({ message: 'Pedido devuelto exitosamente', order });
  } catch (error) {
    res.status(500).json({ message: 'Error al devolver el pedido', error: error.message });
  }
});

module.exports = router;
