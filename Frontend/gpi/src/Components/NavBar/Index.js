import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdHome, MdExitToApp, MdPerson } from "react-icons/md";
import icono from "../../Assets/icono.png";

export const NavBar = () => {
  return (
    <nav className="px-8 w-6/6 h-[50px] bg-dark-blue overflow-hidden flex items-center justify-between">
      <div className="hidden md:flex items-center">
        <Link to={"/home"}>
          <div className="flex items-center">
            <img className="w-[50px] " src={icono} alt="" />
            <h1 className="pl-5 text-white-e5">
              Gestor De Proyectos Inmobiliarios
            </h1>
          </div>
        </Link>
      </div>
      <ul className="flex w-full md:w-fit justify-between text-zinc-300">

        <li>
          <NavLink to="home" className="flex items-center">
            <MdHome className="text-3xl"/>
            <span className="hidden md:block">Home</span> 

          </NavLink>
        </li>
        <li>
          <NavLink to="home" className="flex items-center mx-9">
            <MdPerson className="text-3xl" />
            <span className="hidden md:block">Hansel Calderon</span> 
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="flex items-center">
            <MdExitToApp className="text-3xl" /> <span className="hidden md:block">Salir</span> 
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
