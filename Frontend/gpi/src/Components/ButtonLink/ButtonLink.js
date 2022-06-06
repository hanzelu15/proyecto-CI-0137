import React from "react";
import { Link } from "react-router-dom";

export const ButtonLink = ({ text, to }) => {
  return (
    <div className="">
      <Link
        to={to}
        className="tracking-wide text-[22px] text-white w-fit bg-orange-50 hover:bg-orange-100 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        {text}
      </Link>
    </div>
  );
};
