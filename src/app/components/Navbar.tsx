import Link from "next/link";
import React from "react";

const NavItems: string[] = ["30 Days of PM", "Newsletter", "Builders Cohort"];

const Navbar = () => {
  return (
    <div className="w-full lg:px-24 md:px-10 px-5 py-8 flex justify-between sm:items-center flex-row items-center gap-4">
      <h1 className=" text-white md:text-3xl  text-[1.25rem] font-extrabold  ">
        Crework
        <span className=" text-[#FAAF3E] md:text-[2.5rem] text-[1.55rem]">
          .
        </span>
      </h1>

      <div className="flex sm:gap-12 gap-4 items-center justify-center">
        {NavItems.map((item, index) => (
          <Link
            key={index}
            className="text-[#BDBCBC] cursor-pointer"
            href={`#`}
            rel="noopener noreferrer"
          >
            <span className="sm:text-lg text-[1rem]  ">{item}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
