import React from "react";
import vector from "../assets/Vector.png";
import turn from "../assets/Icon-return.png";
import remote1 from "../assets/remot1.png";
import remote2 from "../assets/remote2.png";
import remote3 from "../assets/remote3.png";
import remote4 from "../assets/remote4.png";
import main from "../assets/mainremote.png";
import Card from "./Card";
import Footer from "./Footer";

const ViewSection = () => {
  return (
    <>
      <div class=" mx-auto   ">
        <div class="flex flex-col lg:flex-row">
          <div class="flex  justify-center w-full  items-center lg:w-1/2">
            <div class=" object-cover flex flex-col m-5  gap-10 space-x-2 mb-4">
              <img
                src={remote1}
                alt="Product Image 1"
                class="w-40 h-20 object-cover border rounded bg-gray-100 ml-2"
              />
              <img
                src={remote2}
                alt="Product Image 2"
                class="w-20 h-20 object-cover border rounded bg-gray-100"
              />
              <img
                src={remote3}
                alt="Product Image 3"
                class="w-20 h-20 object-cover border rounded bg-gray-100"
              />
              <img
                src={remote4}
                alt="Product Image 4"
                class="w-20 h-20 object-cover border rounded bg-gray-100 "
              />
            </div>
            <img
              src={main}
              alt="Main Product Image"
              class="w-full max-w-md object-cover  rounded bg-gray-200"
            />
          </div>

          <div class="lg:w-1/2 lg:ml-10 mt-10 ">
            <h1 class="text-3xl font-bold mb-2">Havic HV G-92 Gamepad</h1>
            <div class="flex items-center mb-4">
              <span class="text-yellow-500 text-lg">★★★★★</span>
              <span class="ml-2 text-gray-500">(250 Reviews)</span>
              <span class="ml-4 text-green-500">In Stock</span>
            </div>
            <p class="text-2xl font-bold  mb-4">$192.00</p>
            <p class="mb-4">
              PlayStation 5 Controller Skin. High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal.
              Pressure sensitive.
            </p>

            <div class="mb-4">
              <h3 class="font-semibold mb-2">Colours:</h3>
              <div class="flex space-x-2">
                <button class="w-6 h-6 bg-gray-800 rounded-full"></button>
                <button class="w-6 h-6 bg-gray-300 rounded-full"></button>
              </div>
            </div>

            <div class="mb-4">
              <h3 class="font-semibold mb-2">Size:</h3>
              <div class="flex space-x-2">
                <button class="px-4 py-2 border rounded hover:bg-red-500 hover:text-white">
                  XS
                </button>
                <button class="px-4 py-2 border rounded hover:bg-red-500 hover:text-white">
                  S
                </button>
                <button class="px-4 py-2 border rounded hover:bg-red-500 hover:text-white">
                  M
                </button>
                <button class="px-4 py-2 border rounded hover:bg-red-500 hover:text-white">
                  L
                </button>
                <button class="px-4 py-2 border rounded hover:bg-red-500 hover:text-white">
                  XL
                </button>
              </div>
            </div>

            <div class="flex items-center mb-4">
              <h3 class="font-semibold mr-2">Quantity:</h3>
              <div class="flex items-center border rounded">
                <button class="px-4 py-2">-</button>
                <input
                  type="text"
                  value="2"
                  class="w-12 text-center border-none"
                />
                <button class="px-4 py-2 text-red-400">+</button>
              </div>
              <div class="ml-10">
                <button class="w-full px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600">
                  Buy Now
                </button>
              </div>
            </div>

            <div class="border-t pt-4 flex  border flex-col border-gray-300">
              <div class="flex items-center mb-2">
                <img src={vector} alt="" className="object-cover ml-2" />
                <span className="flex flex-col ml-10">
                  Free Delivery{" "}
                  <a href="#" class="underline text-sm">
                    Enter your postal code for Delivery Availability
                  </a>
                </span>
              </div>
              <div class="flex items-center">
                <img src={turn} alt="" />
                <span className="flex flex-col ml-10">
                  Return Delivery{" "}
                  <a href="#" class="underline text-sm">
                    Free 30 Days Delivery Returns. Details
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Card />
      <div className="mt-10">
        <Footer />
      </div>
    </>
  );
};

export default ViewSection;
