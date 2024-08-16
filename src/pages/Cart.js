import React from "react";
import "../styles/Cart.css";
import { Link } from "react-router-dom";

const Cart = ({ cart }) => {
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. Add some items first!</p>
      ) : (
        <div className="cart">
          <ul className="cart-items">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="cart-item-details">
                  <div className="cart-item-title">{item.title}</div>
                  <div className="cart-item-quantity">
                    Quantity: {item.quantity}
                  </div>
                  <div className="cart-item-price">
                    ${item.price.toFixed(2)}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <p>
              Total Items:{" "}
              {cart.reduce((total, item) => total + item.quantity, 0)}
            </p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <Link className="checkout-button" to="/checkout">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
