import React from "react";
import { Link } from "react-router-dom";
import cart from "../assets/Cart1.png";

const Navbar = () => {
  return (
    <header class="text-gray-600 body-font border-b border-gray-500 px-10">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Link to="/found" class="ml-3 text-xl">
            Exclusive
          </Link>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center  justify-center">
          <Link to="/" class="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link to="/contact" class="mr-5 hover:text-gray-900">
            Contact
          </Link>
          <Link to="/about" class="mr-5 hover:text-gray-900">
            About
          </Link>
          <Link to="/signup" class="mr-5 hover:text-gray-900">
            Sign Up
          </Link>
        </nav>
        <label class="relative block mr-5 md:mr-15">
          <span class="sr-only">Search</span>
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </span>
          <input
            class="placeholder:text-slate-400 block bg-white w-full border border-gray-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="What are you looking for..."
            type="text"
            name="search"
          />
        </label>
        <div class="items-center flex justify-between mr-5 md:mr-32 gap-10 ">
          <Link to="/view">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              class="w-6 h-6 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </Link>
          <Link to="/cart" className="text-gray-700 relative">
            <img src={cart} alt="Cart" className="w-6 h-6" />
          </Link>
          <Link to="/profile">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
