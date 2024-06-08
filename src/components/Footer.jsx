import React, { useState } from "react";
import {
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { CiDumbbell } from "react-icons/ci";
import { Link } from "react-router-dom";

const Footer = () => {
  // State for managing the visibility of footer sections on mobile
  const [infoVisible, setInfoVisible] = useState(false);
  const [supportVisible, setSupportVisible] = useState(false);
  const [newsletterVisible, setNewsletterVisible] = useState(false);

  // Toggle functions for each section
  const toggleInfo = () => setInfoVisible(!infoVisible);
  const toggleSupport = () => setSupportVisible(!supportVisible);
  const toggleNewsletter = () => setNewsletterVisible(!newsletterVisible);

  return (
    <>
      <footer className="bg-[#808080] border-t-4 border-b-4 border-[rgb(255,215,0)] py-8 px-6 flex flex-col items-center justify-around sm:flex-row md:justify-between sm:flex-wrap">
        {/* Brand and Socials Section */}
        <div className="flex flex-col w-full md:w-1/4 text-white items-center md:items-start justify-center mb-5 md:mb-0">
          <div className="flex flex-col items-center mb-10">
            <CiDumbbell className="object-cover" />
            <p className="font-Averia text-[#FEE715] text-3xl font-bold mt-[-3px]">
              Gym<strong className="text-white">Mini</strong>Store
            </p>
          </div>
          <p className="font-poppins text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            at!
          </p>
          <div className="socials flex gap-2 mt-5 text-xl">
            <FaTwitter className="hover:text-[#FEE715]" />
            <FaYoutube className="hover:text-[#FEE715]" />
            <FaLinkedin className="hover:text-[#FEE715]" />
            <FaFacebook className="hover:text-[#FEE715]" />
            <FaInstagram className="hover:text-[#FEE715]" />
          </div>
        </div>

        {/* Information Section */}
        <div className="w-full md:w-auto text-center md:text-left">
          <h2
            className="font-Averia text-xl font-semibold mb-5 uppercase cursor-pointer"
            onClick={toggleInfo}
          >
            Information
          </h2>
          {infoVisible && (
            <ul className="flex flex-col gap-2 font-Poppins cursor-pointer">
              <li className="hover:text-[#FEE715]">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-[#FEE715]">
                {" "}
                <Link to="/store">Store</Link>
              </li>
              <li className="hover:text-[#FEE715]">
                {" "}
                <Link to="/blog">Blogs</Link>
              </li>
            </ul>
          )}
        </div>

        {/* Support Section */}
        <div className="w-full md:w-auto text-center md:text-left mt-5 md:mt-0">
          <h2
            className="font-Averia text-xl font-semibold mb-5 uppercase cursor-pointer"
            onClick={toggleSupport}
          >
            Support
          </h2>
          {supportVisible && (
            <ul className="flex flex-col gap-2 font-Poppins cursor-pointer">
              <li className="hover:text-[#FEE715]">FAQ</li>
              <li className="hover:text-[#FEE715]">Contact Us</li>
              <li className="hover:text-[#FEE715]">Help</li>
            </ul>
          )}
        </div>

        {/* Newsletter Section */}
        <div className="w-full md:w-auto text-center md:text-left mt-5 md:mt-0">
          <h2
            className="font-Averia text-xl font-semibold mb-5 uppercase cursor-pointer"
            onClick={toggleNewsletter}
          >
            Newsletter
          </h2>
          {newsletterVisible && (
            <div className="flex flex-col items-center md:items-start">
              <p>Subscribe to our Newsletter and get amazing updates.</p>
              <div className="relative mt-2">
                <input
                  className="rounded-full text-black outline-none text-[12px] w-72 font-Poppins px-3 pr-10 py-2"
                  type="email"
                  placeholder="Your Email Address"
                />
                <button className="absolute font-Averia px-3 bg-[rgb(255,215,0)] text-black rounded-full -ml-[99px] mt-[5px]">
                  Subscribe
                </button>
              </div>
            </div>
          )}
        </div>
      </footer>
      <div className="bg-[#808080] text-white p-5">
        <h1 className="font-Poppins text-sm text-center">
          Copyright © 2024 . All rights reserved.{" "}
          <strong className="font-Averia font-semibold cursor-pointer text-lg text-[rgb(255,215,0)]">
            Urooj Akbar
          </strong>
        </h1>
      </div>
    </>
  );
};

export default Footer;
