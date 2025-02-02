import React from 'react';
import { Link } from 'react-router-dom';
import NutritionIcon from "../Assets/Nutrition Icon.png";

const Header = () => {
  return (
    <nav className="bg-zinc-950 text-white py-4">
      <h3 className="flex justify-center items-center m-1.5 ml-4 text-2xl text-center md:text-3xl">
        Innovate Today, Dominate Tomorrow
      </h3>
      <hr className="my-2 border-t border-gray-400" />
      <div className="flex flex-wrap justify-between items-center max-w-7xl mx-auto px-4">
        <li className="logo text-2xl gap-2 font-semibold flex items-center mb-2 md:mb-0">
          <img className="size-8 mr-2" src={NutritionIcon} alt="Nutrition Icon" />
          AI INTEGRATOR
        </li>
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 items-center w-full md:w-auto justify-center">
          <Link className="hover:bg-pink-600 px-2 py-2 rounded text-center" to="/">Home</Link>
          <Link className="hover:bg-pink-600 px-2 py-2 rounded text-center" to="/about2">About</Link>
          <Link className="hover:bg-pink-600 px-2 py-2 rounded text-center" to="/TeamMembers2">Services</Link>
          <Link className="hover:bg-pink-600 px-2 py-2 rounded text-center" to="/process">Process</Link>
          <Link className="hover:bg-pink-600 px-2 py-2 rounded text-center" to="/blog">Blog</Link>
          <Link to="/contact">
            <button className="bg-lime-600 text-white px-4 py-1 rounded-md text-sm hover:bg-pink-600">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
