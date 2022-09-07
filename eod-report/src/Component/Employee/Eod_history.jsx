import React from "react";
import "./../../css/history.css";

const Eod_history = () => {
  return (
    <>
      <div className="row col-12 mx-0 px-0 text-center border-bottom">
        <h3 className="text-uppercase">end of day report</h3>
      </div>
      <div className="mt-3 d-flex justify-content-end">
        <nav className="date-btn d-flex justify-content-between" id="btn-top">
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
              Date
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
              Date Range
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
          <div className="row col-12 mx-0 px-0 my-3 text-center">
            <div className="col-10 col-sm-8 col-md-5 d-flex align-items-end">
              <div className="col-10 me-2 date-1">
                <p className="date-report mb-0 text-white">
                  End of Day Report of Date
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
        </div>
        <div
          className="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        >
          <div className="row col-12 mx-0 px-0 my-3 text-center align-items-end">
            <div className="col-6 col-sm-5 col-md-4  d-flex">
              <div className="col-12 date-1">
                <p className="date-report mb-0 text-white">Starting Date</p>
                <input
                  type="date"
                  id="birthday"
                  name="birthday"
                  className="form-control p-2"
                />
              </div>
            </div>
            <div className="col-6 col-sm-5 col-md-4  d-flex">
              <div className="col-12 date-1">
                <p className="date-report mb-0 text-white">End Date</p>
                <input type="date" className="form-control p-2" />
              </div>
            </div>
            <div className="col-2 mt-3 mt-sm-0 d-flex justify-content-start">
              <button type="submit" className="btn-search text-white">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Eod_history;
