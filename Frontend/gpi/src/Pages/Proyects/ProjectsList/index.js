import React, { useEffect, useState } from "react";
import Pagination from "../../../Components/Pagination/Index";
import { getAllProjects } from "../../../Services/ProjectService";
import { ProjectCard } from "../../../Components/ProjectCard";




export const ProyectsView = () => {

  const [loading, setloading] = useState(true);

  const [data, setData] = useState([]);



  useEffect(() => {
    
    getAllProjects().then((resp) => {
      setData(resp);
      setloading(false);
    });
  }, []);

  return (
  
      <div className="flex flex-col justify-items-center items-center responsive-width-component">
        <header className="flex justify-between items-center py-5 w-full ">
          <h4 className="text-2xl md:text-3xl">Proyectos</h4>
          <button className="btn-green h-fit">Agregar</button>
        </header>

        <section className="w-full flex flex-col gap-5">
          {!loading ? (
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
