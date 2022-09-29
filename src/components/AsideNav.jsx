import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { navDataLinks } from "./../assets/data";

const AsideNav = ({ setMenuToogle }) => {
  return (
    <div className="absolute top-14 left-0  h-[calc(100vh-3.5rem)]  w-80 bg-green-600 shadow-green-600 shadow-sm z-20">
      <span
        className="text-white absolute right-0 p-2 text-2xl cursor-pointer"
        onClick={() => setMenuToogle(false)}
      >
        <AiOutlineClose />{" "}
      </span>
      <div className=" text-white text-xl  flex flex-col   mt-12 space-y-5">
        {navDataLinks.map((item, i) => {
          return (
            <Link
              onClick={() => setMenuToogle(false)}
              key={i}
              to={item.link}
              className="bg-green-500 w-10/12 text-center p-1 m-auto hover:bg-green-700  rounded"
            >
              {" "}
              <button>{item.name}</button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AsideNav;
