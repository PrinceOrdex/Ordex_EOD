import React from "react";
import "./../../css/history.css";

const Eod_history = () => {
  return (
    <>
      <div class="row col-12 mx-0 px-0 text-center border-bottom">
        <h3>END OF DAY REPORT</h3>
      </div>
      <div class="row col-12 mx-0 px-0 my-3 align-items-center justify-content-between text-center">
        <div class="col-6 d-flex align-items-end">
          <div class="col-10 me-2 date-history">
            <p class="date-report mb-0 text-white">End of Day Report of Date</p>
            <input
              type="date"
              id="birthday"
              name="birthday"
              class="form-control p-2"
            />
          </div>
          <div class="col-2">
            <button type="submit" class="btn-search text-white">
              Search
            </button>
          </div>
        </div>
        <div class="col-6">
          <div class="col-12 d-flex justify-content-end">
            <nav class="date-btn d-flex justify-content-between" id="date-btn">
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button
                  class="nav-link btn-1 active"
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
                  class="nav-link btn-1"
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
        </div>
      </div>
    </>
  );
};

export default Eod_history;
