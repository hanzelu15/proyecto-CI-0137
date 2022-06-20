import React from "react";
import { useForm } from "react-hook-form";

export const CreatePhase = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="h-full flex flex-col items-center  pt-20">
        <h4 className="mb-14 text-3xl md:text-4xl">Agregar Fase</h4>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[375px] lg:w-[600px] h-[500px] flex flex-col justify-between"
        >
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
              name="descripion"
              className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
