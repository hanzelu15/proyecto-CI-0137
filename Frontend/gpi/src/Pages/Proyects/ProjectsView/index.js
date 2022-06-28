import React, { useEffect, useState } from "react";
import Pagination from "../../../Components/Pagination/Index";
import { getAllProjects } from "../../../Services/ProjectService";
import { ProjectCard } from "../../../Components/ProjectCard";




export const ProyectsView = () => {

  const [loading, setloading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllProjects().then((resp) => {
      setData(resp);
      setloading(true);
    });
  }, []);

  return (
  
      <div className="flex flex-col justify-items-center items-center w-[300px] md:w-[500px] m-auto">
        <header className="flex justify-between items-center h-20 w-full">
          <h4 className="text-2xl">Projectos</h4>
          <button className="btn-green h-fit">Agregar</button>
        </header>

        <section className="w-full flex flex-col gap-5">
          {loading ? (
            data.projects.map((project) => <ProjectCard key={project._id} project={project}></ProjectCard>)
          ) : (
            <p>Cargando</p>
          )}
        </section>
        <section>
          <Pagination postsPerPage={5} totalPosts={data.count} setData= {setData} query ={getAllProjects}></Pagination>
        </section>
      </div>
    
  );
};
