//import React from 'react'
import React, { useState } from "react";
import { MdAddCircle } from "react-icons/md";
import Pagination from '../../../Components/Pagination/Index';
import InfoButtons from '../../../Components/InfoButtons/Index';


const items = [
  {
    name: "Proyecto 1",
    location: "l1",
  },
  {
    name: "Proyecto 2",
    location: "l2",
  },
  {
    name: "Proyecto 3",
    location: "l3",
  },
  {
    name: "Proyecto 4",
    location: "l4",
  },
  {
    name: "Proyecto 5",
    location: "l5",
  },
  {
    name: "Proyecto 6",
    location: "l6",
  },
  {
    name: "Proyecto 7",
    location: "l7",
  },
  {
    name: "Proyecto 8",
    location: "l8",
  },
  {
    name: "Proyecto 9",
    location: "l9",
  },
  {
    name: "Proyecto 10",
    location: "l10",
  },
  {
    name: "Proyecto 11",
    location: "l11",
  },
  {
    name: "Proyecto 12",
    location: "l12",
  },
];



export const ProyectsView = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <>
    <div className="flex flex-col justify-items-center items-center mt-10">
      <div className="h-full w-1/3 flex flex-col justify-items-center items-center  mt-10">

        <div className="w-full inline-flex items-center -space-x-px">
            <div className="mb-6 w-3/4 flex justify-start">
              <p className="text-xs md:text-2xl ">Proyectos</p>
            </div>
            <div className="mb-6 w-1/4 flex justify-end">
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
//<p>{currentPage}</p>