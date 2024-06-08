// StorePage.js
import React, { useState } from "react";
import StoreCard from "../components/StoreCard";
import img2 from "../assets/images/gymEquip2.png";
import img1 from "../assets/images/GymEquip1.png";
import img3 from "../assets/images/gymEuip.png";

// Example products data
const products = [
  {
    id: 1,
    name: "Dumbbell Set",
    price: 100,
    image: img1,
  },
  { id: 2, name: "Yoga Mat", price: 20, image: img2 },
  {
    id: 3,
    name: "Resistance Bands",
    price: 15,
    image: img3,
  },
  {
    id: 4,
    name: "Resistance Bands",
    price: 15,
    image: img3,
  },
  {
    id: 5,
    name: "Resistance Bands",
    price: 15,
    image: img1,
  },
  {
    id: 6,
    name: "Resistance Bands",
    price: 15,
    image: img2,
  },
  {
    id: 7,
    name: "Resistance Bands",
    price: 15,
    image: img2,
  },
  {
    id: 8,
    name: "Resistance Bands",
    price: 15,
    image: img3,
  },
  {
    id: 9,
    name: "Resistance Bands",
    price: 15,
    image: img1,
  },
  {
    id: 10,
    name: "Resistance Bands",
    price: 15,
    image: img3,
  },
  {
    id: 11,
    name: "Resistance Bands",
    price: 15,
    image: img2,
  },
  {
    id: 12,
    name: "Resistance Bands",
    price: 15,
    image: img1,
  },
  {
    id: 13,
    name: "Resistance Bands",
    price: 15,
    image: img1,
  },
];

const Store = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((currentCart) => {
      const isProductInCart = currentCart.find(
        (item) => item.id === product.id
      );
      if (isProductInCart) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...currentCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <StoreCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Store;
