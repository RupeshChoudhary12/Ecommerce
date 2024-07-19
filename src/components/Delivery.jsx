import React from "react";
import service from "../assets/Services.png";

const Delivery = () => {
  return (
    <section class="py-8 mt-5">
      <div class="container mx-auto p-24">
        <div class="flex flex-col md:flex-row justify-around items-center space-y-6 md:space-y-0 md:space-x-6">
          <div class="flex flex-col items-center text-center">
            <div class="bg-gray-200 p-4 rounded-full mb-2">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/delivery.png"
                alt="Delivery Icon"
                class="h-12 w-12"
              />
            </div>
            <h3 class="text-sm font-semibold">FREE AND FAST DELIVERY</h3>
            <p class="text-gray-600">Free delivery for all orders over $50</p>
          </div>
          <div class="flex flex-col items-center text-center">
            <div class="bg-gray-200 p-4 rounded-full mb-2">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/headset.png"
                alt="Customer Service Icon"
                class="h-12 w-12"
              />
            </div>
            <h3 class="text-sm font-semibold">24/7 CUSTOMER SERVICE</h3>
            <p class="text-gray-600">Friendly 24/7 customer support</p>
          </div>
          <div class="flex flex-col items-center text-center">
            <div class="bg-gray-200 p-4 rounded-full mb-2">
              <img
                src={service}
                alt="Money Back Guarantee Icon"
                class="h-12 w-12"
              />
            </div>
            <h3 class="text-sm font-semibold">MONEY BACK GUARANTEE</h3>
            <p class="text-gray-600">We return money within 30 days</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
