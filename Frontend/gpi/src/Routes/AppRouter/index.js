import React from "react";
import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "../../hooks";
import { Login } from "../../Pages/Login";
import { Register } from "../../Pages/Register";
import { Welcome } from "../../Pages/Welcome";

import { DashboardRoutes } from "../DashboardRoutes";

export const AppRouter = () => {
  const { status, checkAuthToken } = useAuthStore();
  useEffect(() => {
    checkAuthToken();
  }, []);

  if (status === "checking") {
    return <h3>Cargando</h3>;
  }
  return (
    <>
      <div className="pb-32 md:pb-0">
        <Routes>
          {status === "not-authenticated" ? (
            <>
              <Route path="/*" element={<Welcome />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </>
          ) : (
            <>
              <Route path="/*" element={<DashboardRoutes />} />
              <Route path="/login" element={ <Navigate to="/" /> } />
              <Route path="/register" element={ <Navigate to="/" /> } />
            </>
          )}
        </Routes>
      </div>
    </>
  );
};
