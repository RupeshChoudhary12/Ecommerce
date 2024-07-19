import React, { useEffect, useState } from "react";
import jbl from "../assets/jbl.png";

const MusicExperience = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-12-31") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return null;
    }

    return (
      <span key={interval} className="text-center">
        <div className="text-2xl font-bold">{timeLeft[interval]}</div>
        <div className="text-xs uppercase">{interval}</div>
      </span>
    );
  });

  return (
    <div className="container mx-auto px-15 mt-16 flex flex-row items-center justify-center">
      <div className="bg-black  text-white rounded-lg flex flex-col lg:flex-row items-center p-8">
        <div className="lg:w-1/2 text-left">
          <h2 className="text-green-500 text-lg font-semibold">Categories</h2>
          <h1 className="text-3xl font-bold mb-4">
            Enhance Your Music Experience
          </h1>
          <div className="flex space-x-4 mb-4">
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
          </div>
          <button className="bg-green-500 text-black px-4 py-2 rounded-lg">
            Buy Now!
          </button>
        </div>
        <div className="lg:w-1/2 flex justify-center mt-4 lg:mt-0">
          <img src={jbl} alt="Music Device" className="w-full lg:w-3/4" />
        </div>
      </div>
    </div>
  );
};

export default MusicExperience;
