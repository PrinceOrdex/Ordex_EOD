import React from "react";
// import "./../../css/attendence.css";
import { useState, useEffect } from "react";
import "./../../css/attendence.scss";
import axios from "axios";
const Attendance = () => {
  const [present, setPresent] = useState([]);
  const [absent, setAbsent] = useState([]);
  const [allAttendance, setAllAttendance] = useState([]);

  const getAllAttandace = async () => {
    try {
      let res = await axios.get("http://localhost:8000/employee/attendance", {
        params: {
          eod_date: '2022/09/13',
        },
      });
      setAllAttendance(res.data);
      console.log("----- All Attandance-Data ------");
      console.log(allAttendance);
    } catch (error) {
      console.log(error);
    }
  };
  const getPresent = async () => {
    try {
      let res = await axios.get(
        "http://localhost:8000/employee/attendance/present",
        {
          params: {
            eod_date: "2022/09/13",
          },
        }
      );
      setPresent(res.data);
      console.log("----- Present-Data  ------");
      console.log(present);
    } catch (error) {
      console.log(error);
    }
  };
  const getAbsent = async () => {
    try {
      let res = await axios.get(
        "http://localhost:8000/employee/attendance/absent"
      );
      setAbsent(res.data);
      console.log("----- Absent-Data ----");
      console.log(absent);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPresent();
    getAbsent();
    getAllAttandace();
  }, []);
  return (
    <>
      <div className="row col-12 mx-0 px-0 text-center border-bottom">
        <h3 className="text-uppercase">employee's attendence report</h3>
      </div>

      <div className="row col-12 mx-0 px-0 my-3 justify-content-center text-center">
        <div className="col-10 col-sm-8 col-md-4 d-flex align-items-end">
          <div className="col-10 me-2 attendence-date">
            <p className="attendence-report mb-0 text-white">
              Attendence Report of Date
            </p>
            <input
              type="date"
              id="birthday"
              name="birthday"
              className="form-control p-2"
            />
          </div>
          <div className="col-2">
            <button type="submit" className="btn-search text-white">
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Attendance;
