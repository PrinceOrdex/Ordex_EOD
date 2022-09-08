import React from "react";
import _image_75 from "./../../Image/75.jpg";
import "./../../css/admin-history.css";

const History = () => {
  return (
    <>
      <div className="row col-12 mx-0 px-0 text-center border-bottom">
        <h3 className="text-uppercase">end of day history report</h3>
      </div>
      <div className="row col-12 mx-0 px-0 justify-content-center">
        <div className="col-12 col-lg-3 bg-img">
          <img src={_image_75} alt="" />
          <div className="Empname text-center mt-3">
            <h5>Employee Name</h5>
            <p className="mb-0">Employee Profile</p>
          </div>
        </div>
        <div className="col-12 col-lg-9">
          <div className="row col-12 mx-0 px-0 d-flex justify-content-center justify-content-md-between">
            <div className="col-12 col-md-8">
              <form className="admin-eod">
                <div className="row col-12 mx-0 px-0 mb-3">
                  <div className="col-12 col-sm-6">
                    <p className="mb-1">Attendence</p>
                    <input
                      type="text"
                      name="emdAttendence"
                      id="empattendence"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row col-12 mx-0 px-0 mb-3">
                  <div className="col-12 col-sm-6">
                    <p className="mb-1">Total Working Time</p>
                    <div className="cs-form">
                      <input
                        type="time"
                        className="form-control"
                        value="hours:minutes"
                      />
                    </div>
                  </div>
                </div>
                <div className="row col-12 mx-0 px-0 mt-5">
                  <div
                    className="col-12 col-sm-6 tel"
                    style={{ position: "relative" }}
                  >
                    <i className="fas fa-phone"></i>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-control"
                      placeholder="Mo. Num."
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    />
                  </div>
                  <div
                    className="col-12 col-sm-6 email"
                    style={{ position: "relative" }}
                  >
                    <i className="fas fa-envelope"></i>
                    <input
                      type="email"
                      id="email"
                      pattern=".+@globex\.com"
                      size="30"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="col-12 col-md-4 mx-0 px-0 d-flex flex-column align-items-center justify-content-center text-center bg-date">
              <div className="col-10 eod-date mb-1">
                <p className="eod-report mb-0 text-white">
                  End of Day Report of Date
                </p>
                <input
                  type="date"
                  id="birthday"
                  name="birthday"
                  className="form-control p-2"
                />
              </div>
              <div className="col-2 mt-1">
                <button type="submit" className="btn-search text-white">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
