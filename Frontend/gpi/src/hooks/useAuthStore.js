import { useDispatch, useSelector } from "react-redux";
import gpiAPI from "../api/gpiAPI";
import {
  clearErrorMessage,
  onChecking,
  onLogin,
  onLogout,
} from "../store/authSlice/authSlice";

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    dispatch(onChecking());
    try {
      const { data } = await gpiAPI.post("/auth/login", { email, password });

      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(onLogin(data.user));
    } catch (error) {
      dispatch(onLogout("Credeciales Incorrectas"));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10000);
    }
  };
  const startRegister = async (userData) => {
    dispatch(onChecking());
    try {
      const { data } = await gpiAPI.post("/auth/new", userData);
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      console.log(data);
      dispatch(onLogin(data.user));
    } catch (error) {
      console.log(error);
      dispatch(onLogout(error.response.data?.msg || "error inesperado"));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10000);
    }
  };
  const startLogout =()=>{
    localStorage.clear();
    dispatch(onLogout());
  };
  const checkAuthToken = async () => {
    const token = localStorage.getItem("token");
    if (!token) return dispatch(onLogout());
    try {
      const { data } = await gpiAPI.get("/auth/renew");
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(onLogin(data.user));
    } catch (error) {
      dispatch(onLogout());
    }
  };
  const sendRecoveryMail = async (data) => {
    console.log("En auth store ", data.email);
    try {
      const response = await gpiAPI.post(`auth/password-recovery/`, { data });
      console.log("En auth store antes del return", response)
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  const checkCode = async (data) => {
    console.log("En auth store ", data.code);
    try {
      const response = await gpiAPI.post(`auth/code-check/`, { data });
      console.log("En code check antes del return", response)
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  const passwordUpdate = async (userID ,data) => {
    console.log("En auth store ", data, " userID ", userID);
    try {
      const response = await gpiAPI.post(`auth/password-update/`, { userID, data });
      console.log("En code check antes del return", response)
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  return {
    status,
    user,
    errorMessage,
    startLogin,
    startRegister,
    startLogout,
    checkAuthToken,
    sendRecoveryMail,
    checkCode,
    passwordUpdate,
  };
};
