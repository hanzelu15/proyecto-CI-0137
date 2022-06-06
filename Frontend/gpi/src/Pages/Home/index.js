//import React from 'react'
import React, { useContext } from "react";
import logo from "../../Assets/Imagotipo.png";

export const Home = () => {
  return (
    <>
      <div className=" flex flex-col justify-items-center items-center  pt-20">
        <div className="mb-10">
          <img src={logo} className="w-[350px]" alt="Logo GPI" />
        </div>
        <h4 className="mb-14 text-3xl">Bienvenido (Nombre Usuario)</h4>
        
        <form action="" className="w-[350px]">
          <button
            className="h-[48px] w-full mb-8 rounded-none bg-dark-blue text-white"
            onClick={() => {
            }}
          >
            Administrar Proyectos
          </button>
          <button
            className="h-[48px] w-full mb-8 rounded-none bg-dark-blue text-white"
            onClick={() => {
            }}
          >
            Administrar Usuarios
          </button>
          <button
            className="h-[48px] w-full mb-8 rounded-none bg-dark-blue text-white"
            onClick={() => {
            }}
          >
            Perfil
          </button>
          <button
            className="h-[48px] w-full mb-8 rounded-none bg-dark-blue text-white"
            onClick={() => {
            }}
          >
            Salir
          </button>
        </form>
      </div>
    </>
  )
}
