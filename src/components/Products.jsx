import React, { useState } from "react";
import ProductCard from "./ProductCard";
import GymEquip from "../assets/images/GymEquip1.png";
import GymEquip1 from "../assets/images/gymEuip.png";
import GymEquip2 from "../assets/images/gymEquip2.png";

const Products = () => {
  const products = [
    GymEquip,
    GymEquip1,
    GymEquip2,
    GymEquip2,
    GymEquip,
    GymEquip2,
    GymEquip1,
    GymEquip1,
  ]; // Example product data
  const [visibleStartIndex, setVisibleStartIndex] = useState(0);

  const nextProducts = () => {
    setVisibleStartIndex((prevIndex) =>
      prevIndex + 3 < products.length ? prevIndex + 3 : prevIndex
    );
  };

  const prevProducts = () => {
    setVisibleStartIndex((prevIndex) =>
      prevIndex - 3 >= 0 ? prevIndex - 3 : 0
    );
  };

  return (
    <div className="bg-[#373737] flex items-center justify-center flex-col gap-10 py-10">
      <h1 className="font-Averia text-5xl font-semibold text-white">
        Latest Products
      </h1>
      {/* Use grid layout for responsiveness */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-4xl px-4">
        {products
          .slice(visibleStartIndex, visibleStartIndex + 3)
          .map((img, index) => (
            <ProductCard key={index} img={img} />
          ))}
      </div>
      <div className="flex gap-4">
        {/* Adjust button sizes and padding for smaller screens */}
        <button
          onClick={prevProducts}
          className="bg-[#808080] p-2 md:p-3 rounded-lg text-sm md:text-base"
        >
          Prev
        </button>
        <button
          onClick={nextProducts}
          className="bg-[#808080] p-2 md:p-3 rounded-lg text-sm md:text-base"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
