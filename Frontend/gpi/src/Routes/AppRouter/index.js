import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "../../Pages/Login";
import { Register } from "../../Pages/Register";
import { Welcome } from "../../Pages/Welcome";

import { DashboardRoutes } from "../DashboardRoutes";


export const AppRouter = () => {
  return (
    <>
      <div className="pb-52">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="/*" element={<DashboardRoutes />} />
          </Routes>
      </div>
    </>
  );
};
