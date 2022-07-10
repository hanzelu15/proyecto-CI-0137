import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MdDelete, MdModeEdit, MdSave } from "react-icons/md";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { deletePhase } from "../../../Services/PhaseService";
import { useAuthStore } from "../../../hooks";

export const UnitInfo = ({unit}) => {
  const { user } = useAuthStore();
  const [isEditable, setIsEditable] = useState(false);
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();
  const handleEdit = async () => {
    // const response = await updateProject(watchAllFields);
    // setIsEditable(!isEditable);
    // if (response.ok) {
    //   return Swal.fire("Exito!", "Se ha editado el proyecto!", "success");
    // }

    return Swal.fire("Ups!", "No se pudo editar la unidad!", "error");
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Desea borrar esta unidad?",
      text: "Esta acción no es reversible!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, Borrar!",
      cancelButtonText: "No, Cancelar!",
    }).then((result) => {
      if (result.isConfirmed) {
        deletePhase(unit._id);
        Swal.fire("Borrado!", "Su Unidad fue borrada.", "success");
        navigate(-1);
      }
    });
  };

  const onSubmit = (data) => {
    //updateProject(data);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: unit });

  return (
    <header className="flex flex-col items-center w-full py-5">
      <div className="flex justify-between flex-col w-full mb-5 items-end" >
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
          <button className={`${user.role!=="ADMIN" ? "hidden" : ""} rounded-full btn-green`}onClick={handleDelete}>
            {" "}
            <MdDelete className="text-xl md:text-xl" />{" "}
          </button>
        </div>
      </div>
      <div className="w-full text-xl">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          {" "}
          <div className="flex flex-col md:flex-row w-full justify-between mb-5 text-xl">
            <span className="font-semibold">Nombre del propietario:</span>{" "}
            <input
              className="text-right p-1 rounded-lg border disabled:border-transparent"
              type="text"
              defaultValue={unit.name}
              disabled={!isEditable}
              {...register("name", {
                required: "Debe especificar un nombre",
                maxLength: 40,
              })}
            />
          </div>
          <div className="flex flex-col md:flex-row w-full justify-between mb-5">
            <span className="font-semibold">Número de unidad:</span>{" "}
            <input
              className="text-right p-1 rounded-lg border disabled:border-transparent"
              type="text"
              defaultValue={unit.number}
              disabled={!isEditable}
              {...register("location", {
                required: "Debe especificar un nombre",
                maxLength: 40,
              })}
            />
          </div>
          
        </form>
      </div>
    </header>
  )
}
