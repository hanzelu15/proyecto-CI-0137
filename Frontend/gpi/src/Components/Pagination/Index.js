import React, { useState } from "react";

const Pagination = ({ postsPerPage, totalPosts, setData, query }) => {
  const pageNumbers = [];
  const [current, setCurrent] = useState(0);

  for (let i = 0; i <= Math.ceil(totalPosts / postsPerPage) - 1; i++) {
    pageNumbers.push(i);
  }
  const handleClick = (value) => {
    setCurrent(value);
    query(value, postsPerPage).then((resp) => {
      setData(resp);
    });
  };

  return (
    <>
      {totalPosts > postsPerPage && (
        <nav className="py-5">
          <ul className="inline-flex items-center -space-x-px">
            <li>
              <button
                disabled={current === 0}
                onClick={() => handleClick(current - 1)}
                className="disabled:bg-slate-100 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none block py-2 px-3 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700     "
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </li>
            {pageNumbers.map((number) => (
              <li key={number} className="page-item">
                <button
                  disabled={current === number}
                  onClick={() => handleClick(number)}
                  className="disabled:bg-slate-100 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700     "
                >
                  {number}
                </button>
              </li>
            ))}
            <li>
              <button
                disabled={current === pageNumbers.length - 1}
                className={`disabled:bg-slate-100 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700     `}
                onClick={() => handleClick(current + 1)}
              >
                <span className="sr-only">Next</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Pagination;
