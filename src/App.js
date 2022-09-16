import React from "react";
import Login from "./Component/Auth/Login";
import Eod from "./Component/Employee/Eod";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from 'react-router';
import Main from "./Component/Admin/Main";
import PrivateRoutes from "./Component/Auth/PrivateRoutes";
import { ContextProvider } from "./Component/Auth/Context";
import { useReducer, createContext, useEffect } from 'react';
import { initialState, reducer } from "./reducer/reducer";

export const MenuContext = createContext();


function App() {

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
      if (window.location != 'http://localhost:3000/') {
        window.location.replace("/");
      }
      // window.location.replace('http://localhost:3000/');
      // navigate("/login");

    }
    // alert(`...${state}`);
  }


  useEffect(() => {
    checkLocalStorage();
    // alert(state);
  });

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <BrowserRouter>
        <MenuContext.Provider value={{ state, dispatch }}>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/eod" element={<Eod />} />
            <Route path="/admin/main" element={<Main />} exact />
            <Route
              path="/*"
              element={
                <div>
                  <h2 className="text-center">404 Page not found</h2>
                </div>
              }
            />
          </Routes>
        </MenuContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
