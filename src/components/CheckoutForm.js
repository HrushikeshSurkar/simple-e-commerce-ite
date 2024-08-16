// src/components/CheckoutForm.js
import React, { useState } from 'react';

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    paymentDetails: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (simulate checkout)
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="address">Address:</label>
      <textarea
        id="address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        required
      />

      <label htmlFor="paymentDetails">Payment Details:</label>
      <input
        type="text"
        id="paymentDetails"
        name="paymentDetails"
        value={formData.paymentDetails}
        onChange={handleChange}
        required
      />

      <button type="submit">Checkout</button>
    </form>
  );
};

export default CheckoutForm;
