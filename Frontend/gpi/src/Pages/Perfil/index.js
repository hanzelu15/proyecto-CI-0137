import React, { useState } from "react";
import { MdPerson, MdOutlineEmail, MdLock } from "react-icons/md";

export const Perfil = () => {
  const [user, setUser] = useState({
    name: "Hansel",
    email: "Hansel@gmail.com",
    role: "admin ",
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const saveChanges = (e) => {};
  return (
    <>
      <div className=" w-[375px] h-full flex flex-col items-center m-auto">
        <h3 className="text-4xl py-5">Informacion Personal</h3>
        <button
          className=" self-end tracking-wide text-[22px] text-white w-fit bg-orange-50 hover:bg-orange-100 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => setIsDisabled(!isDisabled)}
        >
          Editar
        </button>
        <form action="" className="w-[375px] flex flex-col">
          <div className="flex items-center">
            <label htmlFor="floating_name" className="flex items-center">
              {" "}
              <MdPerson className="text-6xl mr-1" />
            </label>

            <input
              type="name"
              name="floating_name"
              className="block w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none disabled:bg-gray-200 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              defaultValue={user.name}
              required
              disabled={isDisabled}
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="floating_name" className="flex items-center">
              {" "}
              <MdOutlineEmail className="text-6xl mr-1" />
            </label>

            <input
              type="name"
              name="floating_name"
              className="block w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none disabled:bg-gray-200 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              defaultValue={user.email}
              required
              disabled={isDisabled}
            />
          </div>
          <button
            type="button"
            onClick={saveChanges}
            className={`${isDisabled ? "hidden" : ""} self-end  text-white bg-orange-50 hover:bg-orange-100 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`}
          >
            Guardar Cambios
          </button>
        </form>
      </div>
    </>
  );
};
