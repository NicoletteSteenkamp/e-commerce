import React, { useState } from 'react';
import Sidebar from './Sidebar';
import SearchBar from './SearchBar';
import ProductCard from './ProductCard';
import Cart from './Cart';
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Apple Watch', price: 529.99, image: 'apple-watch.jpg' },
    { id: 2, name: 'Sony Headphones', price: 39.99, image: 'sony-headphones.jpg' },
    // Add more products here
  ]);

  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (term) => {
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      )
    );
  };

  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <SearchBar onSearch={handleSearch} />
        <div className="product-list">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Cart />
      </div>
    </div>
  );
};

export default App;
