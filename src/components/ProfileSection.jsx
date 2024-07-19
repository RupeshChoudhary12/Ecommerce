import React from "react";

const ProfileSection = () => {
  return (
    <div>
      <nav class="bg-white p-4 shadow">
        <div class="container mx-auto flex justify-between">
          <ul class="flex space-x-4">
            <li>
              <a href="#" class="text-purple-700">
                Home
              </a>
            </li>
            <li class="text-gray-500">/</li>
            <li>
              <a href="#" class="text-gray-700">
                Contact
              </a>
            </li>
          </ul>
          <li className="list-none">
            <a href="#" class="text-gray-700">
              welcome <span className="text-red-300">MR Rupesh</span>
            </a>
          </li>
        </div>
      </nav>
      <div className="flex w-full justify-around items-center flex-wrap ">
        <div className="flex justify-center flex-col">
          <div className="flex  flex-col">
            <h1 className="text-xl font-semibold">Manage My Account</h1>
            <span className="ml-8">
              <p className="text-red-500 mt-3">My Profile</p>
              <p>Address Book </p>
            </span>
          </div>
          <div className="mt-3 flex flex-col">
            <h1 className="text-xl font-semibold">My Orders</h1>
            <span className="ml-8">
              <p>My Returns</p>
              <p>My Cancletion</p>
            </span>
          </div>
          <h1 className="text-xl font-semibold mt-4">My Wishlist</h1>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mt-20">
          <h2 class="text-2xl font-bold mb-4 text-red-500">
            Edit Your Profile
          </h2>
          <form>
            <div className="flex justify-between">
              <div class="mb-4">
                <label for="first_name" class="block text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="mt-1 block w-full h-10 border-gray-300 bg-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div class="mb-4">
                <label for="last_name" class="block text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  id="last_name"
                  class="mt-1 block w-full h-10 bg-gray-100 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            <div className="w-full flex justify-between">
              <div class="mb-4">
                <label for="email" class="block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  class="mt-1 block w-full h-10 bg-gray-100 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div class="mb-4">
                <label for="address" class="block text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  class="mt-1 block w-full h-10 bg-gray-100 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
            <div class="mb-4">
              <label for="current_password" class="block text-gray-700">
                Current Password
              </label>
              <input
                type="password"
                id="current_password"
                class="mt-1 block w-full h-10 bg-gray-100 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div class="mb-4">
              <label for="new_password" class="block text-gray-700">
                New Password
              </label>
              <input
                type="password"
                id="new_password"
                class="mt-1 block w-full h-10 bg-gray-100 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div class="mb-4">
              <label for="confirm_password" class="block text-gray-700">
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirm_password"
                class="mt-1 block h-10 bg-gray-100 w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div class="flex justify-between items-center">
              <button
                type="button"
                class="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
