import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import Pagination from "../../../Components/Pagination/Index.js";
import { PhaseCard } from "../../../Components/PhaseCard.js/index.js";
import { getPhasesByProject } from "../../../Services/PhaseService";
import { getUserById } from "../../../Services/UserService.js";
import { ProjectInfo } from "../ProjectInfo/index.js";

export const ProjectDetails = () => {
  const [loading, setloading] = useState(true);
  const [data, setData] = useState([]);
  const location = useLocation();
  const project = location.state;
  const [managers, setManagers] = useState([]);
  useEffect(() => {
    getPhasesByProject(project._id)
      .then((resp) => {
        setData(resp);
        setloading(false);
      })
      .then(
        getUserById(project.manager).then((resp) => {
          setManagers(resp.user);
        })
      );
  }, []);

  return (
    <div className="flex flex-col justify-items-center items-center w-[300px] md:w-[500px] m-auto">
      <ProjectInfo project={project} managers={managers}></ProjectInfo>
      <section className="w-full flex flex-col gap-5">
        <div className="flex w-full  justify-between">
          <h4 className="text-3xl">Fases:</h4>
          <button className="btn-green h-fit">Agregar Fase</button>
        </div>
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
