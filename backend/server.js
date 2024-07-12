const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Configuración de CORS
app.use(cors({
  origin: 'http://localhost:3000', 
  methods: 'GET,POST',
  allowedHeaders: 'Content-Type' 
}));

// Middleware para parsear JSON
app.use(express.json());

// Middleware para loggear el cuerpo de la solicitud
app.use((req, res, next) => {
    console.log(req.method, req.url); // Mostrará el método HTTP y la URL de la solicitud entrante
    console.log('Body:', req.body); // Mostrará el cuerpo de la solicitud como objeto si está parseado correctamente
    next();
});

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conectado a MongoDB');
}).catch((err) => {
  console.error('Error al conectar a MongoDB', err);
});

// Rutas
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/contact', require('./routes/contactRoutes')); // Ruta para contacto
app.use('/api/orders', require('./routes/orderRoutes')); // Ruta para pedidos

app.listen(PORT, () => {
  console.log(`Servidor está corriendo en el puerto ${PORT}`);
});
