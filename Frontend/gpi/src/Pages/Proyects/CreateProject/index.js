import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { createProject } from "../../../Services/ProjectService";
import { getUsersByRole } from "../../../Services/UserService";

export const CreateProject = () => {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(true);
  const [managers, setManagers] = useState([]);

  useEffect(() => {
    getUsersByRole("ADMIN").then((data) => {
      setManagers(data.users);
      console.log(managers);
      setLoading(false);
    });
  }, []);

  const onSubmit = async (data) => {
    const response = await createProject(data);
    if (response.ok) {
      
      const project = response.project;
      Swal.fire("Exito!", "Se ha creado el proyecto!", "success");
      return navigate(`/project/${project.name}`, { state: project });
    }
    
    return Swal.fire("Ups!", "No se pudo crear el proyecto!", "error");
  };

  return (
    <>
      {!loading && (
        <div className="h-full flex flex-col items-center  pt-20 responsive-width-component">
          <h4 className="mb-14 text-3xl md:text-4xl">Crear Proyecto</h4>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full h-[500px] flex flex-col justify-between"
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
                {!loading &&
                  managers.map((data) => (
                    <option value={data.uid} key={data.uid}>
                      {data.name}
                    </option>
                  ))}
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
      )}
    </>
  );
};
