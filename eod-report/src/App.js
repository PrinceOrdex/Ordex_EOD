import React from "react";
import Login from "./Component/Auth/Login";
import Eod from "./Component/Employee/Eod";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" component={<Login />} />
          <Route path="/" />
        </Routes>
      </BrowserRouter>
      {/* <Login /> */}
      <Eod />
    </>
  );
}

export default App;
