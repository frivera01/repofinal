// seed.js
const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conectado a MongoDB');
  seedDB();
}).catch((err) => {
  console.error('Error al conectar a MongoDB', err);
});

const products = [
  { name: "Apagador", price: 10.99, image: "apagador.png", brand: "Marca A", model: "Modelo A1" },
  { name: "Bote Pintura", price: 5.99, image: "botepintura.png", brand: "Marca B", model: "Modelo B1" },
  { name: "Brocha", price: 15.99, image: "brocha.png", brand: "Marca C", model: "Modelo C1" },
  { name: "Cable Cobre", price: 8.99, image: "cablecobre.png", brand: "Marca D", model: "Modelo D1" },
  { name: "Clavos", price: 3.99, image: "clavos.png", brand: "Marca E", model: "Modelo E1" },
  { name: "Destornillador", price: 49.99, image: "destornillador.png", brand: "Marca F", model: "Modelo F1" },
  { name: "Martillo", price: 12.99, image: "martillo.png", brand: "Marca G", model: "Modelo G1" },
  { name: "Pinzas", price: 2.99, image: "pinzas.png", brand: "Marca H", model: "Modelo H1" },
  { name: "Segueta", price: 4.99, image: "segueta.png", brand: "Marca I", model: "Modelo I1" },
  { name: "Taladro", price: 1.99, image: "taladro.png", brand: "Marca J", model: "Modelo J1" }
];

async function seedDB() {
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log('Base de datos poblada con productos iniciales');
  mongoose.connection.close();
}
