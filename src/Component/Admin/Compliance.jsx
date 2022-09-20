import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import edit_emp from "./../../Image/EditIcon.svg";

const Compliance = () => {
  const [complaince, setComplaince] = useState([]);
  const [complainceDateRange, setComplainceDateRange] = useState([]);
  let check = false;
  const getTable = () => {
    
  }
  const getEODComplaince = async () => {
    try {
      let res = await axios.get("http://localhost:8000/eod/compliance", {
        params: {
          eod_date: "2022/09/11",
        },
      });
      setComplaince(res.data);
      console.log("-----  All Complaince Data ------");
      console.log(complaince);
    } catch (error) {
      console.log(error);
    }
  };

  const getEODComplianceDateRange = async () => {
    try {
      let res = await axios.get("http://localhost:8000/eod/daterange", {
        params: {
          start_date: "2022/09/12",
          end_date: "2022/09/20",
        },
      });
      setComplainceDateRange(res.data);
      console.log("-----All Complaince by date range------");
      console.log(complainceDateRange);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEODComplaince();
    getEODComplianceDateRange();
  }, []);

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
              className="nav-link btn-2"
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
            <div className="col-12 col-sm-6 col-md-5 col-lg-4 d-flex">
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
            <div className="col-12 col-sm-6 col-md-5 col-lg-4 mt-3 mt-sm-0 d-flex">
              <div className="col-12 date-1">
                <p className="date-report mb-0 text-white">End Date</p>
                <input type="date" className="form-control p-2" />
              </div>
            </div>
            <div className="col-2 mt-3 mt-md-0 d-flex justify-content-start">
              <button type="submit" className="btn-search text-white">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="table-responsive mx-auto" style={{ width: "80%" }}>
        <table className="table border-end-0">
          <thead>
            <tr className="border-start">
              <th scope="col" className="border-top">
                Sr No.
              </th>
              <th scope="col" className="border-top">
                Date
              </th>
              <th scope="col" className="border-top">
                Emp.Code
              </th>
              <th scope="col" className="border-top">
                Name
              </th>
              <th scope="col" className="border-top">
                Email
              </th>

              <th
                scope="col"
                className="border-top"
                style={{ borderRight: "1px solid #dee2e6" }}
              >
                Type
              </th>
              <th className="border-0"></th>
            </tr>
          </thead>
          <tbody className="">
            {complaince.map((data, index) => {
              return (
                <>
                  <tr className="border-start">
                    <th scope="row">{index + 1}</th>
                    <td>{data.eod_date}</td>
                    <td>{data.emp_code}</td>
                    <td>{data.emp_fname + " " + data.emp_lname}</td>

                    <td>{data.email}</td>
                    <td style={{ borderRight: "1px solid #dee2e6" }}>
                      {data.emp_type}
                    </td>

                    <td className="border-0">
                      <img
                        src={edit_emp}
                        alt=""
                        width={20}
                        height={20}
                        // onClick={() => {
                        //   editEmployee(data.emp_id);
                        // }}
                      />
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Compliance;
