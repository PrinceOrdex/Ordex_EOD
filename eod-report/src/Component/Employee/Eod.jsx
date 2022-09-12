import React, { useEffect } from "react";
import "./../../css/eod.scss";

import _image_75 from "./../../Image/75.jpg";
import Eod_main from "./Eod_main";

import Header from "./Header";
import Eod_history from "./Eod_history";
import Configuration from "./Configuration";
import Sidebar from "./Sidebar";
import { Navigate } from "react-router-dom";

const Eod = () => {
  // if (!authorized) {
  //   return <Navigate to="/login" />;
  // }
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row flex-nowrap bg-dark pt-3">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 py-3">
            {/* <div className="d-flex flex-column px-3 pt-2 min-vh-100">
              <div className="rounded-circle text-center pb-4">
                <img src={_image_75} alt="hugenerd" />
                <div className="flex flex-column text-center mt-2">
                  <p className="mb-0">Abhay Patel</p>
                  <p style={{ fontSize: "12px" }}>UI/UX Designer</p>
                </div>
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

                <div
                  className="nav flex-column nav-pills mt-4 left-button"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    className="nav-link active"
                    id="v-pills-eod-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-eod"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-eod"
                    aria-selected="true"
                  >
                    EOD
                  </button>
                  <button
                    className="nav-link"
                    id="v-pills-history-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-history"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-history"
                    aria-selected="false"
                  >
                    EOD History
                  </button>
                  <button
                    className="nav-link"
                    id="v-pills-config-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-config"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-config"
                    aria-selected="false"
                  >
                    Configuration
                  </button>
                </div>
              </div>

              <div className="dropdown pb-4">
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
            </div> */}
            <Sidebar />
          </div>
          {/* <Eod_main />; */}
          <div className="col py-3 bg-white px-5">
            <div className="tab-content" id="v-pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="v-pills-eod"
                role="tabpanel"
                aria-labelledby="v-pills-eod-tab"
                tabIndex="0"
              >
                <Eod_main />
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-history"
                role="tabpanel"
                aria-labelledby="v-pills-history-tab"
                tabIndex="0"
              >
                <Eod_history />
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-config"
                role="tabpanel"
                aria-labelledby="v-pills-config-tab"
                tabIndex="0"
              >
                <Configuration />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Eod;
