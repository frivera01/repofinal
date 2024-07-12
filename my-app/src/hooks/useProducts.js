// src/hooks/useProducts.js
import { useState, useEffect } from 'react';
import { products as mockProducts } from '../data/mockData';

function useProducts() {
  const [products, setProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Simular la obtención de productos desde una API
    setProducts(mockProducts);
    setSearchResults(mockProducts);
  }, []);

  const handleSearch = (searchTerm) => {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return { products, searchResults, handleSearch };
}

export default useProducts;
