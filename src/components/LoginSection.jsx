import React from "react";
import login from "../assets/login.jpeg";
import google from "../assets/google.png";
import { Link } from "react-router-dom";

const LoginSection = () => {
  return (
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
          <h2 class="text-2xl font-bold mb-4">Create an account</h2>
          <p class="mb-4">Enter your details below</p>
          <form>
            <div class="mb-4">
              <label for="name" class="block text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                class="w-full p-2 border-b border-black rounded mt-1"
              />
            </div>
            <div class="mb-4">
              <label for="email" class="block text-gray-700">
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
            <button
              type="submit"
              class="w-full bg-red-500 text-white py-2 rounded mt-4"
            >
              Create Account
            </button>
            <div class="flex items-center justify-center mt-4">
              <button
                type="button"
                class="flex items-center border-b border-black py-2 px-4 rounded text-gray-700 w-full justify-center"
              >
                <img src={google} alt="Google Icon" class="w-5 h-5 mr-2" /> Sign
                up with Google
              </button>
            </div>
            <p class="mt-4 text-center">
              Already have an account?{" "}
              <Link to="/log" class="text-blue-500">
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginSection;
