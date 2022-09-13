import React from "react";
import Login from "./Component/Auth/Login";
import Eod from "./Component/Employee/Eod";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Main from "./Component/Admin/Main";
import PrivateRoutes from "./Component/Auth/PrivateRoutes";
import { ContextProvider } from "./Component/Auth/Context";

function App() {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route exact path="/login" element={<Login />} />
            </Route>
            {/* <Route exact path="/" element={<Eod />} /> */}

            <Route element={<PrivateRoutes />}>
              <Route exact path="/eod" element={<Eod />} />
            </Route>
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
      </ContextProvider>
      {/* <Login /> */}
      {/* <Eod /> */}
      {/* <Main /> */}
    </>
  );
}

export default App;
