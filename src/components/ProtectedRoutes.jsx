import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Sinup from "../pages/Signup";

const useAuth = () => {
  const user = { loggedIn: false };
  return user && user.loggedIn;
};
const ProtectedRoutes = () => {
  const isAuth = useAuth();

  return isAuth ? <Outlet /> : <Navigate replace to="/sign-up" />;
};

export default ProtectedRoutes;