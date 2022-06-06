import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "../../Components/NavBar/Index";
import { Login } from "../../Pages/Login";
import { Register } from "../../Pages/Register";
import { Welcome } from "../../Pages/Welcome";
import { Home } from "../../Pages/Home";
import { ProyectsView } from "../../Pages/ProyectsView";
export const AppRouter = () => {
  return (
    <>
      <div className="h-screen">
        <NavBar></NavBar>
        <div className="fit-content">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="login" element={<Login />} />
            <Route path="home" element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="proyects" element={<ProyectsView />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
