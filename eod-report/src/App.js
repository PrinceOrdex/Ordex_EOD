import React from "react";
import Login from "./Component/Auth/Login";
import Eod from "./Component/Employee/Eod";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Main from "./Component/Admin/Main";
import PrivateRoutes from "./Component/Auth/PrivateRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Eod />} exact />
          </Route> */}
          <Route element={<PrivateRoutes />}>
            <Route path="/admin/main" element={<Main />} exact />
          </Route>
          <Route
            path="/*"
            element={
              <div>
                <h2 className="text-center">404 Page not found</h2>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
      {/* <Login /> */}
      {/* <Eod /> */}
      {/* <Main /> */}
    </>
  );
}

export default App;
