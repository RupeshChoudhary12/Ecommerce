import React from "react";
import qr from "../assets/qr.jpeg";
import store from "../assets/store.png";
import app from "../assets/app.png";

const Footer = () => {
  return (
    <footer class="bg-black text-white py-8">
      <div class="container mx-auto px-10">
        <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <h3 class="text-xl font-semibold mb-4">Exclusive</h3>
            <p class="mb-2">Subscribe</p>
            <p class="mb-4">Get 10% off your first order</p>
            <form class="flex">
              <input
                type="email"
                placeholder="Enter your email"
                class="p-2 w-40 rounded-l bg-gray-800 border border-gray-700 focus:outline-none"
              />
              <button
                type="submit"
                class="p-2 bg-gray-700 rounded-r border-l border-gray-700"
              >
                <svg
                  class="h-5 w-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M14.243 5.757a1 1 0 00-1.415 0L10 8.585 7.172 5.757a1 1 0 00-1.414 1.414L8.585 10l-2.828 2.829a1 1 0 101.414 1.414L10 11.415l2.829 2.828a1 1 0 001.414-1.414L11.415 10l2.828-2.829a1 1 0 000-1.414z" />
                </svg>
              </button>
            </form>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4">Support</h3>
            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4">Account</h3>
            <ul>
              <li>
                <a href="#" class="hover:underline">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Login / Register
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Cart
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Wishlist
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Shop
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4">Quick Link</h3>
            <ul>
              <li>
                <a href="#" class="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Terms Of Use
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4">Download App</h3>
            <p>Save $3 with App New User Only</p>
            <div class="flex space-x-2 my-2">
              <div>
                {" "}
                <img className="w-24 h-24" src={qr} alt="" />
              </div>

              <div className="flex    w-20">
                {" "}
                <img className="h-20" src={store} alt="Google Play Store" />
                <img className="h-20" src={app} alt="App Store" />
              </div>
            </div>
            <div class="flex space-x-4 mt-4">
              <a href="#" class="hover:text-gray-400">
                <img
                  src="https://img.icons8.com/ios-filled/24/ffffff/facebook-new.png"
                  alt="Facebook"
                />
              </a>
              <a href="#" class="hover:text-gray-400">
                <img
                  src="https://img.icons8.com/ios-filled/24/ffffff/twitter.png"
                  alt="Twitter"
                />
              </a>
              <a href="#" class="hover:text-gray-400">
                <img
                  src="https://img.icons8.com/ios-filled/24/ffffff/instagram-new.png"
                  alt="Instagram"
                />
              </a>
              <a href="#" class="hover:text-gray-400">
                <img
                  src="https://img.icons8.com/ios-filled/24/ffffff/linkedin.png"
                  alt="LinkedIn"
                />
              </a>
            </div>
          </div>
        </div>
        <div class="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>© Copyright Rimel 2022. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
