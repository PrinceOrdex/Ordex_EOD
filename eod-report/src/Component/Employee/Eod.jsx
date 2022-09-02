import React from "react";
import "./../../css/eod.css";
import { NavLink } from "react-router-dom";

import _image_75 from "./../../Image/75.jpg";
import Eod_main from "./Eod_main";

import Header from "./Header";
import { useState } from "react";

const Eod = () => {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row flex-nowrap bg-dark pt-3">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 py-3">
            <div className="d-flex flex-column px-3 pt-2 text-white min-vh-100">
              <div className="rounded-circle text-center pb-4">
                <img src={_image_75} alt="hugenerd" />
                <ul
                  className="dropdown-menu dropdown-menu-dark text-small shadow"
                  aria-labelledby="dropdownUser1"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      New project...
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
              <a
                href="#"
                className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
              >
                <span className="fs-5 d-none d-sm-inline">Menu</span>
              </a>
              <ul
                className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                <li className="nav-item">
                  {/* <NavLink to="/" className="nav-link align-middle px-0">
                    <span className="ms-1 d-none d-sm-inline">EOD</span>
                  </NavLink> */}

                  <a className="nav-link align-middle px-0">
                    <span className="ms-1 d-none d-sm-inline">EOD</span>
                  </a>
                  {/* <i className="fs-4 bi-house"></i> */}
                </li>

                <li>
                  <a href="#" className="nav-link px-0 align-middle">
                    {/* <i className="fs-4 bi-table"></i> */}
                    <span className="ms-1 d-none d-sm-inline">EOD History</span>
                  </a>
                </li>

                <li>
                  <a href="#" className="nav-link px-0 align-middle">
                    {/* <i className="fs-4 bi-people"></i> */}
                    <span className="ms-1 d-none d-sm-inline">
                      Configuration
                    </span>
                  </a>
                </li>
              </ul>
              <hr />
              <div className="dropdown pb-4">
                <a
                  href="#"
                  className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                  id="dropdownUser1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://github.com/mdo.png"
                    alt="hugenerd"
                    width="30"
                    height="30"
                    className="rounded-circle"
                  />
                  <span className="d-none d-sm-inline mx-1">loser</span>
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-dark text-small shadow"
                  aria-labelledby="dropdownUser1"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      New project...
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Eod_main />;
        </div>
      </div>
    </>
  );
};

export default Eod;
