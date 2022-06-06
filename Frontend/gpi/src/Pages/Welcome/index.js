import React from "react";
import logo from "../../Assets/Imagotipo.png";
import wave from "../../Assets/w-background.png";
import { ButtonLink } from "../../Components/ButtonLink/ButtonLink";
import { Link } from "react-router-dom";
export const Welcome = () => {
  return (
    <div
      className="w-full flex flex-col md:flex-row h-full  items-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${wave})` }}
    >
      <div className="w-5/6 md:w-1/2 h-full flex flex-col justify-center items-center">
        <img src={logo} className="md:w-[375px]" alt="Logo GPI" />
        <p className="w-full md:w-[375px] lg:w-[500px] md:py-8 text-2xl text-justify ">
          Con esta aplicación usted podrá administrar un complejo inmobiliario,
          especificamente en el manejo de extras que un cliente puede solicitar
          para una vivienda
        </p>
      </div>
      <div className=" w-1/2 h-full flex flex-col justify-center items-center gap-12 md:gap-36">
        <Link
          className="w-52 md:w-64 text-white bg-orange-50 hover:bg-orange-100 focus:ring-4 focus:ring-blue-300 font-light text-3xl text-center py-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          to="login"
        >
          Iniciar Sesión
        </Link>
        <Link
          className="w-52 md:w-64 text-white bg-orange-50 hover:bg-orange-100 focus:ring-4 focus:ring-blue-300 font-light text-3xl text-center py-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          to="register"
        >
          Registrarse
        </Link>
      </div>
    </div>
  );
};
