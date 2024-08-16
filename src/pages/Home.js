// src/pages/Home.js
import React from "react";
import ProductList from "../components/ProductList";

const Home = ({ cart, setCart }) => {
  const handleAddToCart = (product) => {
    const updatedCart = [...cart];
    const existingItem = updatedCart.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

    setCart(updatedCart);
  };

  return (
    <div>
      <h1>Welcome to the E-Commerce Site</h1>
      <ProductList onAddToCart={handleAddToCart} />
    </div>
  );
};

export default Home;
