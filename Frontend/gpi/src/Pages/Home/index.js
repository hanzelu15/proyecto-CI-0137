//import React from 'react'
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../auth/authContext";
import { MdPerson, MdOutlineEmail, MdLock } from "react-icons/md";
import logo from "../../Assets/Imagotipo.jpg";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div className="h-full flex flex-col justify-items-center items-center  mt-20">
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
