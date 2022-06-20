import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { MdPerson, MdOutlineEmail, MdLock } from "react-icons/md";
import logo from "../../Assets/Imagotipo.png";
import { Link } from "react-router-dom";

export const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className=" flex flex-col items-center  pt-20">
        <div className="mb-14">
          <img src={logo} className="w-[300px] md:w-[375px]" alt="Logo GPI" />
        </div>
        <h4 className="mb-20 text-3xl md:text-4xl">Registrarse</h4>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w[300px] md:w-[375px]"
        >
          {/* NAME */}
          <div className="relative z-0 w-full mb-14 group">
            <input
              type="text"
              name="name"
              {...register("name", { required: "Debe especificar una nombre", maxLength: 40 })}
              className="input-text-template peer"
              placeholder=" "
            />
            <label className="input-text-label-template">
              <MdPerson className="inline-block mr-1" /> Nombre Completo
            </label>
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </div>
          {/* EMAIL */}
          <div className="relative z-0 w-full mb-14 group">
            <input
              type="email"
              name="email"
              {...register("email", { required: "Debe especificar un correo electrónico" })}
              className="input-text-template peer"
              placeholder=" "
            />
            <label className="input-text-label-template">
              <MdOutlineEmail className="inline-block mr-1" />
              Email
            </label>
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>
          {/* PASSWORD */}
          <div className="relative z-0 w-full mb-14 group">
            <input
              type="password"
              name="password"
              {...register("password", {
                required: "Debe especificar una contraseña",
                minLength: {
                  value: 8,
                  message: "Contraseña debe tener 8 caracteres minimos",
                },
              })}
              className="input-text-template peer"
              placeholder=" "
            />
            <label className="input-text-label-template">
              <MdLock className="inline-block mr-1" />
              Password
            </label>
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>
          {/* REPEAT PASSWORD */}
          <div className="relative z-0 w-full mb-14 group">
            <input
              type="password"
              name="password_repeat"
              {...register("password_repeat", {
                validate: (value) =>
                  value === password.current || "Las contraseñas no coinciden",
              })}
              className="input-text-template peer"
              placeholder=" "
            />
            <label className="input-text-label-template">
              <MdLock className="inline-block mr-1" />
              Repeat Password
            </label>
            {errors.password_repeat && <p className="text-red-500">{errors.password_repeat.message}</p>}
          </div>
          <div className="flex justify-between  items-center">
            <p className="">
              Ya tiene una cuenta?{" "}
              <Link to="/login" className="text-blue-600 underline">
                Entrar
              </Link>
            </p>

            <input type="submit" value="Registrarse" className="btn-green" />
          </div>
        </form>
      </div>
    </>
  );
};
