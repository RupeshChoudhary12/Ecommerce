import React, { useContext } from "react";
import Best from "./Best";
import bag from "../assets/bag.png";
import jaket from "../assets/jaket.png";
import tap from "../assets/tap.png";
import sell from "../assets/sell.png";
import { CartContext } from "./AddCard";

const products = [
  {
    id: 1,
    name: "The north coat",
    price: "$260",
    oldPrice: "$360",
    rating: 4.5,
    image: jaket,
  },
  {
    id: 2,
    name: "Gucci duffle bag",
    price: "$960",
    oldPrice: "$1160",
    rating: 4.5,
    image: bag,
  },
  {
    id: 3,
    name: "RGB liquid CPU Cooler",
    price: "$160",
    oldPrice: "$170",
    rating: 4.5,
    image: tap,
  },
  {
    id: 4,
    name: "Small BookSelf",
    price: "$360",
    oldPrice: "$120",
    rating: 4.5,
    image: sell,
  },
];

const BestSellingProducts = () => {
  // const { addToCart } = useContext(CartContext);
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <Best />

      <div className="container mx-auto   max-sm:px-0">
        <div className="flex justify-end items-end mb-4">
          <button className="bg-red-500 flex justify-end text-white px-4 py-2 rounded-lg">
            View All
          </button>
        </div>

        <div>
          <div className="flex  max-sm:flex-wrap max-sm:justify-center px-5">
            {products.map((item) => (
              <div
                key={item.id}
                className="w sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-sm rounded overflow-hidden shadow-lg  m-4 relative group transform transition-transform duration-300 hover:scale-105"
              >
                <div className="relative bg-gray-100">
                  <div className="flex justify-center items-center">
                    <img
                      className="h-48 object-cover items-center flex justify-center  "
                      src={item.image}
                      alt="Product Image"
                    />
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
                    <div className="text-black p-2 rounded-full items-start flex-col flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 bg-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 bg-white"
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
        </div>
      </div>
    </>
  );
};

export default BestSellingProducts;
