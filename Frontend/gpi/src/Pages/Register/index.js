import React from "react";
import { useForm } from "react-hook-form";
import { MdPerson, MdOutlineEmail, MdLock } from "react-icons/md";
import logo from "../../Assets/Imagotipo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="h-full flex flex-col items-center  pt-20">
        <div className="mb-14">
          <img src={logo} className="w-[300px] md:w-[375px]" alt="Logo GPI" />
        </div>
        <h4 className="mb-20 text-3xl md:text-4xl">Registrarse</h4>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w[300px] md:w-[375px]"
        >
          <div className="relative z-0 w-full mb-14 group">
            <input
              type="text"
              name="name"
              {...register("name", { required: true, maxLength: 40 })}
              className="input-text-template peer"
              placeholder=" "
              required
            />
            <label className="input-text-label-template">
              <MdPerson className="inline-block mr-1" /> Nombre Completo
            </label>
          </div>

          <div className="relative z-0 w-full mb-14 group">
            <input
              type="email"
              name="email"
              {...register("email", { required: true })}
              className="input-text-template peer"
              placeholder=" "
              required
            />
            <label className="input-text-label-template">
              <MdOutlineEmail className="inline-block mr-1" />
              Email
            </label>
          </div>
          <div className="relative z-0 w-full mb-14 group">
            <input
              type="password"
              name="password"
              {...register("password", {
                required: true,
                minLength: {
                  value: 8,
                  message: "Contraseña debe tener 8 caracteres minimos",
                },
              })}
              className="input-text-template peer"
              placeholder=" "
              required
            />
            <label className="input-text-label-template">
              <MdLock className="inline-block mr-1" />
              Password
            </label>
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <div className="relative z-0 w-full mb-14 group">
            <input
              type="password"
              name="repeat_password"
              {...register("repeatPassword", { required: true })}
              className="input-text-template peer"
              placeholder=" "
              required
            />
            <label className="input-text-label-template">
              <MdLock className="inline-block mr-1" />
              Repeat Password
            </label>
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
