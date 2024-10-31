import { Link } from "react-router-dom";
import {
  Heart,
  ShoppingCart,
  ShoppingBagOpen,
  Storefront,
  SignIn,
  X,
  List,
  FloppyDiskBack,
  ListBullets,
  ShoppingBag,
  Lock,
  Star,
  StarHalf,
  CaretLeft,
  Minus,
  Plus,
  Gift,
  Calendar,
  CreditCard,
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
          <Storefront size={24} />
          <SignIn size={24} />
          <X size={24} />
          <List size={24} />
          <FloppyDiskBack size={24} />
          <ListBullets size={24} />
          <ShoppingBag size={24} />
          <ShoppingBagOpen size={24} />
          <Star size={24}  />
          <StarHalf size={24} />
          <CaretLeft size={24} />
          <Minus size={24} />
          <Plus size={24} />
          <Gift size={24} />
          <Calendar size={24} />
          <CreditCard  size={24} />
          <Lock size={24} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
