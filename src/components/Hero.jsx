import React from "react";
import logo from "../assets/logo.png";
import phone from "../assets/hero.jpeg";

const Hero = () => {
  return (
    <div className="w-full flex flex-wrap px-10 ">
      <aside className="w-64 h-50 border-r border-gray-500 hidden sm:block">
        <nav className="mt-4 ml-6">
          <ul>
            <li>
              <a
                href="#home"
                className="block p-2 rounded hover:bg-gray-700 hover:text-white"
              >
                Woman Fashion
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block p-2 rounded hover:bg-gray-700 hover:text-white"
              >
                Man Fashion
              </a>
            </li>
            <li>
              <a
                href="#signup"
                className="block p-2 rounded hover:bg-gray-700 hover:text-white"
              >
                Electronics
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block p-2 rounded hover:bg-gray-700 hover:text-white"
              >
                Home Life Style
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block p-2 rounded hover:bg-gray-700 hover:text-white"
              >
                Medicine
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block p-2 rounded hover:bg-gray-700 hover:text-white"
              >
                Sports & Outdoor
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block p-2 rounded hover:bg-gray-700 hover:text-white"
              >
                Baby's Toys
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block p-2 rounded hover:bg-gray-700 hover:text-white"
              >
                Groceries and Pets
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block p-2 rounded hover:bg-gray-700 hover:text-white"
              >
                Health and Beauty
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <div className="bg-black w-full  md:w-2/3 ml-4 md:ml-16 mt-4 flex flex-col md:flex-row justify-between items-center p-4 ">
        <div className="ml-4 md:ml-24 text-center md:text-left">
          <span className="flex items-center justify-center md:justify-start">
            <img src={logo} alt="Logo" className="w-10" />
            <p className="text-neutral-50 text-sm mt-2 ml-2">
              iPhone 14 Series
            </p>
          </span>
          <h2 className="text-white text-sm md:text-6xl font-semibold mt-4 md:mt-0">
            Up to 10% <br />
            off Voucher
          </h2>
          <button className="text-white hover:text-red-400 mt-4 md:mt-10">
            Shop Now
          </button>
        </div>
        <img src={phone} alt="Phone" className="w-48 h-auto mt-4 md:mt-0" />
      </div>
    </div>
  );
};

export default Hero;
