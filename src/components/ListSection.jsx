import React from "react";

const ListSection = () => {
  return (
    <div class="container mx-auto px-24 max-sm:p-0 ">
      <div class="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div class="bg-white shadow-md rounded-lg p-4 flex flex-col items-center hover:bg-red-500 hover:text-white transition duration-300 ease-in-out">
          <div class="text-3xl mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>
          </div>
          <span class="font-semibold">Phones</span>
        </div>
        <div class="bg-white shadow-md rounded-lg p-4 flex flex-col items-center hover:bg-red-500 hover:text-white transition duration-300 ease-in-out">
          <div class="text-3xl mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
              />
            </svg>
          </div>
          <span class="font-semibold">Computers</span>
        </div>
        <div class="bg-white shadow-md rounded-lg p-4 flex flex-col items-center hover:bg-red-500 hover:text-white transition duration-300 ease-in-out">
          <div class="text-3xl mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
              />
            </svg>
          </div>
          <span class="font-semibold">SmartWatch</span>
        </div>
        <div class="bg-white shadow-md rounded-lg p-4 flex flex-col items-center hover:bg-red-500 hover:text-white transition duration-300 ease-in-out">
          <div class="text-3xl mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
              />
            </svg>
          </div>
          <span class="font-semibold">Camera</span>
        </div>
        <div class="bg-white shadow-md rounded-lg p-4 flex flex-col items-center hover:bg-red-500 hover:text-white transition duration-300 ease-in-out">
          <div class="text-3xl mb-2">🎧</div>
          <span class="font-semibold">HeadPhones</span>
        </div>
        <div class="bg-white shadow-md rounded-lg p-4 flex flex-col items-center hover:bg-red-500 hover:text-white transition duration-300 ease-in-out">
          <div class="text-3xl mb-2">🎮</div>
          <span class="font-semibold">Gaming</span>
        </div>
      </div>
    </div>
  );
};

export default ListSection;
