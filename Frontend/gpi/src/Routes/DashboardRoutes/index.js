import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "../../Components/NavBar/Index";
import { Home } from "../../Pages/Home";
import { ProyectsView } from "../../Pages/Proyects/ProjectsView";
import { Welcome } from "../../Pages/Welcome";
import { Perfil } from "../../Pages/Perfil";
import { CreateProject } from "../../Pages/Proyects/CreateProject/";

export const DashboardRoutes = () => {
  return (
    <>
      <div className="">
        <div className="fixed bottom-0 md:top-0 w-full z-30">
            <NavBar></NavBar>
        </div>
      
        <div className="  z-10 pb-52">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="home" element={<Home />} />
            <Route path="proyects" element={<ProyectsView />} />
            <Route path="new-project" element={<CreateProject />} />
            <Route path="Perfil" element={<Perfil />} />
          </Routes>
        </div>
      </div>
    </>
  );
};