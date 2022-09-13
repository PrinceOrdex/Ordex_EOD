import { React, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { ContextApi } from "./Context";
import { useNavigate } from "react-router-dom";

const PrivateRoutes = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(ContextApi);

  console.log("**************User******************");
  console.log(user);
  var haslogin = false;
  if (user === true) {
    haslogin = true;
  }
  console.log("************  " + haslogin);
  // const haslogin = hasuser.user;
  let User = localStorage.getItem("UserData");
  if (User) {
    // haslogin = true;
    haslogin = true;
  }

  useEffect(() => {
    if (haslogin) {
      navigate("/eod");
    }
  }, []);

  console.log("user data >>>>>>>>> ", User);

  let auth = { token: haslogin };
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
