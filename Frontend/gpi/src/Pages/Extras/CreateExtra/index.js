import React from "react";
import { useForm } from "react-hook-form";
import { createUnit } from "../../../Services/UnitService";
import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router-dom";

export const CreateExtra = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const phase = location.state;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const newUnit = {
      ...data,
      phase: phase._id,
    };
    const response = await createUnit(newUnit);
    if (response.ok) {
      Swal.fire("Exito!", "Se ha agregado la unidad!", "success");
      return navigate(-1);
    }
    return Swal.fire("Ups!", "No se pudo crear la unidad!", "error");
  };
  return (
    <>
      <div className="flex flex-col justify-items-center items-center responsive-width-component">
        <h4 className="mb-14 text-3xl md:text-4xl" style={{ padding: 35 }}>
          Agregar Unidad para {phase.name}
        </h4>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="relative z-0 w-full mb-14 group">
            <input
              type="name"
              name="name"
              className="input-text-template peer"
              placeholder=" "
              {...register("name", {
                maxLength: 40,
              })}
            />
            <label className="input-text-label-template">
              Nombre del cliente (opcional)
            </label>
          </div>
          <div className="relative z-0 w-full mb-14 group">
            <input
              type="name"
              name="number"
              className="input-text-template peer"
              placeholder=" "
              {...register("number", {
                required: "Debe especificar una número de unidad",
                maxLength: 40,
              })}
              required
            />
            <label className="input-text-label-template">
              Número de unidad
            </label>
          </div>
          <div className="relative z-0 w-full mb-14 group">
            <p className="text-xl text-gray-500">Casa terminada</p>
            <select
              className="bg-transparent border border-gray-300 text-gray-500  text-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("role", {})}
            >
              <option defaultValue={false} value={false}>
                {" "}
               No
              </option>
              <option value={true}>Sí</option>
            </select>
          </div>
          <div className="relative z-0 w-full mb-14 group">
            <p className="text-xl text-gray-500">Casa entregada</p>
            <select
              className="bg-transparent border border-gray-300 text-gray-500  text-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("role", {})}
            >
              <option defaultValue={false} value={false}>
                {" "}
               No
              </option>
              <option value={true}>Sí</option>
            </select>
          </div>
          <div className="flex justify-end  items-center mb-14">
            <input type="submit" value="Agregar Unidad" className="btn-green" />
          </div>
        </form>
      </div>
    </>
  );
};
