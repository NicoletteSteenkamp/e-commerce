import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalCost = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleRemove = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <span>{item.name}</span>
          <span>{item.price}</span>
          <span>{item.quantity}</span>
          <button onClick={() => handleRemove(item.id)}>Remove</button>
        </div>
      ))}
      <p>Total: ${totalCost}</p>
    </div>
  );
};

export default Cart;
