import React from "react";
import google from "../assets/google.png";
import login from "../assets/login.jpeg";

const LogSection = () => {
  return (
    <div>
      <div className="w-full mt-5 px-16">
        <div class=" shadow-md rounded-lg overflow-hidden  w-full flex bg-white">
          <div class="hidden  md:block w-1/1">
            <img
              src={login}
              alt="Create an Account Image"
              class="h-full w-full object-cover"
            />
          </div>
          <div class="w-full  p-8">
            <h2 class="text-2xl font-bold mb-4">Login in to Exclusive</h2>
            <p class="mb-4">Enter your details below</p>
            <form>
              <div class="mb-4">
                <label for="email" class="block mt-10 text-gray-700">
                  Email or Phone Number
                </label>
                <input
                  type="text"
                  id="email"
                  class="w-full p-2 border-b border-black rounded mt-1"
                />
              </div>
              <div class="mb-4">
                <label for="password" class="block text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  class="w-full p-2 border-b border-black rounded mt-1"
                />
              </div>

              <div className="flex  items-center justify-between">
                <button
                  type="submit"
                  class="w-44 bg-red-500 text-white py-2 rounded mt-4"
                >
                  Create Account
                </button>
                <p className="text-red-600">Forget Password?</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogSection;
