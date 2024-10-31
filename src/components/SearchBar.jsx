import React, { useState } from 'react';
import { MagnifyingGlass } from 'phosphor-react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
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
