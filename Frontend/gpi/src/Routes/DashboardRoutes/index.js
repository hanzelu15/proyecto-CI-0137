import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "../../Components/NavBar/Index";
import { Home } from "../../Pages/Home";
import { Prueba } from "../../Pages/Prueba";

export const DashboardRoutes = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/prueba" element={<Prueba />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};
