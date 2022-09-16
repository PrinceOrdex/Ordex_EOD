import React from "react";

import _image_75 from "./../../Image/75.jpg";
import "./../../css/profile.css";

const Edit_emp_details = () => {
  return (
    <>
      <div class="row col-12 mx-0 px-0 text-center border-bottom">
        <h3 class="text-uppercase">edit details</h3>
      </div>
      <div class="row col-12 mx-0 px-0 justify-content-center mt-3">
        <div class="col-12 col-md-4 bg-image">
          <img src={_image_75} alt="" />
          <div class="Empname ms-4 text-center mt-3">
            <h5>Employee Name</h5>
            <p class="mb-0">Employee Profile</p>
          </div>
        </div>
        <div class="col-12 col-md-8 mt-3 mt-md-0">
          <form class="admin-edit">
            <div class="row col-12 mx-0 px-0 mb-3">
              <div class="col-12 col-sm-8">
                <label class="mb-1">Employee Code</label>
                <input
                  type="text"
                  name="empCode"
                  id="Empcode"
                  class="form-control"
                />
              </div>
              <div class="col-12 col-sm-4 mt-3 mt-sm-0">
                <label class="mb-1">Status</label>
                <select class="form-select">
                  <option defaultValue>select option</option>
                  <option value="1">Work in Progress</option>
                  <option value="2">Done</option>
                  <option value="3">Query</option>
                </select>
              </div>
            </div>
            <div class="row col-12 mx-0 px-0 mb-3">
              <div class="col-12 col-sm-8">
                <label class="mb-1">Name</label>
                <input
                  type="text"
                  name="empName"
                  id="Empname"
                  class="form-control"
                />
              </div>
              <div class="col-12 col-sm-4 mt-3 mt-sm-0">
                <label class="mb-1">Type</label>
                <select class="form-select">
                  <option defaultValue>select option</option>
                  <option value="1">Intern</option>
                  <option value="2">Employee</option>
                  <option value="3">Consultant</option>
                </select>
              </div>
            </div>
            <div class="row col-12 mx-0 px-0 mb-3">
              <div class="col-12 col-sm-8">
                <label class="mb-1">E-mail Id</label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail"
                  required
                />
              </div>
            </div>
            <div class="row col-12 mx-0 px-0 mb-3">
              <div class="col-12 col-sm-8">
                <label class="mb-1">Post</label>
                <input
                  type="text"
                  name="empPost"
                  id="Emppost"
                  class="form-control"
                />
              </div>
            </div>
            <div class="row col-12 mx-0 px-0 mb-3">
              <div class="col-12 col-md-8"></div>
              <div class="col-12 col-md-4 mt-3 mt-sm-0 d-flex justify-content-center justify-content-md-end">
                <button type="submit" class="btn-done text-white">
                  Done
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Edit_emp_details;
