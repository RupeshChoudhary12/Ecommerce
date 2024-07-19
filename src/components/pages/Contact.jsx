import React from "react";
import call from "../../assets/icons-mail.png";
import mail from "../../assets/icons-phone.png";

const Contact = () => {
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
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="container mx-auto mt-8 p-20">
        <div class="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          <div class="bg-white p-6 rounded-lg shadow-md w-full md:w-1/3">
            <div className="flex mr-5 gap-3">
              <img className="object-cover p-2" src={call} alt="" />
              <h2 class="text-2xl text-red-500 mt-3 ">Call To Us</h2>
            </div>
            <p>We are available 24/7, 7 days a week.</p>
            <p class="text-sm font-bold mt-2">Phone: 1800 123 123 222</p>
            <div className="flex gap-3">
              <img className="object-cover h-10 mt-5" src={mail} alt="" />
              <h2 class="text-2xl text-red-500 mt-6 mb-4">Write To Us</h2>
            </div>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p class="mt-2">
              Emails:{" "}
              <a href="mailto:customer@eac.com" class="text-blue-500">
                customer@eac.com
              </a>
            </p>
            <p class="mt-2">
              Email:{" "}
              <a href="mailto:support@eac.com" class="text-blue-500">
                support@eac.com
              </a>
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md w-full md:w-2/3">
            <form>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  class="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  class="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <input
                  type="tel"
                  placeholder="Your Phone"
                  class="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              <textarea
                placeholder="Your Message"
                class="mt-4 p-4 w-full h-32 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              ></textarea>
              <button
                type="submit"
                class="mt-4 w-full bg-red-500 text-white p-4 rounded-lg hover:bg-red-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
