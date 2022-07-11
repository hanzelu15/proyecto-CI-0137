import React from "react";
import { useForm } from "react-hook-form";
import { createPhase } from "../../../Services/PhaseService";
import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router-dom";

export const CreatePhase = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const project = location.state;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();



  const onSubmit = async (data) => {
    const newPhase = {
      ...data,
      project: project._id,
    };
    const response = await createPhase(newPhase);
    if (response.ok) {
      Swal.fire("Exito!", "Se ha agregado la fase!", "success");
       return navigate(-1);
    }
    
    return Swal.fire("Ups!", "No se pudo crear la fase!", "error");
  };
  return (
    <>
      <div className="flex flex-col justify-items-center items-center responsive-width-component">
        <h4 className="mb-14 text-3xl md:text-4xl">
          Agregar Fase para {project.name}
        </h4>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="relative z-0 w-full mb-14 group">
            <input
              type="name"
              name="name"
              className="input-text-template peer"
              placeholder=" "
              {...register("name", {
                required: "Debe especificar una nombre",
                maxLength: 40,
              })}
              required
            />
            <label className="input-text-label-template">Nombre</label>
          </div>
          <div className="relative z-0 w-full mb-14 group">
            <input
              type="text"
              name="location"
              className="input-text-template peer"
              {...register("location", {
                required: "Debe especificar una ubicación",
                maxLength: 40,
              })}
              placeholder=" "
              required
            />
            <label className="input-text-label-template">Ubicación</label>
          </div>
          <div className="relative z-0 w-full mb-14 group">
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

          <div className="flex justify-end  items-center mb-14">
            <input type="submit" value="Agregar Fase" className="btn-green" />
          </div>
        </form>
      </div>
    </>
  );
};
