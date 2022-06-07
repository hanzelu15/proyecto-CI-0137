//import React from 'react'
import React, { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../auth/authContext";
import { MdAddCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import Pagination from '../../Components/Pagination/Index';
import InfoButtons from '../../Components/InfoButtons/Index';


const items = [
  {
    name: "Fase 1",
    location: "l1",
  },
  {
    name: "Fase 2",
    location: "l2",
  },
  {
    name: "Fase 3",
    location: "l3",
  },
  {
    name: "Fase 4",
    location: "l4",
  },
  {
    name: "PFase 5",
    location: "l5",
  },
  {
    name: "Fase 6",
    location: "l6",
  },
];



export const FasesView = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <>
    <div className="h-full flex flex-col justify-items-center items-center">
      <div className="h-full w-1/3 flex flex-col justify-items-center items-center  mt-10">
        <nav class="w-full flex justify-start" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
              <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                Home
              </a>
            </li>
          </ol>
        </nav>
        <div class="w-full inline-flex items-center -space-x-px">
            <div class="mb-6 w-3/4 flex justify-start">
              <p class="text-xs md:text-2xl font-size: 20px" >Fases</p>
            </div>
            <div class="mb-6 w-1/4 flex justify-end">
              <MdAddCircle className="inline-block mr-1 " size={40} color="orange"/>
            </div>
        </div>
        <InfoButtons
          items={items}
          pageSize={8}
          pageNumber={currentPage}
        />
        <Pagination
          postsPerPage={8}
          totalPosts={items.length}
          paginate={paginate}
          currentPage={currentPage}
        />

        
      </div>
    </div>
    </>
  )
}