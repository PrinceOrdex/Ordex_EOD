import React, { useEffect, useState } from "react";
// import "./custom";
// import "./../../css/style.css";
import { NavLink, useNavigate } from "react-router-dom";
import "./../../css/style.scss";
import Logo from "./../../Image/Logo.png";
import axios from "axios";
import { Route } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import Eod from "../Employee/Eod";
import { useContext } from "react";
import { ContextApi } from "./Context";
import { MenuContext } from "../../App";

const Login = () => {

  const { state, dispatch } = useContext(MenuContext);

  let [role, setRole] = useState("employee");


  const navigate = useNavigate();
  const haslogin = useContext(ContextApi);
  const initialFormData = Object.freeze({
    Email: "",
    Password: "",
    Role: "",
    login: true,
  });

  const [formData, updateFormData] = useState(initialFormData);


  // const [user, SetUser] = useState(false);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (e) => {

    const obj = {
      Email: formData.Email,
      Password: formData.Password,
      Role: role,
    };

    try {
      e.preventDefault();

      const res = await axios.post("http://localhost:8000/login", obj);

      if (res.status == 200) {

        localStorage.setItem("userData", JSON.stringify(res.data));
        dispatch({ type: "LOGIN", payload: true });

        navigate("/eod");
      }
      if (res.status == 401) {

        navigate("/login");
      }
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  return (
    <>
      {/* <contextApi.Provider value={haslogin}></contextApi.Provider> */}
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
                  onClick={() => { setRole("employee") }}
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
                  onClick={() => { setRole("admin") }}
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
                  {/* <div className="col-10">
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="username"
                        name="Email"
                        className="form-control"
                        autoComplete="off"
                        required
                        onChange={handleChange}
                      />
                      <label className="form-label" htmlFor="form2Example1">
                        Email address
                      </label>
                    </div>
                  </div> */}

                  <div className="col-10 px-0">
                    <div className="floating-label-group">
                      <input type="text" id="username" name="Email" className="form-control" autocomplete="off" required onChange={handleChange}/>
                      <label className="floating-label">Email address</label>
                    </div>
                  </div>

                  {/* <!-- Password input --> */}
                  {/* <div className="col-10">
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="password"
                        name="Password"
                        className="form-control"
                        autoComplete="off"
                        required
                        onChange={handleChange}
                      />
                      <label className="form-label" htmlFor="form2Example2">
                        Password
                      </label>
                    </div>
                  </div> */}

                  <div className="col-10 px-0">
                    <div className="floating-label-group">
                      <input
                      type="password"
                      id="password"
                      name="Password"
                      className="form-control"
                      autocomplete="off"
                      required
                      onChange={handleChange}
                      />
                      <label className="floating-label">Password</label>
                    </div>
                  </div>
                </div>

                {/* <!-- Submit button --> */}

                <NavLink to="/">
                  <button
                    type="button"
                    className="btn btn-primary btn-block mb-3 px-5 py-1 fw-500 login"
                    onClick={handleSubmit}
                  >
                    Login
                  </button>
                </NavLink>

              </form>
              <div className="mt-2">
                <a href="#" className="text-center d-flex justify-content-center" style={{textDecoration: "none",fontWeight: '500', color: '#767171'}}>Forgot Password ?</a>
              </div>

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
                  {/* <div className="col-10">
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="username"
                        name="Email"
                        className="form-control"
                        autoComplete="off"
                        required
                        onChange={handleChange}
                      />
                      <label className="form-label" htmlFor="form2Example1">
                        Email address
                      </label>
                    </div>
                  </div> */}
                  <div className="col-10 px-0">
                    <div className="floating-label-group">
                      <input type="text" id="username" className="form-control" name="Email" autocomplete="off" required onChange={handleChange}/>
                      <label className="floating-label">Email address</label>
                    </div>
                  </div>

                  {/* <!-- Password input --> */}
                  {/* <div className="col-10">
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="password"
                        name="Password"
                        className="form-control"
                        autoComplete="off"
                        required
                        onChange={handleChange}
                      />
                      <label className="form-label" htmlFor="form2Example2">
                        Password
                      </label>
                    </div>
                  </div> */}
                  <div className="col-10 px-0">
                    <div className="floating-label-group">
                      <input
                      type="password"
                      id="password"
                      name="Password"
                      className="form-control"
                      autocomplete="off"
                      required
                      onChange={handleChange}
                      />
                          <label className="floating-label ">Password</label>
                    </div>
                  </div>
                </div>

                {/* <!-- Submit button --> */}
                <NavLink to="/admin/main">
                  <button
                    type="button"
                    className="btn btn-primary btn-block mb-3 px-5 py-1 fw-500 login"
                    onClick={handleSubmit}
                  >
                    Login
                  </button>
                </NavLink>
              </form>
              <div className="mt-2">
                <a href="#" className="text-center d-flex justify-content-center" style={{textDecoration: "none",fontWeight: '500', color: '#767171'}}>Forgot Password ?</a>
              </div>
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
