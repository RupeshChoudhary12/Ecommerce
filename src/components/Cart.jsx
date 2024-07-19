import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./AddCard";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const initialQuntities = {};
    cart.forEach((item) => {
      initialQuntities[item.id] = 1;
    });
    setQuantities(initialQuntities);
  }, [cart]);

  const handleIncrease = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const handleDecrease = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1,
    }));
  };

  const handleRemove = (id) => {
    removeFromCart(id);
    setQuantities((prev) => {
      const updatedQuntities = { ...prev };
      delete updatedQuntities[id];
      return updatedQuntities;
    });
  };
  return (
    <div>
      <nav className="container bg-white p-4 shadow">
        <div className="container  mx-auto">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-purple-700">
                Home
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li>
              <Link to="/cart" className="text-gray-700">
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container   mt-10 px-16">
        <div className="w-full  h-16 shadow-xl ">
          <ul className="flex w-full h-16 justify-around items-center shadow-md">
            <li>
              <span>Product</span>
            </li>
            <li>
              <span>Price</span>
            </li>
            <li>
              <span>Quantity</span>
            </li>
            <li>
              <span>SubTotal</span>
            </li>
          </ul>
        </div>
        {cart.map((item) => (
          <div key={item.id} className="w-full h-16 shadow-xl flex mt-10">
            <ul className="flex w-full h-16 justify-around items-center shadow-md">
              <li className="flex w-auto">
                <img src={item.image} alt={item.name} className="h-10 w-20" />
                <span>{item.name}</span>
              </li>
              <li>
                <span>{item.price}</span>
              </li>
              <li>
                <div className="flex items-center">
                  <button
                    onClick={() => handleDecrease(item.id)}
                    className="bg-gray-300 text-gray-700 rounded-l px-3 py-1 hover:bg-gray-400 focus:outline-none"
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={quantities[item.id] || 1}
                    readOnly
                    className="w-12 text-center border-t border-b border-gray-300 focus:outline-none"
                  />
                  <button
                    onClick={() => handleIncrease(item.id)}
                    className="bg-gray-300 text-gray-700 rounded-r px-3 py-1 hover:bg-gray-400 focus:outline-none"
                  >
                    +
                  </button>
                </div>
              </li>
              <li>
                <span>
                  $
                  {(item.price.slice(1) * (quantities[item.id] || 1)).toFixed(
                    2
                  )}
                </span>
              </li>
              <button
                onClick={() => handleRemove(item.id)}
                className="bg-red-700 text-white rounded-md hover:scale-105 w-20 h-10"
              >
                Remove
              </button>
            </ul>
          </div>
        ))}
        <div className="w-full mt-5 flex items-center justify-between">
          <button className="w-52 h-10 text-sm border border-gray-700 rounded-md hover:scale-105">
            Return To Shop
          </button>
          <button className="w-52 h-10 text-sm border border-gray-700  rounded-md hover:scale-105">
            Update to Cart
          </button>
        </div>

        <div className="w-full mt-5 flex flex-col lg:flex-row items-center justify-between  p-4 lg:p-0">
          <div className="w-full flex flex-col lg:flex-row gap-5 mb-4 lg:mb-0">
            <input
              className="placeholder:text-slate-400 block bg-white w-full lg:w-52 border border-gray-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-200 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Coupon Code"
              type="text"
              name="search"
            />
            <button className="w-full lg:w-48 h-10 text-sm bg-red-500 text-white rounded-md hover:scale-105">
              Apply Coupon
            </button>
          </div>
          <div className="w-full mt-20 border border-gray-500 lg:w-80 h-full  p-5 rounded-md">
            <h1 className="mb-5 font-semibold text-center lg:text-left">
              Cart Total
            </h1>
            <div className="mb-2 border-b border-gray-700 flex items-center justify-between">
              <h1>Subtotal</h1>
              <h1>$1750</h1>
            </div>
            <div className="flex mb-2 border-b border-gray-700 items-center justify-between">
              <h1>Shipping</h1>
              <h1>free</h1>
            </div>
            <div className="flex mt-2 items-center justify-between">
              <h1>Total</h1>
              <h1>$1750</h1>
            </div>
            <Link to="/bill">
              <button className="w-full lg:w-52 mt-5 h-10 text-sm bg-red-500 border border-gray-400 rounded-md text-white">
                Process To Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
