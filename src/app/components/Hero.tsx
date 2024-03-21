import React from "react";
import { types } from "@/utils/constants";
const Hero = () => {
  return (
    <div className="flex items-start justify-center flex-col  lg:px-24 md:px-10 px-5 py-8">
      <h1 className="font-redhat font-bold text-4xl text-transparent  bg-clip-text bg-gradient-to-b from-white via-yellow-200 to-yellow-600 ">
        Product Management Interview Questions
      </h1>
      <p className="font-normal text-base text-white">
        Browse 1000+ questions from top tech companies
      </p>
      <div className="flex gap-4 flex-wrap">
        <button className="bg-white text-[##1B1919] font-poppins font-medium text-sm rounded border border-solid border-white  py-2 px-4">
          All
        </button>

        {types.map((type, index) => {
          return (
            <button
              className="text-white font-poppins font-medium text-sm rounded border border-solid border-white  py-2 px-4"
              key={index}
            >
              {type}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
