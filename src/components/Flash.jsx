import React, { useEffect, useState } from "react";

const Flash = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-07-28") - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
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
  });

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className="h-full w-full mt-11 ">
      <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start">
        <h4 className="w-5 md:ml-16 bg-red-500 rounded-lg"></h4>
        <h1 className="ml-2 md:ml-5 font-bold text-red-500">Today's</h1>
      </div>
      <div className="w-full md:w-1/2 flex flex-col md:flex-row items-center md:ml-20 mt-5 md:mt-0">
        <h1 className="font-bold text-3xl md:ml-0 md:mr-10">Flash Sales</h1>
        <div className="w-full md:w-1/2 flex justify-between max-sm:justify-center mt-4 md:ml-10">
          <div className="flex flex-col items-center">
            <p className="text-sm">Days</p>
            <h1 className="font-bold text-2xl">{days}</h1>
          </div>
          <h4 className="font-bold text-2xl text-orange-700 md:mt-0">:</h4>
          <div className="flex flex-col items-center">
            <p className="text-sm">Hours</p>
            <h1 className="font-bold text-2xl">{hours}</h1>
          </div>
          <h4 className="font-bold text-2xl text-orange-700 md:mt-0">:</h4>
          <div className="flex flex-col items-center">
            <p className="text-sm">Minutes</p>
            <h1 className="font-bold text-2xl">{minutes}</h1>
          </div>
          <h4 className="font-bold text-2xl text-orange-700  md:mt-0">:</h4>
          <div className="flex flex-col items-center">
            <p className="text-sm">Seconds</p>
            <h1 className="font-bold text-2xl">{seconds}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flash;
