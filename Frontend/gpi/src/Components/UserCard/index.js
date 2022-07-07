import React, { useEffect } from 'react'
import { MdOutlineLocationOn } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdDelete, MdModeEdit, MdSave } from "react-icons/md";
import { updateUserData } from "../../Services/UserService.js";
import Swal from "sweetalert2";

export const UserCard = ( {user} ) => {
  const [isEditable, setIsEditable] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  useEffect(() => {

  }, [])
  const watchAllFields = watch();
  const handleEdit = async () => {
    const response = await updateUserData(watchAllFields, user.uid);
    console.log(response);
    setIsEditable(!isEditable);
    if (response) {
      return Swal.fire("Exito!", "Se ha editado el rol del usuario!", "success");
    } else {
        return Swal.fire("Ups!", "No se pudo editar el rol del usuario!", "error");
    }
  };
  return (
    
    <>
        {
            user &&
            <div state={user} className='bg-white h-20 w-full flex justify-between items-center shadow-md px-2'>
              <h4 className='text-xs md:text-xs lg:text-lg'> {user.name}</h4>
              <div className='d-flex flex-row-reverse'>
                <button
                  class={`px-3 py-2 text-xs btn-green mr-1 ${!isEditable ? "hidden" : ""}`}
                  onClick={handleEdit}
                >
                  {" "}
                  <MdSave class="text-xl md:text-xl" />{" "}
                </button>
                <button
                  class="px-3 py-2 text-xs btn-green mr-1"
                  onClick={() => setIsEditable(!isEditable)}
                >
                  {" "}
                  <MdModeEdit className="text-xl md:text-xl" />{" "}
                </button>
                <select
                disabled={!isEditable}
                className="text-right text-xs md:text-xs lg:text-lg disabled:bg-transparent disabled:appearance-none"
                  {...register("role", {
                    required: "Debe especificar un rol",
                  })}
                >
                <option defaultValue={true} value={user.uid}> {user.role}</option>
                    <option value="ADMIN">
                      ADMIN
                    </option>
                    <option value="INSPECTOR">
                      INSPECTOR
                    </option>
                </select>
              </div>
            </div>
        }
    </>
 
  )
}
