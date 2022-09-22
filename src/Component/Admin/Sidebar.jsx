import React from "react";
import _image_75 from "./../../Image/75.jpg";

const Sidebar = () => {
  return (
    <>
      <div className="d-flex flex-column px-3 pt-2 min-vh-100" id="sidebar">
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
              id="v-pills-emp-list-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-emp-list"
              type="button"
              role="tab"
              aria-controls="v-pills-emp-list"
              aria-selected="true"
            >
              Employees's List
            </button>
            <button
              className="nav-link"
              id="v-pills-attendance-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-attendance"
              type="button"
              role="tab"
              aria-controls="v-pills-attendance"
              aria-selected="false"
            >
              Attendance Report
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
              id="v-pills-compliance-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-compliance"
              type="button"
              role="tab"
              aria-controls="v-pills-compliance"
              aria-selected="false"
            >
              EOD Compliance
            </button>
            {/* <button
              className="nav-link"
              id="v-pills-edit-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-edit"
              type="button"
              role="tab"
              aria-controls="v-pills-edit"
              aria-selected="false"
            >
              Edit Profile
            </button> */}
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
      </div>
    </>
  );
};

export default Sidebar;
