import React from "react";
import { useForm } from "react-hook-form";

export const CreateProject = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="h-full flex flex-col items-center  pt-20">
        <h4 className="mb-14 text-3xl md:text-4xl">Crear Proyecto</h4>
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
                maxLength: 200,
              })}
              placeholder=" "
              required
            />
            <label className="input-text-label-template">Ubicación</label>
          </div>
          <div className="relative z-0 w-full mb-7 group">
            <select
              className="bg-transparent border border-gray-300 text-gray-500  text-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("manager", {
                required: "Debe especificar una Encargado",
              })}
            >
              <option defaultValue={true}>Encargado</option>
              <option value="Ninguno">Ninguno</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
          <div className="relative z-0 w-full mb-14 group">
            <select
              className="bg-transparent border border-gray-300 text-gray-500  text-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("managerTwo")}
              defaultValue={"Ninguno"}
            >
              <option disabled value="Ninguno">
                Segundo Encargado (Opcional)
              </option>
              <option value="Ninguno">Ninguno</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
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
            <input
              type="submit"
              value="Agregar Proyecto"
              className="btn-green"
            />
          </div>
        </form>
      </div>
    </>
  );
};
