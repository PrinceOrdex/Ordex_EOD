import React from "react";
import { useState } from "react";
import logo from "./../../Image/Logo.png";
import _image_75 from "./../../Image/75.jpg";

const Header = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      <nav className="navbar navbar-expand-md bg-light">
        <div className="container-fluid">
          <a href="#" className="navbar-brand">
            <img src={logo} alt="" srcSet="" />
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-md-end"
            id="navbarCollapse"
          >
            <form className="d-flex" style={{ width: "40%" }}>
              <div className="input-group">
                <button className="btn btn-secondary">
                  <i className="fas fa-search"></i>
                </button>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
              </div>
            </form>

            {/* <!-- Dropdown button --> */}

            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={_image_75} alt="" srcSet="" className="me-2" />
                Abhay Patel
                <i
                  onClick={handleToggle}
                  className={
                    isActive ? "fas fa-angle-down ms-2" : "fas fa-angle-up ms-2"
                  }
                ></i>
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
