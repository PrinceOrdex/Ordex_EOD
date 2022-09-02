import React, { useEffect } from "react";
// import "./custom";
import "./css/style.scss";

const Login = () => {
  return (
    <>
      <div className="main d-flex justify-content-center justify-content-sm-end align-items-center">
        <div className="box text-center ms-3 me-3 me-sm-5 p-4">
          <div
            className="d-flex justify-content-center"
            style={{ position: "relative" }}
          >
            <div
              className="btn-top d-flex justify-content-between"
              id="btn-top"
            >
              <a href="#" className="btn-1 active">
                Employee
              </a>
              <a href="#" className="btn-1">
                Admin
              </a>
              {/* <button type="button" className="btn btn-1">Employee</button>
            <button type="button" className="btn btn-2">Admin</button>  */}
            </div>
          </div>
          <div className="image mt-4 mb-3">
            <img src="./image/Logo.png" alt="" srcSet="" />
          </div>
          <div className="heading">
            <h4>Login as Employee</h4>
          </div>
          <form className="mt-4">
            {/* Email input  */}
            <div className="row px-0 mx-0 d-flex justify-content-center">
              <div className="col-10">
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="username"
                    className="form-control"
                    autoComplete="off"
                    required
                  />
                  <label className="form-label" for="form2Example1">
                    Email address
                  </label>
                  <div className="form-notch">
                    <div
                      className="form-notch-leading"
                      style={{ width: "9px", borderRight: "0" }}
                    ></div>
                    <div
                      className="form-notch-middle"
                      style={{ width: "88.8px" }}
                    ></div>
                    <div className="form-notch-trailing"></div>
                  </div>
                </div>
              </div>

              {/* Password input  */}
              <div className="col-10">
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    autoComplete="off"
                    required
                  />
                  <label className="form-label" for="form2Example2">
                    Password
                  </label>
                  <div className="form-notch">
                    <div
                      className="form-notch-leading"
                      style={{ width: "9px", borderRight: "0" }}
                    ></div>
                    <div
                      className="form-notch-middle"
                      style={{ width: "64.8px" }}
                    ></div>
                    <div className="form-notch-trailing"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit button  */}
            <button
              type="button"
              className="btn btn-primary btn-block mb-3 px-5 py-1 fw-500 login"
            >
              Login
            </button>
          </form>
          <div className="mt-2">
            <p>
              Don't have account? <a href="#">Register</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
