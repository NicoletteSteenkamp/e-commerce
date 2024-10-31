import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import logo from "../assets/LogoTransparent.png"; 

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="logo" aria-label="Go to homepage">
                    <img src={logo} alt="Logo" className="logo-image" /> 
                </Link>
                <div className="links">
                    <Link to="/" className="nav-link">Shop</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                    <Link to="/cart" className="nav-link" aria-label="View cart">
                        <ShoppingCart size={32} />
                    </Link>
                </div>
            </div>
        </nav>
    );
};
