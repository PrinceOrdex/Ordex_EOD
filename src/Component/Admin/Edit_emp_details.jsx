import React, { useEffect } from "react";

import _image_75 from "./../../Image/75.jpg";
import "./../../css/profile.css";
import axios from "axios";
import { useState } from "react";

const Edit_emp_details = (props) => {

  const [empData, setEmpData] = useState({});

  const getEmpData = async () => {

    const res = await axios.get("http://localhost:8000/employee", {
      params: {
        emp_id: props.empId,
      },
    });
    console.log("-----fatch data-----");
    console.log(res.data[0]);
    setEmpData(res.data[0]);

    console.log(">>>>>>empdata")
    console.log(empData);
  };


  let name, value;
  const getData = (e) => {
    name = e.target.name;
    value = e.target.value;

    setEmpData({ ...empData, [name]: value });
  };

  const getFullName = () => {
    return `${empData.emp_fname} ${empData.emp_midname} ${empData.emp_lname}`
  }


  const todayDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    return today;
  }

  const updateEmployee = async (e) => {

    e.preventDefault();

    try {
      const res = await axios.patch("http://localhost:8000/employee", {
        fname: empData.emp_fname,
        mname: empData.emp_midname,
        lname: empData.emp_lname,
        email: empData.email,
        phoneno: empData.phoneno,
        post: empData.post,
        type: empData.emp_type,
        status: empData.status,
        update_at: todayDate(),
        skill_id: empData.emp_skill_id,
        project_id: 4,
        emp_id: empData.emp_id,
      }
      );

      if (res.status == 200) {
        alert("Emp Updated Successfully");
        window.location.reload();
      } else {
        alert("Updation failed")
      }

      console.log(">>>>res status")
      console.log(res.status);
    } catch (err) {
      console.log(err);
    }

  }

  useEffect(() => {
    getEmpData();
  }, []);

  return (
    <>
      <div className="row col-12 mx-0 px-0 text-center border-bottom">
        <h3 className="text-uppercase">edit details</h3>
      </div>
      <div className="row col-12 mx-0 px-0 justify-content-center mt-3">
        <div className="col-12 col-md-4 bg-image">
          <img src={_image_75} alt="" />
          <div className="Empname ms-4 text-center mt-3">
            <h5 style={{ "textTransform": "capitalize" }}>{getFullName()}</h5>
            <p className="mb-0">Employee Profile</p>
          </div>
        </div>
        <div className="col-12 col-md-8 mt-3 mt-md-0">
          <form className="admin-edit">
            <div className="row col-12 mx-0 px-0 mb-3">
              <div className="col-12 col-sm-8">
                <label className="mb-1">Employee Code</label>
                <input
                  type="text"
                  name="emp_code"
                  id="Empcode"
                  value={empData.emp_code}
                  className="form-control"
                  onChange={getData}
                />
              </div>
              <div className="col-12 col-sm-4 mt-3 mt-sm-0">
                <label className="mb-1">Status</label>
                <select
                  className="form-select"
                  name="status"
                  value={empData.status}
                  onChange={getData}
                  defaultValue={empData.status}
                >
                  {/* <option>select option</option> */}
                  <option value="ACTIVE">ACTIVE</option>
                  <option value="INACTIVE">INACTIVE</option>
                </select>
              </div>
            </div>
            <div className="row col-12 mx-0 px-0 mb-3">
              <div className="col-12 col-sm-8">
                <label className="mb-1">Name</label>
                <input
                  type="text"
                  name="emp_fname"
                  id="Empname"
                  value={empData.emp_fname}
                  className="form-control"
                  onChange={getData}
                />
              </div>
              <div className="col-12 col-sm-4 mt-3 mt-sm-0">
                <label className="mb-1">Type</label>
                <select className="form-select" name="emp_type" value={empData.emp_type} defaultValue={empData.emp_type}
                  onChange={getData}>
                  <option value="intern">Intern</option>
                  <option value="employee">Employee</option>
                  <option value="consultant">Consultant</option>
                  <option value="admin">admin</option>

                </select>
              </div>
            </div>
            <div className="row col-12 mx-0 px-0 mb-3">
              <div className="col-12 col-sm-8">
                <label className="mb-1">E-mail Id</label>
                <input
                  type="email"
                  name="email"
                  value={empData.email}
                  onChange={getData}
                  className="form-control"
                  id="inputEmail"
                  required
                />
              </div>
            </div>
            <div className="row col-12 mx-0 px-0 mb-3">
              <div className="col-12 col-sm-8">
                <label className="mb-1">Post</label>
                <input
                  type="text"
                  name="post"
                  id="Emppost"
                  value={empData.post}
                  onChange={getData}
                  className="form-control"
                />
              </div>
            </div>
            <div className="row col-12 mx-0 px-0 mb-3">
              <div className="col-12 col-md-8"></div>
              <div className="col-12 col-md-4 mt-3 mt-sm-0 d-flex justify-content-center justify-content-md-end">
                <button type="submit" className="btn-done text-white" onClick={(e) => { updateEmployee(e) }}>
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
