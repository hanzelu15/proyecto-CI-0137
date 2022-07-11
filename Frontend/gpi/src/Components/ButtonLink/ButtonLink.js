import React from "react";
import { Link } from "react-router-dom";

export const ButtonLink = ({ text, to }) => {
  return (
    <div className="">
      <Link
        to={to}
        className="tracking-wide text-[22px] text-white w-fit bg-orange-50 hover:bg-orange-100 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5  focus:outline-none "
      >
        {text}
      </Link>
    </div>
  );
};
