import React from "react";

const RatingSection = () => {
  return (
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center my-8 p-24">
      <div class="flex border-2 hover:bg-red-400 hover:text-white  h-56 flex-col items-center text-center shadow-md">
        <div class="bg-gray-200 p-4 rounded-full mb-2 mt-10">
          <img
            src="https://img.icons8.com/ios-filled/50/000000/delivery.png"
            alt="Delivery Icon"
            class="h-12 w-12 "
          />
        </div>
        <div class="  p-4 rounded-lg">
          <h2 class="text-2xl font-bold">10.5k</h2>
          <p>Solar active our site</p>
        </div>
      </div>

      <div class="flex hover:bg-red-400 hover:text-white h-56 flex-col items-center text-center shadow-md">
        <div class="bg-gray-200 p-4 rounded-full mb-2 mt-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
            />
          </svg>
        </div>
        <div class="  p-4 rounded-lg">
          <h2 class="text-2xl font-bold">33k</h2>
          <p>Majoring in specialized fields</p>
        </div>
      </div>

      <div class="flex hover:bg-red-400 hover:text-white  h-56 flex-col items-center text-center shadow-md">
        <div class="bg-gray-200 p-4 rounded-full mb-2 mt-10 hover:bg-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
        <div class="  p-4 rounded-lg">
          <h2 class="text-2xl font-bold">45.5k</h2>
          <p>Customer active in our site</p>
        </div>
      </div>

      <div class="flex h-56 flex-col items-center text-center shadow-md hover:bg-red-400 hover:text-white">
        <div class="bg-gray-200 p-4 rounded-full mb-2 mt-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </div>
        <div class="  p-4 rounded-lg">
          <h2 class="text-2xl font-bold">25k</h2>
          <p>Anual grass sale in your site</p>
        </div>
      </div>
    </div>
  );
};

export default RatingSection;
