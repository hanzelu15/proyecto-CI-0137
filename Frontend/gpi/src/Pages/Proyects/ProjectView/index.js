import React, { useEffect, useState } from "react";

import { Link, useLocation } from "react-router-dom";

import Pagination from "../../../Components/Pagination/Index.js";
import { PhaseCard } from "../../../Components/PhaseCard/index.js";
import { getPhasesByProject } from "../../../Services/PhaseService";
import { getUserById } from "../../../Services/UserService.js";
import { ProjectInfo } from "../ProjectInfo/index.js";
import { useAuthStore } from "../../../hooks";

export const ProjectView = () => {
  const { user } = useAuthStore();
  const [loading, setloading] = useState(true);
  const [data, setData] = useState([]);
  const location = useLocation();
  const project = location.state;
  const [manager, setManager] = useState([]);
  useEffect(() => {
    getPhasesByProject(project._id)
      .then((resp) => {
        setData(resp);
        setloading(false);
        console.log(resp);
      })
      .then(
        getUserById(project.manager).then((resp) => {
          setManager(resp.user);
        })
      );
  }, []);

  return (
    <div className="flex flex-col justify-items-center items-center responsive-width-component">
      <h2 className="text-4xl font-semibold pt-10 items-start">Fases</h2>
      <ProjectInfo project={project} manager={manager}></ProjectInfo>
      <section className="w-full flex flex-col gap-5">
        <div className="flex w-full  justify-between">
<<<<<<< Updated upstream
          <h4 className="text-3xl"> </h4>
          <Link to={`/new-phase/${project.name}`} state={project} className="btn-green h-fit">Agregar una nueva fase</Link>
=======
          <h4 className="text-3xl">Fases:</h4>
          <Link to={`/new-phase/${project.name}`} state={project} className={`${user.role!=="ADMIN" ? "hidden" : ""} btn-green h-fit"`}>Agregar una nueva fase</Link>
>>>>>>> Stashed changes
          
        </div>
        {!loading ? (
          data.phases.map((phase) => (
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
