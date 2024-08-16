import React from "react";
import "../styles/Checkout.css";
import { Link } from "react-router-dom";

const Checkout = ({ cart }) => {
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty. Add some items first!</p>
      ) : (
        <div className="checkout">
          <h2>Items in Your Cart:</h2>
          <ul className="checkout-items">
            {cart.map((item) => (
              <li key={item.id} className="checkout-item">
                <div className="checkout-item-details">
                  <div className="checkout-item-title">{item.title}</div>
                  <div className="checkout-item-quantity">
                    Quantity: {item.quantity}
                  </div>
                  <div className="checkout-item-price">
                    ${item.price.toFixed(2)}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="checkout-summary">
            <p>
              Total Items:{" "}
              {cart.reduce((total, item) => total + item.quantity, 0)}
            </p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <Link
              className="place-order-button"
              to="/"
              onClick={() => alert("Order Placed")}
            >
              Place Order
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
