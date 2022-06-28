import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "../../Components/NavBar/Index";
import { Home } from "../../Pages/Home";
import { ProyectsView } from "../../Pages/Proyects/ProjectsView";
import { Perfil } from "../../Pages/Perfil";
import { CreateProject } from "../../Pages/Proyects/CreateProject/";
import { ProjectDetails } from "../../Pages/Proyects/ProjectDetails";

export const DashboardRoutes = () => {
  return (
    <>
      <div className="">
        <div className="fixed bottom-0 md:top-0 w-full z-10 h-[50px]">
          <NavBar></NavBar>
        </div>

        <div className="z-0 mt-[50px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="proyects" element={<ProyectsView />} />
            <Route path="new-project" element={<CreateProject />} />
            <Route path="project/:name" element={<ProjectDetails />} />
            <Route path="perfil" element={<Perfil />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
