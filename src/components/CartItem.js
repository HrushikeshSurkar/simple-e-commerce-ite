// src/components/CartItem.js
import React from "react";

const CartItem = ({ item }) => {
  return (
    <div className="cart-item" key={item.id}>
      <img src={item.image} alt={item.title} className="cart-item-image" />
      <div className="cart-item-details">
        <h3 className="cart-item-title">{item.title}</h3>
        <p className="cart-item-quantity">Quantity: {item.quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
