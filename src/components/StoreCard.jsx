// ProductCard.js
import React from "react";

const StoreCard = ({ product, onAddToCart }) => {
  return (
    <div className="border p-4 rounded-lg bg-white shadow-md">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <h3 className="text-lg font-bold mt-2">{product.name}</h3>
      <p>${product.price}</p>
      <button
        className="mt-3 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default StoreCard;
