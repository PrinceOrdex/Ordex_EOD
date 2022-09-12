import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { ContextApi } from "./Context";

const PrivateRoutes = () => {
  const hasuser = useContext(ContextApi);

  console.log("**************User******************");
  console.log(hasuser.user);

  // let auth = { token: true };
  // return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
