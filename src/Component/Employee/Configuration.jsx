import React from "react";

import "./../../css/configuration.scss";

const Configuration = () => {
  return (
    <>
      <div className="row col-12 mx-0 px-0 text-center border-bottom">
        <h3 className="text-uppercase">configuration</h3>
      </div>

      <form className="mt-5 pt-5">
        <div className="row col-12 mx-0 px-0 mt-5 mb-3 align-items-center justify-content-center mentor-id">
          <label htmlFor="inputEmail" className="col-auto form-label mb-0">
            Mentor1 E-mail Id
          </label>
          <div className="col-4 d-flex px-0" style={{ position: "relative" }}>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              placeholder="Email"
              required
            />
            <i className="fas fa-pen icon"></i>
          </div>
        </div>
        <div className="row col-12 mx-0 px-0 mb-3 align-items-center justify-content-center mentor-id">
          <label htmlFor="inputEmail" className="col-auto form-label mb-0">
            Mentor2 E-mail Id
          </label>
          <div className="col-4 d-flex px-0" style={{ position: "relative" }}>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              placeholder="Email"
              required
            />
            <i className="fas fa-pen icon"></i>
          </div>
        </div>
        <div className="row col-12 mx-0 px-0 mb-3 align-items-center justify-content-center mentor-id">
          <label htmlFor="inputEmail" className="col-auto form-label mb-0 px-4">
            Other E-mail Id
          </label>
          <div className="col-4 d-flex px-0" style={{ position: "relative" }}>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              placeholder="Email"
              required
            />
            <i className="fas fa-pen icon"></i>
          </div>
        </div>
        <div className="row col-12 mx-0 px-0 mb-3 align-items-center justify-content-center mentor-id">
          <div className="col-5 px-0 ms-5 d-flex justify-content-end">
            <button type="submit" className="btn-done text-white">
              Done
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Configuration;
