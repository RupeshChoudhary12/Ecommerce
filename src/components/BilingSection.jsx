import React from "react";
import led from "../assets/led.png";
import image from "../assets/image 30.png";
import image1 from "../assets/image 31.png";
import image2 from "../assets/image 32.png";
import image3 from "../assets/image 33.png";

const BilingSection = () => {
  return (
    <div>
      <nav class="bg-white p-4 shadow">
        <div class="container mx-auto">
          <ul class="flex space-x-4">
            <li>
              <a href="#" class="text-purple-700">
                Account
              </a>
            </li>
            <li class="text-gray-500">/</li>
            <li>
              <a href="#" class="text-gray-700">
                My Account
              </a>
            </li>
            <li class="text-gray-500">/</li>

            <li>
              <a href="#" class="text-gray-700">
                Product
              </a>
            </li>
            <li class="text-gray-500">/</li>

            <li>
              <a href="#" class="text-gray-700">
                View Cart
              </a>
            </li>
            <li class="text-gray-500">/</li>

            <li>
              <a href="#" class="text-black">
                Check Out
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container max-auto w-full flex justify-between items-center p-10 ">
        <div className="container mx-auto w-full flex flex-col lg:flex-row justify-between items-center p-5 lg:p-10">
          <div className="w-full lg:w-1/2">
            <h1 className="text-xl font-semibold mb-5">Billing Details</h1>
            <div className="mb-4 w-full lg:w-96">
              <label htmlFor="firstName" className="block text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full p-2 border bg-gray-100 border-black rounded mt-1"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="companyName"
                className="block mt-10 text-gray-700"
              >
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                className="w-96 p-2 border bg-gray-100 border-black rounded mt-1"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="streetAddress"
                className="block mt-10 text-gray-700"
              >
                Street Address
              </label>
              <input
                type="text"
                id="streetAddress"
                className="w-96 p-2 border bg-gray-100 border-black rounded mt-1"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="apartment" className="block mt-10 text-gray-700">
                Apartment, floor, etc (optional)
              </label>
              <input
                type="text"
                id="apartment"
                className="w-96 p-2 border bg-gray-100 border-black rounded mt-1"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="townCity" className="block mt-10 text-gray-700">
                Town/City
              </label>
              <input
                type="text"
                id="townCity"
                className="w-96 p-2 border bg-gray-100 border-black rounded mt-1"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phoneNumber"
                className="block mt-10 text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                className="w-96 p-2 border bg-gray-100 border-black rounded mt-1"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="emailAddress"
                className="block mt-10 text-gray-700"
              >
                Email Address
              </label>
              <input
                type="text"
                id="emailAddress"
                className="w-96 p-2 border bg-gray-100 border-black rounded mt-1"
              />
            </div>
            <label className="flex items-center space-x-2 mt-10">
              <input
                type="checkbox"
                className="form-checkbox custom-checkbox text-red-500"
              />
              <span>Save this information for faster check-out next time</span>
            </label>
          </div>
          <div className="w-full lg:w-96 h-full mt-10 lg:mt-0">
            <div className="flex justify-between mt-5">
              <span className="flex">
                <img
                  className="w-10 h-10 object-cover"
                  src={led}
                  alt="LED Monitor"
                />
                <h4 className="mt-1 ml-2">LED Monitor</h4>
              </span>
              <h3>$960</h3>
            </div>
            <div className="flex justify-between mt-5">
              <span className="flex">
                <img
                  className="w-10 h-10 object-cover"
                  src={led}
                  alt="LED Monitor"
                />
                <h4 className="mt-1 ml-2">LED Monitor</h4>
              </span>
              <h3>$960</h3>
            </div>
            <div className="flex justify-between mt-5 border-b border-gray-300">
              <h4>SubTotal</h4>
              <h4>$1920</h4>
            </div>
            <div className="flex justify-between mt-5 border-b border-gray-300">
              <h4>Shipping</h4>
              <h4>Free</h4>
            </div>
            <div className="flex justify-between mt-5  ">
              <h4>Total</h4>
              <h4>$1750</h4>
            </div>
            <div class="w-full max-w-lg bg-white mt-3 rounded shadow-md">
              <div class="mb-5">
                <label class="flex items-center mb-3">
                  <input
                    type="radio"
                    name="payment"
                    class="form-radio text-black"
                  />
                  <span class="ml-2">Bank</span>
                </label>
                <div class="flex items-center space-x-3 mb-5">
                  <img src={image} alt="Ikash" />
                  <img src={image1} alt="Visa" />
                  <img src={image2} alt="MasterCard" />
                  <img src={image3} alt="Orange" />
                </div>
                <label class="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    class="form-radio text-black"
                  />
                  <span class="ml-2">Cash on delivery</span>
                </label>
              </div>
              <div class="mb-5">
                <label for="coupon" class="block mb-2">
                  Coupon Code
                </label>
                <div class="flex justify-between">
                  <input
                    type="text"
                    id="coupon"
                    class="w-40 p-2 border border-gray-300 rounded-l"
                    placeholder="Coupon Code"
                  />
                  <button class="p-2 bg-red-500 text-white rounded-r">
                    Apply Coupon
                  </button>
                </div>
              </div>
              <button class="w-60 p-3 bg-red-500 text-white rounded">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BilingSection;
