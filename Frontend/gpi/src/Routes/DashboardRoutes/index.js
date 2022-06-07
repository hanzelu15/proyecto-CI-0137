import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "../../Components/NavBar/Index";
import { Home } from "../../Pages/Home";
import { ProyectsView } from "../../Pages/ProyectsView";
import { Welcome } from "../../Pages/Welcome";
import { Perfil } from "../../Pages/Perfil";

export const DashboardRoutes = () => {
  return (
    <>
      <div className="h-screen">
        <NavBar></NavBar>
        <div className="fit-content">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="home" element={<Home />} />
            <Route path="proyects" element={<ProyectsView />} />
            <Route path="Perfil" element={<Perfil />} />
          </Routes>
        </div>
      </div>
    </>
  );
};