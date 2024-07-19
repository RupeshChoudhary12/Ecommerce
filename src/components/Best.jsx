import React from "react";

const Best = () => {
  return (
    <div className="h-full w-full mt-11 p-5">
      <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start">
        <h4 className="w-5 md:ml-16 bg-red-500 rounded-lg"></h4>
        <h1 className="ml-2 md:ml-5 font-bold text-red-500">This Month's</h1>
      </div>
      <div className="w-full md:w-1/2 flex flex-col md:flex-row items-center md:ml-20 mt-5 md:mt-0">
        <h1 className="font-bold text-3xl md:ml-0 md:mr-10">
          Best Selling Price
        </h1>
      </div>
    </div>
  );
};

export default Best;
