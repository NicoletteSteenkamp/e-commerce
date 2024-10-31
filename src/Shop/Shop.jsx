import React, { useState } from "react";
import { PRODUCTS } from "../products";
import { Product } from "./Product";
import "./shop.css";
import SearchBar from "../components/SearchBar";
import Navbar from "../components/navbar";

export const Shop = () => {
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);

  const handleSearch = (searchTerm) => {
    const results = PRODUCTS.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
  };

  return (
    <div className="shop">
      <div className="shop-header">
      <Navbar/>
        <h1 className="shop-title">E-commerce</h1>
        <SearchBar onSearch={handleSearch} />
        
      </div>
      <div className="products">
        {filteredProducts.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};
