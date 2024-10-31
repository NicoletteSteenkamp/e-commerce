import React, { useState } from 'react';

const PaymentMethodForm = ({ onSubmit }) => {
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [paypalEmail, setPaypalEmail] = useState('');

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the payment details based on the selected payment method
    const paymentDetails =
      paymentMethod === 'creditCard'
        ? { cardNumber, expirationDate, cvv }
        : { paypalEmail };

    // Trigger the onSubmit callback with payment details
    onSubmit(paymentMethod, paymentDetails);

    // Reset form
    setCardNumber('');
    setExpirationDate('');
    setCvv('');
    setPaypalEmail('');
  };

  return (
    <div className="payment-method-form">
      <h2>Payment Method</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="creditCard"
            checked={paymentMethod === 'creditCard'}
            onChange={handlePaymentMethodChange}
          />
          Credit Card
        </label>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="paypal"
            checked={paymentMethod === 'paypal'}
            onChange={handlePaymentMethodChange}
          />
          PayPal
        </label>

        {paymentMethod === 'creditCard' && (
          <div className="credit-card-info">
            <label>
              Card Number:
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />
            </label>
            <label>
              Expiration Date:
              <input
                type="text"
                placeholder="MM/YY"
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
                required
              />
            </label>
            <label>
              CVV:
              <input
                type="text"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                required
              />
            </label>
          </div>
        )}

        {paymentMethod === 'paypal' && (
          <div className="paypal-info">
            <label>
              PayPal Email:
              <input
                type="email"
                value={paypalEmail}
                onChange={(e) => setPaypalEmail(e.target.value)}
                required
              />
            </label>
          </div>
        )}

        <button type="submit">Proceed with Payment</button>
      </form>
    </div>
  );
};

export default PaymentMethodForm;
