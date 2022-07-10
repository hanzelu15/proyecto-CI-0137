import React from "react";
import logo from "../../Assets/Imagotipo.png";
import { useAuthStore } from "../../hooks";

export const Home = () => {

  const { startLogout, user } = useAuthStore();

  return (
    <>
      <div className=" flex flex-col justify-items-center items-center  pt-20">
        <div className="mb-10">
          <img src={logo} className="w-[350px]" alt="Logo GPI" />
        </div>
        <h4 className="mb-14 text-3xl">Bienvenido {user.name}</h4>

        <form action="" className="w-[350px]">
          <button
            className="h-[48px] w-full mb-8 rounded-lg bg-dark-blue text-white"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/proyects";
            }}
          >
            Proyectos
          </button>
          <button
            className={`${user.role!=="ADMIN" ? "hidden" : ""} h-[48px] w-full mb-8 rounded-none rounded-lg bg-dark-blue text-white`}
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/userAdministration";
            }}
          >
            Administrar Usuarios
          </button>
          <button
            className="h-[48px] w-full mb-8 rounded-none bg-dark-blue rounded-lg text-white"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/Perfil";
            }}
          >
            Perfil
          </button>
          <button
            className="h-[48px] w-full mb-8 rounded-none bg-dark-blue rounded-lg text-white"
            onClick={ startLogout}
          >
            Salir
          </button>
        </form>
      </div>
    </>
  );
};
