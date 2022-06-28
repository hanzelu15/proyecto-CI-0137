import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Pagination from "../../../Components/Pagination/Index.js";

import { PhaseCard } from "../../../Components/PhaseCard.js";
import { getPhasesByProject } from "../../../Services/PhaseService";

export const ProjectDetails = () => {
  const [loading, setloading] = useState(true);
  const [data, setData] = useState([]);

  const location = useLocation();
  const project = location.state;
  useEffect(() => {
    getPhasesByProject(project._id).then((resp) => {
      setData(resp);
      setloading(false);
    });
  }, []);

  return (
    <div className="flex flex-col justify-items-center items-center w-[300px] md:w-[500px] m-auto">
      <header className="flex flex-col items-center h-32 w-full pt-5 ">
        <div className="flex justify-between items-center w-full">
          <h4 className="text-2xl">Fases de {project.name}</h4>
          <button className="btn-green h-fit">Agregar</button>
        </div>
        <div className="w-full">
          <p><span className="font-semibold">Ubicación:</span>  {project.location}</p>
          <p><span className="font-semibold">Manager(s):</span>  {project.manager}</p>
        </div>
      </header>
      <section className="w-full flex flex-col gap-5">
        {!loading ? (
          data.phase.map((phase) => (
            <PhaseCard key={phase._id} phase={phase}></PhaseCard>
          ))
        ) : (
          <p>Cargando</p>
        )}
      </section>
      <section>
        <Pagination
          postsPerPage={5}
          totalPosts={data.count}
          setData={setData}
          query={getPhasesByProject}
        ></Pagination>
      </section>
    </div>
  );
};
