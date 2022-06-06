//import React from 'react'
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../auth/authContext";
import { MdPerson, MdOutlineEmail, MdLock } from "react-icons/md";
import logo from "../../Assets/Imagotipo.png";
import { Link } from "react-router-dom";

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
];



const paginate = (items, pageSize, pageNumber) => {
  const total = items.length;
  const pageItems= items.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
  return (
    <>
      {
        pageItems && pageItems.map((i) => {
          return (
          <button
            className="h-[48px] w-full mb-8 rounded-none border-2 bg-white text-gray"
            onClick={() => {
            }}
          >
            <div class="w-full flex justify-start">
              {i.name}
            </div>
            <div class="w-full flex justify-end">
              {i.location}
            </div>
          </button>
          );
        })
      }
      
      
      
    </>
  );
}

export const ProyectsView = () => {
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
        <h4 className="mb-14 text-3xl">Administrar Proyectos</h4>

        

        <form action="" className="w-[350px]">
          {paginate(items, 4, 1)}
          <nav aria-label="Page navigation example">
            <ul class="inline-flex -space-x-px">
              <li>
                <a href="#" class="py-2 px-3 ml-0 leading-tight text-black bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-white dark:border-black dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Anteriores</a>
              </li>
              <li>
                <a href="#" class="py-2 px-3 ml-0 leading-tight text-black bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-white dark:border-black dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Últimos</a>
              </li>
            </ul>
          </nav>
        </form>
      </div>
    </div>
    </>
  )
}
