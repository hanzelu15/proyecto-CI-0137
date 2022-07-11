import React, { useState, useRef  } from "react";
import { useForm } from "react-hook-form";
import { MdPerson, MdOutlineEmail, MdLock, MdPhone } from "react-icons/md";
import { useAuthStore } from "../../hooks";
import Swal from "sweetalert2";
import logo from "../../Assets/Imagotipo.png";

export const PasswordChange = () => {
  const { checkCode, passwordUpdate, userCode } = useAuthStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    register: register2,
    formState: { errors: errors2 },
    handleSubmit: handleSubmit2,
    watch,
  } = useForm();
  let update;
  const [userID, setUserID] = useState();
  const onSubmit = (data) => {
    checkCode(data).then((data2) => {
      setTimeout(() => {
        if (data2 !== undefined) {
          setIsDisabled(!isDisabled)
          const update = data2.cd.userID;
          setUserID(update);
          Swal.fire(
            {
              icon: 'success',
              title: 'Bien!',
              text: 'Código correcto, proceda a cambiar la contraseña en el espacio asignado',
            }
          );
        } else {
          Swal.fire(
            {
              icon: 'error',
              title: 'Oops...',
              text: 'Parece ser que el código no es valido, intente enviar uno nuevo!',
            }
          );
        }
      }, 100);
    });;
  };
  const onSubmit2 = (data) => {
    if(data.password_repeat !== undefined){
      delete data.password_repeat;
    }
    passwordUpdate(userID, data).then((data2) => {
      setTimeout(() => {
        if (data2.ok) {
          setIsDisabled(!isDisabled)
          Swal.fire(
            {
              icon: 'success',
              title: 'Bien!',
              text: 'Contraseña cambiada correctamente, será redirigido a login para que pueda ingresar con su contraseña nueva',
            }
          ).then(function() {
            window.location = "/login";
        });
        } else {
          Swal.fire(
            {
              icon: 'error',
              title: 'Oops...',
              text: 'Actualización de contraseña fallida!',
            }
          );
        }
      }, 100);
    });;
  };
  const password = useRef({});
  password.current = watch("password", "");
  const [isDisabled, setIsDisabled] = useState(true);
  return (
    <>
      <div className=" w-[375px] h-full flex flex-col items-center m-auto">
        <div className="mb-14">
          <img src={logo} className="w-[300px] md:w-[375px]" alt="Logo GPI" />
        </div>
        <h3 className={`${!isDisabled ? "hidden" : ""} text-4xl py-5`}>Digite su código</h3>
        <form className={`${!isDisabled ? "hidden" : ""} first-line:w-[375px] flex flex-col`} onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center">
            <input
              type="text"
              name="floating_name"
              className="block w-full pl-2 text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none disabled:bg-gray-200    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              defaultValue=""
              required
              {...register("code", {
                required: "Debe especificar una código",
              })}
            />
          </div>
          <button
            type="submit"
            className="self-end mt-4 text-white bg-orange-50 hover:bg-orange-100 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5   focus:outline-none "
          >
            Verificar
          </button>
        </form>

        <div className={`${isDisabled ? "hidden" : ""} flex flex-col items-center pt-20`}>
          <h4 className="mb-5 text-3xl md:text-4xl">Cambiar contraseña</h4>
          <form
            onSubmit={handleSubmit2(onSubmit2)}
            className="w[300px] md:w-[375px]"
          >
            {/* PASSWORD */}
            <div className="relative z-0 w-full mb-14 group">
              <input
                type="password"
                name="password"
                {...register2("password", {
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
              {errors2.password && (
                <p className="text-red-500">{errors2.password.message}</p>
              )}
            </div>
            {/* REPEAT PASSWORD */}
            <div className="relative z-0 w-full mb-14 group">
              <input
                type="password"
                name="password_repeat"
                {...register2("password_repeat", {
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
              {errors2.password_repeat && (
                <p className="text-red-500">{errors2.password_repeat.message}</p>
              )}
            </div>
            <div className="flex justify-end  items-center">
              <input type="submit" value="Cambiar" className="btn-green" />
            </div>
          </form>
        </div>
      </div>


      
    </>
  );
};

