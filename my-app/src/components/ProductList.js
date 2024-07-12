// src/components/ProductList.js
import React, { useContext } from 'react';
import ProductItem from './ProductItem';
import SearchBar from './SearchBar';
import { CartContext } from '../context/CartContext';
import styles from './ProductList.module.css'; // Importa el archivo CSS módulo

const ProductList = ({ products, onSearch }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className={styles.productListContainer}>
      <div className={styles.searchBarContainer}>
        <SearchBar onSearch={onSearch} />
      </div>
      <div className={styles.productList}>
        {products.map(product => (
          <div key={product._id} className={styles.productItem}>
            <ProductItem product={product} onAddToCart={() => addToCart(product)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
