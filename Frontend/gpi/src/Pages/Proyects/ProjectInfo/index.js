import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { MdDelete, MdModeEdit, MdSave } from "react-icons/md";
import Swal from "sweetalert2";
import { deleteProject, updateProject } from "../../../Services/ProjectService";
import { getUsersByRole } from "../../../Services/UserService";
import { useAuthStore } from "../../../hooks";


export const ProjectInfo = ({ project, manager, query }) => {
  const { user } = useAuthStore();
  const [isEditable, setIsEditable] = useState(false);
  const [loading, setLoading] = useState(true);
  const [managers, setManagers] = useState([]);
  let navigate = useNavigate();
  
  const handleDelete = async () => {
    Swal.fire({
      title: "Desea borrar este proyecto?",
      text: "Esta acción no es reversible!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, Borrar!",
      cancelButtonText: "No, Cancelar!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        console.log(project._id);
        deleteProject(project._id);
        Swal.fire("Borrado!", "Su Proyecto fue borrado.", "success");
        await query(0);
        navigate(-1);
      }
    });
  };
  useEffect(() => {
    getUsersByRole("ADMIN").then((data) => {
      setManagers(data.users);
      setLoading(false);
    });
  }, []);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: project });

  const watchAllFields = watch();

  const handleEdit = async () => {
    console.log(watchAllFields);
    const response = await updateProject(watchAllFields);
    setIsEditable(!isEditable);
    if (response.ok) {
      return Swal.fire("Exito!", "Se ha editado el proyecto!", "success");
    }

    return Swal.fire("Ups!", "No se pudo editar el proyecto!", "error");
  };
  const onSubmit = (data) => {
    //updateProject(data);
  };
  return (
    <header className="flex flex-col items-center w-full py-5">
      <div className="flex justify-between flex-col items-end w-full mb-5">
        <div className="mb-5">
          <button
            className={`btn-green rounded-full mr-5 ${!isEditable ? "hidden" : ""}`}
            onClick={handleEdit}
          >
            {" "}
            <MdSave className="text-xl md:text-xl" />{" "}
          </button>
          <button
            className={`${user.role!=="ADMIN" ? "hidden" : ""} btn-green rounded-full mr-5`} 
            onClick={() => setIsEditable(!isEditable)}
          >
            {" "}
            <MdModeEdit className="text-xl md:text-xl" />{" "}
          </button>
          <button className={`${user.role!=="ADMIN" ? "hidden" : ""} rounded-full btn-green`} onClick={handleDelete}>
            {" "}
            <MdDelete className="text-xl md:text-xl" />{" "}
          </button>
        </div>
      </div>

      <div className="w-full text-xl">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          {" "}
          <div className="flex flex-col md:flex-row w-full justify-between mb-5 text-xl">
            <span className="font-semibold">Nombre del proyecto:</span>{" "}
            <input
              className="text-right p-1 rounded-lg border disabled:border-transparent"
              type="text"
              defaultValue={project.name}
              disabled={!isEditable}
              {...register("name", {
                required: "Debe especificar un nombre",
                maxLength: 40,
              })}
            />
          </div>
          <div className="flex flex-col md:flex-row w-full justify-between mb-5">
            <span className="font-semibold">Ubicación:</span>{" "}
            <input
              className="text-right p-1 rounded-lg border disabled:border-transparent"
              type="text"
              defaultValue={project.location}
              disabled={!isEditable}
              {...register("location", {
                required: "Debe especificar un nombre",
                maxLength: 40,
              })}
            />
          </div>
          <div className="flex flex-col md:flex-row w-full justify-between mb-5">
            <span className="font-semibold">Manager(s):</span>{" "}
  
              <select
              disabled={!isEditable}
              className="text-right disabled:bg-transparent disabled:appearance-none p-1 rounded-lg border disabled:border-transparent"
                {...register("manager", {
                  required: "Debe especificar una Encargado",
                })}
              >
                <option defaultValue={true} value={manager.uid}> {manager.name}</option>
                {!loading && managers.map((data) => (
                  <option value={data.uid} key={data.uid}>
                    {data.name}
                  </option>
                ))}
              </select>
            </div>
       
          <div className="flex w-full flex-col justify-between mb-5 h-36">
            <span className="font-semibold mb-3">Descripción:</span>{" "}
            <textarea
              rows={8}
              type="textarea"
              className="p-3 rounded-lg border disabled:border-transparent"
              defaultValue={project.description}
              disabled={!isEditable}
            />
          </div>
        </form>
      </div>
    </header>
  );
};
