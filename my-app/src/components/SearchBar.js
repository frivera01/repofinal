import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    if (onSearch) {
      onSearch(event.target.value);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Buscar productos..."
        value={query}
        onChange={handleInputChange}
        className="search-bar"
      />
    </div>
  );
};
export default SearchBar;
