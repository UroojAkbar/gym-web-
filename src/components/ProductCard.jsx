import React from "react";

const ProductCard = (props) => {
  return (
    <div>
      <div className="relative">
        <img
          className="relative rounded-3xl"
          src={props.img}
          width={200}
          alt="Gym-Equipment"
        />
      </div>
      <div className="w-52 h-48 bg-[rgb(255,215,0)] -mt-[180px] ml-2 rounded-3xl"></div>
    </div>
  );
};

export default ProductCard;
