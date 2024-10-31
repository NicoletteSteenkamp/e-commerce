
import { useNavigate } from 'react-router-dom';
import './OrderSuccess.css';

const OrderSuccessful = () => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate('/'); 
  };

  return (
    <div className="order-successful">
      <div className="success-message">
        <h1>Thank You for Your Purchase!</h1>
        <p>Your order was placed successfully. We’re processing it and will notify you once it’s shipped.</p>
      </div>
      <button onClick={handleContinueShopping} className="continue-shopping-btn">
        Continue Shopping
      </button>
    </div>
  );
};

export default OrderSuccessful;
