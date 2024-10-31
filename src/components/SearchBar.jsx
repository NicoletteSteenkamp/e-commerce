import React, { useState } from 'react';
import { MagnifyingGlass } from 'phosphor-react';
import './searchBar.css';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value); // Call the onSearch prop to filter products
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form submission
    };

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleChange}
                className="search-input"
                aria-label="Search products"
            />
            <button type="submit" className="search-button" aria-label="Search">
                <MagnifyingGlass size={24} />
            </button>
        </form>
    );
};

export default SearchBar;
