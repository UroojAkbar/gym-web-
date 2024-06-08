import React from "react";
import heroImg from "../assets/images/HeroImg.png";
import "../App.css"

const Hero = () => {
  return (
    <section className=" w-full h-screen flex flex-col items-center justify-center bg-no-repeat bg-center bg-cover">
      <h1 className="font-Averia text-6xl sm:text-8xl font-bold text-[rgb(255,215,0)] md:mt-[140px] text-outline">
        CHANGE
      </h1>
      <h1 className="font-Averia text-4xl sm:text-6xl font-semibold text-white mt-5">
        YOUR LIFESTYLE
      </h1>
      <img
        className="w-full absolute h-screen object-cover max-w-screen-1xl -z-10"
        src={heroImg}
        alt="Hero-Image"
      />
    </section>
  );
};

export default Hero;
