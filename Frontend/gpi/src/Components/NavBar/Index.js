import React from "react";
import { Link, NavLink } from "react-router-dom";
import icono from "../../Assets/icono.png";

export const NavBar = () => {
  return (
    <nav className="px-8 w-6/6 h-[50px] bg-dark-blue overflow-hidden flex items-center justify-between">
      <div className="flex items-center text-2xl">
        <Link to={"/home"}>
          <div className="flex items-center text-2xl">
            <img className="w-[50px] " src={icono} alt="" />
            <h1 className="px-5 text-white-e5">
              Gestor De Proyectos Inmobiliarios
            </h1>
          </div>
        </Link>
      </div>
      <ul className="flex justify-between text-zinc-300 text-xl w-1/6">
      <NavLink to="home">
            {({ isActive }) => (
              <span
                className={
                  isActive ? "text-white " : undefined
                }
              >
                Home
              </span>
            )}
          </NavLink>
        <li>
          <NavLink to="home">Nombre Usuario</NavLink>
        </li>
        <li>
          <NavLink to="/">Salir</NavLink>
        </li>
      </ul>
    </nav>
  );
};
