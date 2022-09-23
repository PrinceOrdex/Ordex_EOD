import React from "react";
import Login from "./Component/Auth/Login";
import Eod from "./Component/Employee/Eod";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
// import { Navigate, useNavigate } from 'react-router-dom';
import Main from "./Component/Admin/Main";
import PrivateRoutes from "./Component/Auth/PrivateRoutes";
import { ContextProvider } from "./Component/Auth/Context";
import { useReducer, createContext, useEffect } from 'react';
import { initialState, reducer } from "./reducer/reducer";
import ForgotPassword from "./Component/Auth/ForgotPassword";
import ResetPassword from "./Component/Auth/ResetPassword";
import Error from "./Component/Auth/Error";

export const MenuContext = createContext();

function App() {

  const location = useLocation();
  const navigate = useNavigate();

  const checkLocalStorage = () => {

    if (localStorage.getItem("userData")) {
      let userData = JSON.parse(localStorage.getItem("userData"));
      dispatch({ type: "LOGIN", payload: true });

      if (userData.roleName == "employee" || userData.roleName == "intern") {
        if (window.location != 'http://localhost:3000/eod') {
          window.location.replace("/eod");
        }
      }
      if (userData.roleName == "admin") {
        if (window.location != 'http://localhost:3000/admin/main') {
          window.location.replace("/admin/main");
        }
      }
    } else {
      dispatch({ type: "LOGIN", payload: false });

      // window.location != 'http://localhost:3000/' && window.location != 'http://localhost:3000/forgotpassword
      if (location.pathname == "/") {
        navigate('/');
      }
      else if (location.pathname == "/forgotpassword") {
        navigate('/forgotpassword');
      }
      else if (location.pathname.includes("resetpassword")) {

        const queryParams = new URLSearchParams(window.location.search);
        const user_id = queryParams.get("user_id");
        const token = queryParams.get("token");
        navigate(`/resetpassword?user_id=${user_id}&token=${token}`);

      } else {
        navigate('/*')
      }


      // if (window.location != 'http://localhost:3000/' && window.location != 'http://localhost:3000/forgotpassword') {
      //   if (window.location != 'http://localhost:3000/resetpassword/:user_id/:token') {
      //     // .includes("resetpassword");
      //     let params = window.location.toString().split('/');
      //    
      //     localStorage.setItem("forgotPassToken", params[5]);
      //     localStorage.setItem("forgotPassUid", params[4]);

      //     window.location.replace("/resetpassword/:user_id/:token");
      //   }
      // }

      // else if (window.location != 'http://localhost:3000/forgotpassword' && window.location != 'http://localhost:3000/resetpassword/:user_id/:token') {

      //   // if (window.location != 'http://localhost:3000/') {
      //     window.location.replace("/");
      //   // }
      // }


      // else if (window.location != 'http://localhost:3000/' && window.location != 'http://localhost:3000/resetpassword/:user_id/:token') {

      //   if (window.location != 'http://localhost:3000/forgotpassword') {
      //     window.location.replace("/forgotpassword");
      //   }
      // }

    }
  }


  useEffect(() => {
    checkLocalStorage();
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <MenuContext.Provider value={{ state, dispatch }}>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/forgotpassword" element={<ForgotPassword />} />
          <Route exact path="/resetpassword" element={<ResetPassword />} />
          <Route exact path="/eod" element={<Eod />} />
          <Route path="/admin/main" element={<Main />} exact />
          <Route
            path="/*"
            element={<Error />}
          />
        </Routes>
      </MenuContext.Provider>
    </>
  );
}

export default App;
