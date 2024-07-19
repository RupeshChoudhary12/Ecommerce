import React, { useContext } from "react";
import remote from "../assets/remote.png";
import keyboard from "../assets/keyboard.png";
import ledtv from "../assets/led.png";
import chair from "../assets/chair.png";
import { Link } from "react-router-dom";
import { CartContext } from "./AddCard";

const Card = () => {
  const { addToCart } = useContext(CartContext);

  const product = [
    {
      id: 1,
      image: remote,
      name: "HAVIT HV-G92 Gamepad",
      price: "$120",
      rating: 4.5,
    },
    {
      id: 2,
      image: keyboard,
      name: "AK-900 Wired KeyBoard",
      price: "$200",
      rating: 4.5,
    },
    {
      id: 3,
      image: ledtv,
      name: "IPS LCD Gaming Montitar",
      price: "$370",
      rating: 4.5,
    },
    {
      id: 4,
      image: chair,
      name: "S-Series Comfort Chir",
      price: "$375",
      rating: 4.5,
    },
  ];

  return (
    <div>
      <div className="flex p-14 max-sm:flex-wrap max-sm:justify-center">
        {product.map((item) => (
          <div
            key={item.id}
            className="w sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-sm rounded overflow-hidden shadow-lg  m-4 relative group transform transition-transform duration-300 hover:scale-105"
          >
            <div className="relative bg-gray-100">
              <div className="flex justify-center items-center">
                <img
                  className="h-48 object-cover items-center flex justify-center"
                  src={item.image}
                  alt="Product Image"
                />
              </div>

              <div className="absolute top-2 left-2 bg-gray-500 text-white text-xs font-bold py-1 px-2 rounded">
                20% OFF
              </div>

              <div className="absolute inset-0 flex items-center justify-center mt-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => addToCart(item)}
                  className="py-2 px-4 w-full bg-black text-white font-bold rounded hover:bg-red-600"
                >
                  Add to Cart
                </button>
              </div>
              <div className="absolute top-0 right-0 mt-2 mr-2 flex space-y-2">
                <div className="absolute flex-col top-2 right-2 flex space-x-2">
                  <button className="bg-white ml-3 text-gray-600 p-1 rounded-full">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656l-6.828 6.829a.5.5 0 01-.707 0L3.172 10.828a4 4 0 010-5.656z"></path>
                    </svg>
                  </button>
                  <Link
                    to="/view"
                    className="bg-white text-gray-600 p-1 mt-1 ml-3 rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="px-6 py-4">
              <div className="font-bold text-sm mb-2">{item.name}</div>
              <p className="text-red-700 text-base">{item.price}</p>
              <div className="flex items-center">
                <div className="text-yellow-500">
                  {"★".repeat(Math.round(item.rating))}
                  {"☆".repeat(5 - Math.round(item.rating))}
                </div>
                <span className="text-gray-500 ml-2">({item.rating})</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Link to="/cart">
          <button className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300">
            View All Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;