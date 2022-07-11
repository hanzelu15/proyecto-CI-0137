import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";
import { useAuthStore } from "../../../hooks";

export const ExtrasView = () => {
  const { user } = useAuthStore();
  const [loading, setloading] = useState(true);
  const [data, setData] = useState([]);
  const [isEditable, setIsEditable] = useState(false);
  const location = useLocation();
  const extra = location.state;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: extra });
  return (
    <div>
      <section>
        <form action="">
          <div className="flex flex-col md:flex-row w-full justify-between mb-5 text-xl">
            <span className="font-semibold">Nombre:</span>{" "}
            <input
              className="text-right p-1 rounded-lg border disabled:border-transparent"
              type="text"
              defaultValue={extra.name}
              disabled={!isEditable}
              {...register("name", {
                required: "Debe especificar un nombre",
                maxLength: 30,
              })}
            />
          </div>
          <div className="flex flex-col md:flex-row w-full justify-between mb-5 text-xl">
            <span className="font-semibold">Nombre:</span>{" "}
            <input
              className="text-right p-1 rounded-lg border disabled:border-transparent"
              type="text"
              defaultValue={extra.location}
              disabled={!isEditable}
              {...register("location", {
                required: "Debe especificar una ubicación",
                maxLength: 30,
              })}
            />
          </div>
          <div>
            <select
              disabled={!isEditable}
              className="text-right text-xs md:text-xs lg:text-lg disabled:bg-transparent disabled:appearance-none"
              {...register("type", {
                required: "Debe especificar un rol",
              })}
            >
              <option defaultValue={true} value={extra.type}>
                {" "}
                {extra.type}
              </option>
              <option value="Electromecanica">Electromecanica</option>
              <option value="Muebles">Muebles</option>
              <option value="Acabado">Acabado</option>
            </select>
          </div>
        </form>
      </section>
    </div>
  );
};
