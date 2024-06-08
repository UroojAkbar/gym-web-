import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiDumbbell, CiSearch } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { RiMenu2Fill } from "react-icons/ri";
import { VscClose } from "react-icons/vsc";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="bg-[#373737] px-12 py-4 flex justify-between items-center min-w-full">
      <div className="flex items-center text-xl cursor-pointer">
        <CiDumbbell className="text-3xl text-[#FEE715]" />
        <Link to="/" className="font-Averia text-[#FEE715] font-bold ml-2">
          Gym<strong className="text-white">Mini</strong>Store
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex gap-10 px-4 items-center">
        <nav className="flex gap-10 font-Poppins font-semibold text-white">
          <Link to="/" className="hover:text-[#FEE715]">
            Home
          </Link>
          <Link to="/store" className="hover:text-[#FEE715]">
            Store
          </Link>
          <Link to="/blog" className="hover:text-[#FEE715]">
            Blog
          </Link>
        </nav>
        <div className="flex gap-6 items-center ml-10">
          <div className="relative">
            <input
              className="outline-none text-black rounded-full pl-3 pr-10 py-1 bg-white"
              type="text"
              placeholder="Search..."
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <CiSearch className="text-white text-lg" />
            </button>
          </div>
          <div className="relative">
            <Link to="/cart">
              <BsCart3 className="text-2xl" />
              <span className="absolute -right-2 -top-2 bg-red-600 text-white text-xs rounded-full px-2 py-0.5">
                1
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-3xl text-white cursor-pointer"
        >
          {open ? <VscClose /> : <RiMenu2Fill />}
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`fixed top-0 ${
          open ? "left-0" : "-left-full"
        } h-full bg-[#414141] w-[60%] z-50 transition-all duration-500 md:hidden`}
      >
        <div className="flex justify-center my-8 items-center text-xl cursor-pointer">
          <CiDumbbell className="text-3xl text-[#FEE715]" />
          <Link to="/" className="font-Averia text-[#FEE715] font-bold ml-2">
            Gym<strong className="text-white">Mini</strong>Store
          </Link>
        </div>
        <Link
          onClick={toggleMenu}
          to="/"
          className="block text-white p-4 hover:text-[#FEE715]"
        >
          Home
        </Link>
        <Link
          onClick={toggleMenu}
          to="/store"
          className="block text-white p-4 hover:text-[#FEE715]"
        >
          Store
        </Link>
        <Link
          onClick={toggleMenu}
          to="/blog"
          className="block text-white p-4 hover:text-[#FEE715]"
        >
          Blog
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
