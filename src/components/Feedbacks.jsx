import React, { useState } from "react";
import Feedback from "./Feed";
import ClientImg from "../assets/images/Client2.png";
import Client2Img from "../assets/images/client.png";
import Dots from "./Dots";

const Feedbacks = () => {


  return (
    <>
      <div className="bg-[#373737] flex flex-col text-center items-center gap-4 py-10">
        <h1 className="font-Averia text-5xl font-semibold text-white">
          Client's Feedback
        </h1>
        <div className="w-48 h-1 bg-[rgb(255,215,0)]"></div>
      </div>
      <div className="flex flex-col gap-5 bg-[#373737] pb-10">
        <Feedback
          title="MR UA"
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          Img={ClientImg}
          allignment={"-left-12 sm:-left-20"}
          padding={"pl-[100px]"}
        />
        <Feedback
          title="MR Sahil"
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          Img={Client2Img}
          allignment={"-right-12 sm:-right-20"}
          allignTitle={"text-end"}
          padding={"pr-[100px]"}
        />
        <Feedback
          title="Jasica"
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          Img={ClientImg}
          allignment={"-left-12 sm:-left-20"}
          padding={"pl-[100px]"}
          />
        <Feedback
          title="MR JOHN"
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          Img={Client2Img}
          allignment={"-right-12 sm:-right-20"}
          allignTitle={"text-end"}
          padding={"pr-[100px]"}
          dots={<Dots />}
          />
      </div>
    </>
  );
};

export default Feedbacks;
