
import './OrderSumm.css';

const OrderSummary = ({ orderItems }) => {
  const calculateTotal = () => {
    return orderItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="order-summary">
      <h1>Order Summary</h1>
      <div className="order-items">
        {orderItems.map(item => (
          <div key={item.id} className="order-item">
            <img src={item.image} alt={item.name} className="item-image" />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price.toFixed(2)}</p>
              <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="total">
        <h2>Total Cost: ${calculateTotal()}</h2>
      </div>
    </div>
  );
};

export default OrderSummary;
