import React from "react";
import play from "../assets/play.png";
import woman from "../assets/woman.jpeg";
import amzone from "../assets/amzone.png";
import guchhi from "../assets/gucchi.png";
import Gucchi from "./Gucchi";

const GridSection = () => {
  return (
    <>
      <Gucchi />

      <div class="container mx-auto px-14 ">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="relative bg-black h-96">
            <img
              src={play}
              alt="PlayStation 5"
              class="w-full h-full object-cover"
            />
            <div class="absolute bottom-4 left-4">
              <h2 class="text-2xl text-white">PlayStation 5</h2>
              <p class="mt-1 text-white">
                Black and White version of the PS5 coming out on sale.
              </p>
              <a
                href="#"
                class="inline-block mt-2 px-4 py-2 bg-white text-black font-semibold rounded"
              >
                Shop Now
              </a>
            </div>
          </div>
          <div class="grid  grid-cols-1 md:grid-cols-2 gap-4">
            <div class="relative h-40 bg-black col-span-2">
              <img
                src={woman}
                alt="Women's Collections"
                class="w-60 h-full object-cover"
              />
              <div class="absolute bottom-4 left-4">
                <h2 class="text-2xl text-white">Women's Collections</h2>
                <p class="mt-1 text-white">
                  Featured woman collections that give you another vibe.
                </p>
                <a
                  href="#"
                  class="inline-block mt-2 px-4 py-2 bg-white text-black font-semibold rounded"
                >
                  Shop Now
                </a>
              </div>
            </div>
            <div class="relative h-52 bg-black">
              <img
                src={amzone}
                alt="Speakers"
                class="w-full h-full object-cover"
              />
              <div class="absolute bottom-4 left-4">
                <h2 class="text-xl font-bold text-white">Speakers</h2>
                <p class="mt-1 text-white">Amazon wireless speakers</p>
                <a
                  href="#"
                  class="inline-block mt-2 px-4 py-2 bg-white text-black font-semibold rounded"
                >
                  Shop Now
                </a>
              </div>
            </div>
            <div class="relative h-52 bg-black">
              <img
                src={guchhi}
                alt="Perfume"
                class="w-full h-full object-cover"
              />
              <div class="absolute bottom-4 left-4">
                <h2 class="text-xl font-bold text-white">Perfume</h2>
                <p class="mt-1 text-white">GUCCI INTENSE OUD EDP</p>
                <a
                  href="#"
                  class="inline-block mt-2 px-4 py-2 bg-white text-black font-semibold rounded"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GridSection;
