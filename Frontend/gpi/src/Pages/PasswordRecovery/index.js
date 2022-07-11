import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineEmail, MdLock } from "react-icons/md";
import logo from "../../Assets/Imagotipo.png";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../hooks";
import Swal from "sweetalert2";


export const PasswordRecovery = () => {
  const { sendRecoveryMail } = useAuthStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    let responseValue = sendRecoveryMail(data);
    console.log(responseValue);
    setTimeout(() => {
      if (responseValue) {
        Swal.fire(
          {
            icon: 'success',
            title: 'Bien!',
            text: 'Se envió el código a su correo electrónico, al clickear ok será redirigido a una página donde donde podrá restablecer su contraseña.',
          }
        ).then(function() {
          window.location = "/password-change";
      });
      } else {
        Swal.fire(
          {
            icon: 'error',
            title: 'Oops...',
            text: 'Sucedió un error intentelo de nuevo!',
          }
        );
      }
    }, 100);
  };
  return (
    <>
      <div className=" w-full flex flex-col items-center  pt-20">
        <div className="mb-14">
          <img src={logo} className="w-[300px] md:w-[375px]" alt="Logo GPI" />
        </div>
        <h4 className="mb-10 text-3xl md:text-4xl">Recuperación de contraseña</h4>
        <p className="mb-10 text-sm md:text-sm">Indica tu correo para enviarte un código para restablecer tu contraseña.</p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[300px] md:w-[375px] px-1"
        >
          <div className="relative z-0 w-full mb-20 group">
            <input
              type="email"
              name="email"
              className="input-text-template peer"
              placeholder=""
              {...register("email", {
                required: "Debe especificar un correo",
              })}
            />
            <label className="flex items-center peer-focus:font-medium absolute text-xl text-gray-500  duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
              <MdOutlineEmail className="inline-block mr-1" />
              Email
            </label>
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="flex justify-between  items-center">
            <input type="submit" value="Enviar código" className="btn-green" />
          </div>
        </form>
      </div>
    </>
  );
};
