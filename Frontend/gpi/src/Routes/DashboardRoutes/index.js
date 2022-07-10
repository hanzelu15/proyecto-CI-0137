import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "../../Components/NavBar/Index";
import { Home } from "../../Pages/Home";
import { ProyectsView } from "../../Pages/Proyects/ProjectsList";
import { Perfil } from "../../Pages/Perfil";
import { CreateProject } from "../../Pages/Proyects/CreateProject/";
import { ProjectView } from "../../Pages/Proyects/ProjectView";
import { PhasesView } from "../../Pages/Phases/PhasesView";
import { CreatePhase } from "../../Pages/Phases/CreatePhase";
import { UnitView } from "../../Pages/units/UnitView";
import { CreateUnit } from "../../Pages/units/CreateUnit";
import { CreateExtra } from "../../Pages/Extras/CreateExtra";
import { ExtrasView } from "../../Pages/Extras/ExtrasView";
import { UserAdministration } from "../../Pages/UserAdministration";

export const DashboardRoutes = () => {
  return (
    <>
      <div className="">
        <div className="fixed bottom-0 md:top-0 w-full z-10 h-[50px]">
          <NavBar></NavBar>
        </div>

        <div className="pb-[75px] md:mt-[50px] z-0 top-0 md:bottom-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="proyects" element={<ProyectsView />} />
            <Route path="new-project" element={<CreateProject />} />
            <Route path="project/:name" element={<ProjectView />} />
            <Route path="phase/:name" element={<PhasesView />} />
           
            <Route path="perfil" element={<Perfil />} />
            <Route path="new-phase/:project" element={<CreatePhase />} />
            <Route path="new-unit/:phase" element={<CreateUnit />} />
            <Route path="unit/:name" element={<UnitView />} />
            <Route path="new-extra/:unit" element={<CreateExtra />} />
            <Route path="extra/:name" element={<ExtrasView />} />
            <Route path="userAdministration" element={<UserAdministration />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
