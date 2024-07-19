import React, { useContext } from "react";
import Product from "./Product";
import remote from "../assets/cadbary.jpeg";
import keyboard from "../assets/canon.png";
import ledtv from "../assets/laptop.png";
import chair from "../assets/cream.png";
import { CartContext } from "./AddCard";

const ProductList = () => {
  const { addToCart } = useContext(CartContext);
  const product = [
    {
      id: 1,
      image: remote,
      name: "Breed dry dog Food",
      price: "$100",
      rating: 35,
    },
    {
      id: 2,
      image: keyboard,
      name: "CANON EOS DSLR Camera",
      price: "$360",
      rating: 95,
    },
    {
      id: 3,
      image: ledtv,
      name: "ASUS FHD Gaming Laptop",
      price: "$700",
      rating: 325,
    },
    {
      id: 4,
      image: chair,
      name: "Curology Product Set",
      price: "$500",
      rating: 145,
    },
  ];
  return (
    <>
      <Product />

      <div>
        <div className="flex px-20 max-sm:flex-wrap justify-center">
          {product.map((item) => (
            <div
              key={item.id}
              className="w sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-sm rounded overflow-hidden shadow-lg  m-4 relative group transform transition-transform duration-300 hover:scale-105"
            >
              <div className="relative bg-gray-100 flex items-center justify-center object-cover">
                <img
                  className="h-44 object-cover mt-3"
                  src={item.image}
                  alt="Product Image"
                />
                <div className="absolute top-0 right-0 mt-2 mr-2 flex flex-col space-y-2">
                  <div className="absolute flex-col top-2 right-2 flex space-x-2">
                    <button className="bg-white ml-3 text-gray-600 p-1 rounded-full">
                      <svg
                        className="w-5 h-5 "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656l-6.828 6.829a.5.5 0 01-.707 0L3.172 10.828a4 4 0 010-5.656z"></path>
                      </svg>
                    </button>
                    <button className="bg-white text-gray-600 p-1 mt-1 ml-3  rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6  "
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
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => addToCart(item)}
                    className="py-2 px-4 mt-44 w-full bg-black text-white font-bold rounded hover:bg-red-600"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-sm mb-2">{item.name}</div>
                <p className="text-gray-700 text-base">{item.price}</p>
                <div className="flex items-center mt-2">
                  {[...Array(4)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.03 5.46-4.73-7.12-.61L12 2 9.12 8.63l-7.12.61 5.46 4.73-1.64 7.03L12 17.27z" />
                    </svg>
                  ))}
                  <svg
                    className="w-4 h-4 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27l6.18 3.73-1.64-7.03 5.46-4.73-7.12-.61L12 2 9.12 8.63l-7.12.61 5.46 4.73-1.64 7.03L12 17.27z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
