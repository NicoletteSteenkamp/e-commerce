import { Link } from "react-router-dom";
import {
  Heart,
  ShoppingCart,
  Car,
  User,
  X,
  List,
  Lock,
  Camera,
  Star,
  CaretLeft,
  Minus,
  Plus,
  Gift,
  Calendar,
  Wallet,
  LockOpen
} from "phosphor-react";
import "./navbar.css";
import logo from "../assets/LogoTransparent.png";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="logo" aria-label="Go to homepage">
          <img src={logo} alt="Logo" className="logo-image" />
        </Link>
        
        {/* Sidebar with Icons */}
        <div className="icon-sidebar">
          <Heart size={24} />
          <ShoppingCart size={24} />
          <Car size={24} />
          <User size={24} />
          <X size={24} />
          <List size={24} />
          <Lock size={24} />
          <Camera size={24} />
          <Star size={24} />
          <Star size={24} color="red" />
          <CaretLeft size={24} />
          <Minus size={24} />
          <Plus size={24} />
          <Gift size={24} />
          <Calendar size={24} />
          <Wallet size={24} />
          <LockOpen size={24} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
