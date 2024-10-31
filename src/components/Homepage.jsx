import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Product from './Product';
import Sidebar from './Sidebar'; 
import { PRODUCTS } from '../data';

const HomePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const filteredProducts = PRODUCTS.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page">
      <button onClick={() => setSidebarOpen(!sidebarOpen)}>Toggle Menu</button>
      {sidebarOpen && <Sidebar />}
      
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="product-list">
        {filteredProducts.map((product) => (
          <Product
            key={product.id}
            product={product}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>
      
      {/* Add Cart Overview here */}
    </div>
  );
};

export default HomePage;
