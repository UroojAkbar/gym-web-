import React from "react";
import ImgLift from "../assets/images/LiftingImg.png";
import dChart from "../assets/images/DChart.png";
import wLoss from "../assets/images/wLoss.png";
import qualtyImg from "../assets/images/quality.png";
import { Link } from "react-router-dom";

const SellSection = () => {
  return (
    <div className="flex flex-col bg-[#373737] px-10 relative">
      <div className="absolute bg-[#808080] w-3/4 md:w-2/3 -top-14 left-16 md:-top-10 md:left-[160px] lg:left-[220px] flex justify-center items-center rounded-2xl opacity-80">
        <div className="flex flex-col text-center md:flex-row md:text-start gap-1 items-center py-2 sm:py-6 px-2 border-r-2 border-[rgb(255,215,0)]">
          <img className="relative" src={qualtyImg} width={50} alt="image" />
          <img
            className="absolute rotate-90"
            src={qualtyImg}
            width={50}
            alt="image"
          />
          <h2 className="text-white font-Averia font-semibold text-lg md:text-2xl">
            Quality Equipments
          </h2>
        </div>
        <div className="flex flex-col text-center md:flex-row md:text-start gap-1 items-center py-2 sm:py-6 px-2 border-r-2 border-[rgb(255,215,0)]">
          <img src={wLoss} width={50} alt="image" />
          <h2 className="text-white font-Averia font-semibold sm:lg md:text-2xl">
            Weight Loss
          </h2>
        </div>
        <div className="flex flex-col text-center md:flex-row md:text-start gap-1 items-center py-2 sm:py-6 px-2">
          <img src={dChart} width={50} alt="image" />
          <h2 className="text-white font-Averia font-semibold sm:lg md:text-2xl">
            Diet Chart
          </h2>
        </div>
      </div>
      <div className="py-32 flex flex-col md:flex-row items-center justify-around gap-10">
        <div className="left relative  ">
          <img
            className="rounded-3xl h-[350px] object-cover "
            src={ImgLift}
            width={400}
            alt="Weight-lifting-image"
          />
          <div className="absolute sm:w-48 bg-white text-center font-semibold text-black font-Poppins px-5 sm:px-10 py-3 right-20 top-[92%] sm:-right-20 sm:top-[50%] rounded-2xl">
            <h2>Best Workout machine</h2>
          </div>
        </div>

        <div className="right w-2/3 md:w-1/3 flex flex-col justify-items-start text-white">
          <h1 className="font-Averia text-3xl  mb-8">
            Get Ready to Reach Your Fitness Goals
          </h1>
          <p className="font-Poppins mb-6 opacity-60 text-sm">
            Combining aerobic exercise with other kinds of exercises like
            strength training with weights and stretching keeps muscles,
            ligaments, joints, and tendons healthy, flexible, and strong, so
            when one becomes older, He is stronger and has less risk of being
            out of balance and falling causing fractures or other injuries
          </p>
          <Link to="./store">
          <button  className="px-3 py-1 bg-[rgb(255,215,0)] rounded-xl w-28">
            Buy Now
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellSection;
