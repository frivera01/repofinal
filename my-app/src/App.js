// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Checkout from './components/Checkout';
import Cart from './components/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import ReturnOrder from './components/ReturnOrder';
import { CartProvider } from './context/CartContext'; 
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) => console.error('Error al obtener productos:', error));
  }, []);

  const handleSearch = (query) => {
    if (!query) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.brand.toLowerCase().includes(query.toLowerCase()) ||
        product.model.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <CartProvider>
      <Router>
        <div className="appContainer">
          <Header />
          <main className="main">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/acerca-de" element={<About />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="/productos" element={
                <div>
                  <ProductList products={filteredProducts} onSearch={handleSearch} />
                </div>
              } />
              <Route path="/carrito" element={<Cart />} />
              <Route path="/pagar" element={<Checkout />} />
              <Route path="/devolver-pedido" element={<ReturnOrder />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
