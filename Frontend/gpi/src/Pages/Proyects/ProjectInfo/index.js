import React from "react";
import { useState } from "react";
import { MdDelete, MdModeEdit, MdSave } from "react-icons/md";
import Swal from "sweetalert2";

export const ProjectInfo = ({ project, managers }) => {
  const [isEditable, setIsEditable] = useState(false);
  const handleDelete = () => {
    Swal.fire({
      title: "Desea borrar este proyecto?",
      text: "Esta acción no es reversible!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, Borrar!",
      cancelButtonText: "No, Cancelar!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Borrado!", "Su Proyecto fue borrado.", "success");
      }
    });
  };
  const editMode = () => {};
  const submitEdit = () => {};
  return (
    <header className="flex flex-col items-center w-full py-5">
      <div className="flex justify-between flex-col items-center w-full mb-5">
        <div className="mb-5">
          <button className={`btn-green mr-5 ${!isEditable ? "hidden" : ""}`}>
            {" "}
            <MdSave className="text-xl md:text-3xl" />{" "}
          </button>
          <button
            className="btn-green mr-5"
            onClick={() => setIsEditable(!isEditable)}
          >
            {" "}
            <MdModeEdit className="text-xl md:text-3xl" />{" "}
          </button>
          <button className="btn-green" onClick={handleDelete}>
            {" "}
            <MdDelete className="text-xl md:text-3xl" />{" "}
          </button>
        </div>
      </div>

      <div className="w-full text-xl">
        <div className="flex flex-col md:flex-row w-full justify-between mb-5 text-xl">
          <span className="font-semibold">Nombre:</span>{" "}
          <input
            className="text-right"
            type="text"
            defaultValue={project.name}
            disabled={!isEditable}
          />
        </div>
        <div className="flex flex-col md:flex-row w-full justify-between mb-5">
          <span className="font-semibold">Ubicación:</span>{" "}
          <input
            className="text-right"
            type="text"
            defaultValue={project.location}
            disabled={!isEditable}
          />
        </div>
        <div className="flex flex-col md:flex-row w-full justify-between mb-5">
          <span className="font-semibold">Manager(s):</span>{" "}
          <input
            className="text-right"
            type="text"
            defaultValue={managers.name}
            disabled={!isEditable}
          />
        </div>
        <div className="flex w-full flex-col justify-between mb-5 h-36">
          <span className="font-semibold mb-3">Descripción:</span>{" "}
          <textarea
            rows={8}
            className="text-center"
            type="textarea"
            defaultValue={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt elementum nunc at congue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris condimentum, "}
            disabled={!isEditable}
          />
        </div>
      </div>
    </header>
  );
};
