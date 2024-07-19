import React from "react";
import shop from "../assets/shop.jpeg";

const AboutSection = () => {
  return (
    <div className="container">
      <div class="container mx-auto p-4 flex flex-col md:flex-row justify-between items-center">
        <div class="md:ml-20 text-center md:text-left my-8">
          <h1 class="text-4xl font-bold mb-4">Our Story</h1>
          <p class="text-sm mb-4">
            Launced in 2015, Exclusive is South Asia’s{" "}
            <br class="hidden md:inline" />
            premier online shopping marketplace <br class="hidden md:inline" />{" "}
            with an active presence in Bangladesh.{" "}
            <br class="hidden md:inline" />
            Supported by a wide range of tailored marketing,{" "}
            <br class="hidden md:inline" /> data and service solutions,
            Exclusive has 10,500 <br class="hidden md:inline" /> sellers and 300
            brands and serves 3 <br class="hidden md:inline" /> million
            customers across the region.
          </p>
          <p class="mt-10">
            Exclusive has more than 1 Million products{" "}
            <br class="hidden md:inline" /> to offer, growing at a very fast
            pace. <br class="hidden md:inline" /> Exclusive offers a diverse
            assortment in <br class="hidden md:inline" /> categories ranging
            from consumer goods.
          </p>
        </div>
        <div class="flex  justify-center my-8">
          <img
            src={shop}
            alt="Our Story Image"
            class="w-full max-w-lg object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
