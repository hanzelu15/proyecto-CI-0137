import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../auth/authContext";
import { MdPerson, MdOutlineEmail, MdLock } from "react-icons/md";
import logo from "../../Assets/Imagotipo.png";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const { user } = useContext(AuthContext);
  let navigate = useNavigate();
  const handleLogin = () => {
    // validar
    navigate("/home");
  };
  const { register, handleSubmit, errors } = useForm();
  return (
    <>
      <div className="h-full flex flex-col items-center  pt-20">
        <div className="mb-10">
          <img src={logo} className="w-[350px]" alt="Logo GPI" />
        </div>
        <h4 className="mb-14 text-5xl">Iniciar Sesion</h4>
        <form action="" className="w-[375px]">
          <div className="relative z-0 w-full mb-8 group">
            <input
              type="email"
              name="floating_email"
              className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              className="flex items-center peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              <MdOutlineEmail className="inline-block mr-1" />
              Email
            </label>
          </div>
          <div className="relative z-0 w-full mb-8 group">
            <input
              type="password"
              name="floating_password"
              className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_password"
              className="flex items-center peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              <MdLock className="inline-block mr-1" />
              Password
            </label>
          </div>

          <div className="flex justify-between  items-center">
            <p className="">
              No tiene una cuenta?{" "}
              <Link to="/register" className="text-blue-600 underline">
                Registrarse
              </Link>
            </p>
            <button
              onClick={handleLogin}
              type="button"
              className="text-white bg-orange-50 hover:bg-orange-100 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
