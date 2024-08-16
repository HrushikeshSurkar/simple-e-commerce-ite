// src/components/ProductList.js
import React, { useEffect, useState } from "react";
import { fetchProducts } from "../api/fakeStoreApi";
import "../styles/ProductList.css";

const ProductList = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      const productsData = await fetchProducts();
      setProducts(productsData);
    };

    fetchProductData();
  }, []);

  return (
    <section className="product-list">
      {products.map((product) => (
        <article key={product.id} className="product-card">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
          <div className="card-details">
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <button
              onClick={() => onAddToCart(product)}
              className="add-to-cart-button"
            >
              Add to Cart
            </button>
          </div>
        </article>
      ))}
    </section>
  );
};

export default ProductList;
