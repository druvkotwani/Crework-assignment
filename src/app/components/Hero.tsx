import React, { useState } from "react";

import { types, data } from "@/utils/constants";
const Hero = () => {
  const [buttonSelected, setButtonSelected] = useState("All");

  function handleButtonSelect(type: string) {
    setButtonSelected(type);
  }

  const filteredData = data.filter((question) => {
    if (buttonSelected === "All") {
      return question;
    } else {
      return question.type.includes(buttonSelected);
    }
  });

  return (
    <div className="flex items-center justify-center flex-col  lg:px-24 md:px-10 px-5 py-5 ">
      <div className="flex items-start justify-center flex-col gap-4">
        {/* Heading */}
        <div className="flex flex-col gap-3">
          <h1 className="font-redhat font-bold text-4xl text-transparent  bg-clip-text bg-gradient-to-b from-white via-yellow-200 to-yellow-600 ">
            Product Management Interview Questions
          </h1>
          <p className="font-normal text-base text-white">
            Browse 1000+ questions from top tech companies
          </p>
        </div>

        {/* buttons */}
        <div className="flex gap-4 flex-wrap">
          <button
            onClick={() => handleButtonSelect("All")}
            className={
              "font-poppins font-medium text-sm rounded border border-solid border-white  py-2 px-4" +
              (buttonSelected === "All"
                ? " bg-white text-[#1B1919]"
                : " bg-transparent text-white hover:bg-white transition-all duration-300 ease-in-out hover:text-[#1B1919] ")
            }
          >
            All
          </button>
          {types.map((type, index) => {
            return (
              <button
                onClick={() => handleButtonSelect(type)}
                className={
                  " hover:bg-white transition-all duration-300 ease-in-out hover:text-[#1B1919]  font-poppins font-medium text-sm rounded border border-solid border-white  py-2 px-4 " +
                  (buttonSelected === type
                    ? " bg-white text-[#1B1919]"
                    : "text-white bg-transparent")
                }
                key={index}
              >
                {type}
              </button>
            );
          })}
          div d
        </div>

        {/* Questions */}
        <div className="flex flex-col gap-4 font-poppins">
          {filteredData.length === 0 ? (
            <p className="font-medium text-lg text-white">❌ No result found</p>
          ) : (
            filteredData.map((question, index) => (
              <div key={index} className="flex flex-col gap-2">
                <p className="font-medium text-lg text-white">
                  {question.text}
                </p>
                <div className="font-inter font-normal text-sm text-[#BDBCBC] flex gap-4">
                  {question.type.map((type, index) => (
                    <p key={index} className="text-[#BDBCBC]">
                      {type}
                    </p>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Pagination */}
        <div></div>
      </div>
    </div>
  );
};

export default Hero;
