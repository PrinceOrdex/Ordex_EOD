import React, { useEffect, useState } from "react";
// import "./custom";
// import "./../../css/style.css";
import { NavLink, useNavigate } from "react-router-dom";
import "./../../css/style1.scss";
import Logo from "./../../Image/Logo.png";
import axios from "axios";
 
import { useContext } from "react";
import { ContextApi } from "./Context";

const Login = () => {
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
    // e.preventDefault();
    // console.log(formData);
    // // ... submit to API or something
    // const user = {
    //   // Email: this.Email
    //   // Headers: { "Content-Type": "application/json" },
    //   Body: {
    //     Email: "shail.dave@ordextechnology.com",
    //     Password: "Ordex@123",
    //     Role: "employee",
    //   },
    // };
    // axios.post(`localhost:8000/login`, user).then((res) => {
    //   console.log(res);
    //   if (res === 200) {
    //   } else if (res === 404) {
    //     updateFormData({
    //       login: !this.login,
    //     });
    //   }
    //   // console.log(res);
    //   console.log(res.data);
    // });

    const obj = {
      Email: formData.Email,
      Password: formData.Password,
      Role: "employee",
    };

    try {
      e.preventDefault();

      const res = await axios.post("http://localhost:8000/login", obj);

      // console.log("res >>>>>>>>>>>. ", res);
      console.log(obj);
      if (res.status == 200) {
        alert("Login Successful");
        console.log("res >>>>>>>>>>>. ", res);
        // SetUser(true);
        haslogin.setUser(true);
        navigate("/eod");

        localStorage.setItem("userData", JSON.stringify(res.data));
        // localStorage.setItem("userData", res.data);
        // localStorage.setItem("empId", res.data.empId);
        // localStorage.removeItem("UserData");
        // console.log("Hello GetItem " + localStorage.getItem("UserData"));
      }
      if (res.status == 401) {
        // SetUser(false);
        // setUser(true);
        haslogin.setUser(false);
        navigate("/login");
      }
      // if (res.status == 200) {
      //
      //   // dispatch({ type: "USER", payload: true });
      //   // navigate('/uhome');
      // } else {
      //   alert("Login Failed");
      // }
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
                <img src={Logo} alt="" srcset="" />
              </div>
              <div className="heading">
                <h4>Login as Employee</h4>
              </div>
              <form className="mt-4">
                {/* <!-- Email input --> */}
                <div className="row px-0 mx-0 d-flex justify-content-center">
                  <div className="col-12 px-0">
                    <div className="floating-label-group">
                      <input
                        type="text"
                        id="username"
                        name="Email"
                        className="form-control"
                        autocomplete="off"
                        onChange={handleChange}
                        required
                      />
                      <label className="floating-label">Email address</label>
                    </div>
                  </div>

                  {/* <!-- Password input --> */}
                  <div className="col-12 px-0">
                    <div className="floating-label-group">
                      <input
                        type="password"
                        id="password"
                        name="Password"
                        className="form-control"
                        autocomplete="off"
                        onChange={handleChange}
                        required
                      />
                      <label className="floating-label">Password</label>
                    </div>
                  </div>
                </div>

                {/* <!-- Submit button --> */}
                <NavLink to="/eod">
                  <button
                    type="button"
                    className="btn btn-primary btn-block mb-3 px-5 py-1 fw-500 login"
                  >
                    Login
                  </button>
                </NavLink>
              </form>
            </div>
            <div
              className="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <div className="image mt-4 mb-3">
                <img src={Logo} alt="" srcset="" />
              </div>
              <div className="heading">
                <h4>Login as Admin</h4>
              </div>
              <form className="mt-4">
                {/* <!-- Email input --> */}
                <div className="row px-0 mx-0 d-flex justify-content-center">
                  <div className="col-12 px-0">
                    <div className="floating-label-group">
                      <input
                        type="text"
                        id="username"
                        name="Email"
                        className="form-control"
                        autocomplete="off"
                        required
                      />
                      <label className="floating-label">Email address</label>
                    </div>
                  </div>

                  {/* <!-- Password input --> */}
                  <div className="col-12 px-0">
                    <div className="floating-label-group">
                      <input
                        type="password"
                        id="password"
                        name="Password"
                        className="form-control"
                        autocomplete="off"
                        required
                      />
                      <label className="floating-label">Password</label>
                    </div>
                  </div>
                </div>

                {/* <!-- Submit button --> */}
                <NavLink to="/admin/main">
                  <button
                    type="button"
                    className="btn btn-primary btn-block mb-3 px-5 py-1 fw-500 login"
                  >
                    Login
                  </button>
                </NavLink>
              </form>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Login;
