import React from "react";
import { FaRegHeart } from "react-icons/fa";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h3 className="product-title">{product.title}</h3>

      <div className="heart-icon">
        <FaRegHeart />
      </div>

      <p className="sign-in-message">
        Sign-in or Create an account to see the pricing
      </p>

      {product.inStock ? (
        <p className="product-price">${product.price}</p>
      ) : (
        <p className="product-status out-of-stock">Out of Stock</p>
      )}
    </div>
  );
};

export default ProductCard;
