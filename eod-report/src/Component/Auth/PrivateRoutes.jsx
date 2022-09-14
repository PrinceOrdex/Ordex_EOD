import { React } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { ContextApi } from "./Context";
// import { useNavigate } from "react-router-dom";

const PrivateRoutes = () => {
  // const navigate = useNavigate();
  const { user, setUser } = useContext(ContextApi);

  console.log("**************User******************");
  console.log(user);
  var haslogin = false;
  if (user === true) {
    haslogin = true;
  }
  console.log("************  " + haslogin);
  // const haslogin = hasuser.user;
  let User = localStorage.getItem("userData");
  if (User) {
    // haslogin = true;
    haslogin = true;
  }

  console.log("user data >>>>>>>>> ", User);
  console.log("haslogin >>>>>>>>>  " + haslogin);

  let auth = { token: haslogin };
  return auth.token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
