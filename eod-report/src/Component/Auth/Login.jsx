import React, { useEffect } from "react";
// import "./custom";
// import "./../../css/style.css";
import { NavLink } from "react-router-dom";
import "./../../css/style.scss";
import Logo from "./../../Image/Logo.png";

const Login = () => {
  return (
    <>
      <div className="main d-flex justify-content-center justify-content-sm-end align-items-center">
        <div className="box text-center ms-3 me-3 me-sm-5 p-4">
          <div
            className="d-flex justify-content-center"
            style={{ position: "relative" }}
          >
            <nav
              className="btn-top d-flex justify-content-between"
              id="btn-top"
            >
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button
                  className="nav-link btn-1 active"
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-home"
                  type="button"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  Employee
                </button>
                <button
                  className="nav-link btn-1"
                  id="nav-profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-profile"
                  type="button"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  Admin
                </button>
              </div>
            </nav>
          </div>
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <div className="image mt-4 mb-3">
                <img src={Logo} alt="" srcSet="" />
              </div>
              <div className="heading">
                <h4>Login as Employee</h4>
              </div>
              <form className="mt-4">
                {/* <!-- Email input --> */}
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
                      <label className="form-label" htmlFor="form2Example1">
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

                  {/* <!-- Password input --> */}
                  <div className="col-10">
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        autoComplete="off"
                        required
                      />
                      <label className="form-label" htmlFor="form2Example2">
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

                {/* <!-- Submit button --> */}
                <NavLink to="/">
                  <button
                    type="button"
                    className="btn btn-primary btn-block mb-3 px-5 py-1 fw-500 login"
                  >
                    Login
                  </button>
                </NavLink>
                {/* <button
                  type="button"
                  className="btn btn-primary btn-block mb-3 px-5 py-1 fw-500 login"
                >
                  Login
                </button> */}
              </form>
              {/* <!-- <div className="mt-2">
            <p>Don't have account? <a href="#">Register</a></p>
          </div> --> */}
            </div>
            <div
              className="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <div className="image mt-4 mb-3">
                <img src={Logo} alt="" srcSet="" />
              </div>
              <div className="heading">
                <h4>Login as Admin</h4>
              </div>
              <form className="mt-4">
                {/* <!-- Email input --> */}
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
                      <label className="form-label" htmlFor="form2Example1">
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

                  {/* <!-- Password input --> */}
                  <div className="col-10">
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        autoComplete="off"
                        required
                      />
                      <label className="form-label" htmlFor="form2Example2">
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

                {/* <!-- Submit button --> */}

                <button
                  type="button"
                  className="btn btn-primary btn-block mb-3 px-5 py-1 fw-500 login"
                >
                  Login
                </button>
              </form>
              {/* <!-- <div className="mt-2">
              <p>Don't have account? <a href="#">Register</a></p>
            </div> --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
