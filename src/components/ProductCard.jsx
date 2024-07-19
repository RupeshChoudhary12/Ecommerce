import React, { useContext, useState } from "react";
import car from "../assets/car.png";
import shoes from "../assets/shoes.png";
import remotesmall from "../assets/remotesmall.png";
import coat from "../assets/coat.png";
import { CartContext } from "./AddCard";

const products = [
  {
    id: 1,
    name: "Kids Electric Car",
    image: car,
    price: "960",
    discount: "20%",
    rating: "65",
  },
  {
    id: 2,
    name: "Jr.Zoom Sccer Cleats",
    image: shoes,
    price: "1160",
    discount: "20%",
    rating: "35",
  },
  {
    id: 3,
    name: "GP11 Shooter USB Gamepad",
    image: remotesmall,
    price: "660",
    discount: "20%",
    rating: "55",
  },
  {
    id: 4,
    name: "Qulited Satin Jacket",
    image: coat,
    price: "660",
    discount: "20%",
    rating: "55",
  },
];

const ProductCard = () => {
  const { addToCart } = useContext(CartContext);

  const [filterClasses, setFilterClasses] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = "";
      return acc;
    }, {})
  );

  const handleButtonClick = (id, filter) => {
    setFilterClasses((prevState) => ({
      ...prevState,
      [id]: prevState[id] === filter ? "" : filter,
    }));
  };

  return (
    <div>
      <div className="container mx-auto  mt-10 flex px- flex-wrap max-sm:flex-wrap max-sm:justify-center max-sm:gap-5 max-sm:px-0">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-60 max-w-sm mx-auto shadow-md  rounded-lg overflow-hidden relative group hover:scale-105"
          >
            <div className="relative bg-gray-100">
              <img
                id="product-image"
                src={product.image}
                alt="Product"
                className={`w-full h-48 object-cover ${
                  filterClasses[product.id]
                }`}
              />
              <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                {product.discount}
              </span>
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
                <button className="bg-white text-gray-600 p-1 mt-1 ml-3 rounded-full">
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
                </button>
              </div>
              <div className="absolute mt-40 inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  key={product.id}
                  onClick={() => addToCart(product)}
                  className="py-2 px-4 w-full bg-black text-white font-bold rounded hover:bg-red-600"
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-sm mb-2">{product.name}</h3>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xl font-bold text-red-500">
                  ${product.price}
                </span>
                <span className="text-gray-500 line-through">$320</span>
              </div>
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927C9.349 2.378 10 2.378 10.3 2.927l1.26 2.556a1 1 0 00.755.545l2.82.41c.659.096.92.91.444 1.374l-2.04 1.99a1 1 0 00-.287.888l.48 2.809c.114.669-.586 1.18-1.18.87l-2.518-1.324a1 1 0 00-.932 0l-2.518 1.324c-.594.31-1.294-.201-1.18-.87l.48-2.809a1 1 0 00-.287-.888l-2.04-1.99c-.476-.464-.215-1.278.444-1.374l2.82-.41a1 1 0 00.755-.545L9.049 2.927z"></path>
                  </svg>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927C9.349 2.378 10 2.378 10.3 2.927l1.26 2.556a1 1 0 00.755.545l2.82.41c.659.096.92.91.444 1.374l-2.04 1.99a1 1 0 00-.287.888l.48 2.809c.114.669-.586 1.18-1.18.87l-2.518-1.324a1 1 0 00-.932 0l-2.518 1.324c-.594.31-1.294-.201-1.18-.87l.48-2.809a1 1 0 00-.287-.888l-2.04-1.99c-.476-.464-.215-1.278.444-1.374l2.82-.41a1 1 0 00.755-.545L9.049 2.927z"></path>
                  </svg>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927C9.349 2.378 10 2.378 10.3 2.927l1.26 2.556a1 1 0 00.755.545l2.82.41c.659.096.92.91.444 1.374l-2.04 1.99a1 1 0 00-.287.888l.48 2.809c.114.669-.586 1.18-1.18.87l-2.518-1.324a1 1 0 00-.932 0l-2.518 1.324c-.594.31-1.294-.201-1.18-.87l.48-2.809a1 1 0 00-.287-.888l-2.04-1.99c-.476-.464-.215-1.278.444-1.374l2.82-.41a1 1 0 00.755-.545L9.049 2.927z"></path>
                  </svg>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927C9.349 2.378 10 2.378 10.3 2.927l1.26 2.556a1 1 0 00.755.545l2.82.41c.659.096.92.91.444 1.374l-2.04 1.99a1 1 0 00-.287.888l.48 2.809c.114.669-.586 1.18-1.18.87l-2.518-1.324a1 1 0 00-.932 0l-2.518 1.324c-.594.31-1.294-.201-1.18-.87l.48-2.809a1 1 0 00-.287-.888l-2.04-1.99c-.476-.464-.215-1.278.444-1.374l2.82-.41a1 1 0 00.755-.545L9.049 2.927z"></path>
                  </svg>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927C9.349 2.378 10 2.378 10.3 2.927l1.26 2.556a1 1 0 00.755.545l2.82.41c.659.096.92.91.444 1.374l-2.04 1.99a1 1 0 00-.287.888l.48 2.809c.114.669-.586 1.18-1.18.87l-2.518-1.324a1 1 0 00-.932 0l-2.518 1.324c-.594.31-1.294-.201-1.18-.87l.48-2.809a1 1 0 00-.287-.888l-2.04-1.99c-.476-.464-.215-1.278.444-1.374l2.82-.41a1 1 0 00.755-.545L9.049 2.927z"></path>
                  </svg>
                </div>
                <span className="ml-2 text-gray-600">({product.rating})</span>
              </div>
              <div className="flex space-x-2 justify-center mt-2">
                <button
                  onClick={() => handleButtonClick([product].id, "filter-red")}
                  className="w-4 h-4 bg-red-500 rounded-full focus:outline-none"
                ></button>
                <button
                  onClick={() => handleButtonClick(product.id, "filter-green")}
                  className="w-4 h-4 bg-green-500 rounded-full focus:outline-none"
                ></button>
                <button
                  onClick={() => handleButtonClick(product.id, "filter-blue")}
                  className="w-4 h-4 bg-blue-500 rounded-full focus:outline-none"
                ></button>
                <button
                  onClick={() => handleButtonClick(product.id, "filter-none")}
                  className="w-4 h-4 bg-gray-500 rounded-full focus:outline-none"
                ></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
