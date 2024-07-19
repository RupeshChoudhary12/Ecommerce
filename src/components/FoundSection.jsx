import React from "react";
import { Link } from "react-router-dom";

const FoundSection = () => {
  return (
    <div>
      <nav class="bg-white p-4 shadow">
        <div class="container mx-auto">
          <ul class="flex space-x-4">
            <li>
              <a href="#" class="text-purple-700">
                Home
              </a>
            </li>
            <li class="text-gray-500">/</li>
            <li>
              <a href="#" class="text-gray-700">
                404error
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="flex w-full  items-center justify-center flex-col">
        <h1 className="text-8xl font-semibold mt-20">404 Not Found </h1>
        <p className="mt-8">
          Your visited page not found. You may go home page.
        </p>
        <Link
          to="/"
          className="w-52 bg-red-500 h-14 text-center flex items-center mt-10 justify-center text-white rounded-md"
        >
          Back To Home Page
        </Link>
      </div>
    </div>
  );
};

export default FoundSection;
