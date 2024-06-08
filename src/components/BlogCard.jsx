import React from "react";

const BlogCard = (props) => {
  return (
    <div className={`bg-[#373737] flex ${props.display}`}>
      <div className="image ">
        <img
          className={`${props.imgWidth} object-cover`}
          src={props.BlogImg}
          alt="Blog-image"
        />
      </div>
      <div className="description w-56 bg-[#808080] text-white py-4 px-8 flex flex-col items-start">
        <h1
          className={`font-Averia text-lg font-semibold mb-1 ${props.textColor}`}
        >
          {props.title}
        </h1>
        <p className="text-[12px] opacity-60 font-Poppins">
          Weight loss is really important for our health
        </p>
        <button className="font-Averia text-black px-3 py-1 bg-[rgb(255,215,0)] rounded-xl w-32 mt-4">
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
