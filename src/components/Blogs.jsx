import React from "react";
import BlogCard from "./BlogCard";
import BlogImg1 from "../assets/images/Blog1.png";
import BlogImg2 from "../assets/images/Blog2.png";
import BlogImg3 from "../assets/images/Blog3.png";
import BlogImg4 from "../assets/images/Blog4.png";
// import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <div className="bg-[#373737] text-white py-10 flex justify-center flex-col items-center">
      <h1 className="font-Averia text-4xl">Best Blogs</h1>
      <div className="w-28 h-1 bg-[rgb(255,215,0)] mt-2"></div>
      <div className="flex flex-wrap gap-1 items-center justify-center bg-[#373737] py-10">
        <BlogCard
          title="Weight Loss"
          display={"flex-col"}
          BlogImg={BlogImg1}
          imgWidth={"w-56"}
        />
        <BlogCard
          title="Gym Equipments"
          display={"flex-col-reverse"}
          BlogImg={BlogImg2}
          textColor={"text-black"}
          imgWidth={"w-56 h-[149px]"}
        />
        <BlogCard
          title="Healthy LifeStyle"
          display={"flex-col"}
          BlogImg={BlogImg3}
          textColor={"text-black"}
          imgWidth={"w-56 h-[149px]"}
        />
        <BlogCard
          title="Yoga"
          display={"flex-col-reverse"}
          BlogImg={BlogImg4}
          imgWidth={"w-56 h-[149px]"}
        />
      </div>
    </div>
  );
};

export default Blogs;
