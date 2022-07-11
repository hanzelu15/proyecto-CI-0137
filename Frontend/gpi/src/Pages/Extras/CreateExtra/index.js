import React from "react";
import { useForm } from "react-hook-form";
import { createUnit } from "../../../Services/UnitService";
import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router-dom";
import { createExtra } from "../../../Services/ExtraService";

export const CreateExtra = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const unit = location.state;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const newUnit = {
      ...data,
      unit: unit._id,
    };
    const response = await createExtra(newUnit);
    if (response.ok) {
      Swal.fire("Exito!", "Se ha agregado la unidad!", "success");
      return navigate(-1);
    }
    return Swal.fire("Ups!", "No se pudo crear la unidad!", "error");
  };
  return (
    <>
      <div className="flex flex-col justify-items-center items-center responsive-width-component">
        <h4 className="mb-10 text-3xl md:text-4xl" style={{ padding: 35 }}>
          Agregar Extra para unidad {unit.number}
        </h4>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="relative z-0 w-full mb-10 group">
            <input
              type="name"
              name="name"
              className="input-text-template peer"
              placeholder=" "
              {...register("name", {
                maxLength: 40,
              })}
            />
            <label className="input-text-label-template">Nombre</label>
          </div>
          <div className="relative z-0 w-full mb-10 group">
            <p className="text-xl text-gray-500">Estado de Extra</p>
            <select
              className="bg-transparent border border-gray-300 text-gray-500  text-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      "
              {...register("status")}
            >
              {" "}
              <option defaultValue={true} value="Pendiente">
                Pendiente
              </option>
              <option value="En Progreso">En progreso</option>
              <option value="Terminado">Terminado</option>
            </select>
          </div>

          <div className="relative z-0 w-full mb-10 group">
            <p className="text-xl text-gray-500">Tipo de Extra</p>
            <select
              className="bg-transparent border border-gray-300 text-gray-500  text-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      "
              {...register("type", {
                required: "Debe especificar un rol",
              })}
            >
              {" "}
              <option defaultValue={true} value="Electromecanica">
                Electromecanica
              </option>
              <option value="Muebles">Muebles</option>
              <option value="Acabado">Acabado</option>
              <option value="Obra Gris">Obra Gris</option>
            </select>
          </div>
          <div className="relative z-0 w-full mb-10 group ">
            <textarea
              type="textarea"
              name="description"
              className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              rows={6}
              {...register("description")}
            />
            <label className="input-textarea-template ">Descripción</label>
          </div>

          <div className="flex justify-end  items-center mb-10">
            <input type="submit" value="Agregar Extra" className="btn-green rounded-lg" />
          </div>
        </form>
      </div>
    </>
  );
};
