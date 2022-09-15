import React from "react";
// import "./../../css/attendence.css";
import "./../../css/attendence.scss";

const Attendance = () => {
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
