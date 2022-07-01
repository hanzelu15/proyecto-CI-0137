import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineEmail, MdLock } from "react-icons/md";
import logo from "../../Assets/Imagotipo.png";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../hooks";
import Swal from "sweetalert2";

export const Login = () => {
  const { startLogin, errorMessage } = useAuthStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire("Error en la autenticación", errorMessage, "error");
    }
  }, [errorMessage]);

  const onSubmit = (data) => {
    console.log(data);
    startLogin(data);
  };
  return (
    <>
      <div className=" w-full flex flex-col items-center  pt-20">
        <div className="mb-14">
          <img src={logo} className="w-[300px] md:w-[375px]" alt="Logo GPI" />
        </div>
        <h4 className="mb-20 text-3xl md:text-4xl">Iniciar Sesion</h4>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[300px] md:w-[375px] px-1"
        >
          <div className="relative z-0 w-full mb-20 group">
            <input
              type="email"
              name="email"
              className="input-text-template peer"
              placeholder=" "
              {...register("email", {
                required: "Debe especificar una correo",
              })}
            />
            <label className="flex items-center peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
              <MdOutlineEmail className="inline-block mr-1" />
              Email
            </label>
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="relative z-0 w-full mb-20 group">
            <input
              type="password"
              name="password"
              className="input-text-template peer"
              placeholder=" "
              {...register("password", {
                required: "Debe especificar una contraseña",
              })}
            />
            <label className="flex items-center peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
              <MdLock className="inline-block mr-1" />
              Password
            </label>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          <div className="flex justify-between  items-center">
            <p className="">
              No tiene una cuenta?{" "}
              <Link to="/register" className="text-blue-600 underline">
                Registrarse
              </Link>
            </p>
            <input type="submit" value="Iniciar sesión" className="btn-green" />
          </div>
        </form>
      </div>
    </>
  );
};
