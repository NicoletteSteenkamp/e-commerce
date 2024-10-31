import PropTypes from 'prop-types';
import './ProductCard.css'; 

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <p className="product-description">{product.description}</p>
      <button className="add-to-cart-button">Add to Cart</button>
    </div>
  );
};

// Define prop types for better type checking
ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired, // Include description
  }).isRequired,
};

export default ProductCard;
