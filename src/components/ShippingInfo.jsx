import React, { useState } from 'react';

const ShippingAddressForm = ({ onSubmit }) => {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the shipping details object
    const shippingDetails = {
      fullName,
      address,
      city,
      state,
      postalCode,
      country,
    };

    // Trigger the onSubmit callback with shipping details
    onSubmit(shippingDetails);

    // Reset form fields
    setFullName('');
    setAddress('');
    setCity('');
    setState('');
    setPostalCode('');
    setCountry('');
  };

  return (
    <div className="shipping-address-form">
      <h2>Shipping Address</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </label>
        
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </label>

        <label>
          City:
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </label>

        <label>
          State:
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </label>

        <label>
          Postal Code:
          <input
            type="text"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          />
        </label>

        <label>
          Country:
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </label>

        <button type="submit">Submit Shipping Address</button>
      </form>
    </div>
  );
};

export default ShippingAddressForm;
