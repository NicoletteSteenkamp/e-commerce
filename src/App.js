import React, { useState } from 'react';
import Navbar from "./components/navbar";
import SearchBar from './components/SearchBar';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import { PRODUCTS } from './components/products'; 
import './App.css';

const App = () => {
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS); 

  const handleSearch = (term) => {
    setFilteredProducts(
      PRODUCTS.filter((product) =>
        product.productName.toLowerCase().includes(term.toLowerCase())
      )
    );
  };

  return (
    <div className="app">
      <Navbar />
      <div className="main-content">
        <SearchBar onSearch={handleSearch} />
        <div className="product-list">
          {filteredProducts.length === 0 ? (
            <p>No products found</p>
          ) : (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
        <Cart />
      </div>
    </div>
  );
};

export default App;
