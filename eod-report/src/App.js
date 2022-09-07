import React from "react";
import Login from "./Component/Auth/Login";
import Eod from "./Component/Employee/Eod";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/eod" element={<Eod />} />
        </Routes>
      </BrowserRouter>
      {/* <Login /> */}
      {/* <Eod /> */}
    </>
  );
}

export default App;
