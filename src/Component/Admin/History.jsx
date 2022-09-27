import React from "react";
import _image_75 from "./../../Image/75.jpg";
import "./../../css/admin-history.css";
import edit_emp from "./../../Image/EditIcon.svg";
import Header from "./Header";
import Sidebar from "./Sidebar";

const History = () => {
  return (
    <>
      <Header />
      <div className="fixed-left">
        <div id="wrapper">
          <Sidebar />
          <div className="content-page">
            <div className="content">
              {/* <Header /> */}
              <div className="page-content-wrapper">
                <div className="container-fluid">
                  <div className="row col-12 px-0 mx-0">
                    <div className="col-sm-12 px-0">
                      <div className="page-title-box">
                        <div className="row flex-nowrap">
                          <div className="col py-2 h-100">
                            <div className="row col-12 mx-0 px-0 text-center border-bottom">
                              <h3 className="text-uppercase">end of day report</h3>
                            </div>
                          </div>
                        </div>
                        <div className="row col-12 mx-0 px-0 justify-content-center border-bottom pb-2">
                          <div className="col-12 col-sm-6 col-lg-4 fs-5 d-flex align-items-center justify-content-center">
                            <i className="fas fa-user"></i>
                            <p className="name mb-0 ms-1">Nehil Vijaybhai Bhakta</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4 fs-5 mt-2 mt-sm-0 d-flex align-items-center justify-content-center">
                            <i className="fas fa-phone"></i>
                            <p className="phone mb-0 ms-1"><span>+91</span> 9987956703</p>
                          </div>
                          <div className="col-12 col-lg-4 fs-5 d-flex align-items-center justify-content-center mt-2 mt-md-0">
                            <i className="fas fa-envelope"></i>
                            <p className="email mb-0 ms-1">Nehilv2002@gmail.com</p>
                          </div>
                        </div>
                        <div className="mt-3 d-flex justify-content-center justify-content-sm-end">
                          <nav className="date-btn d-flex justify-content-between" id="btn-top">
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                              <button className="nav-link btn-1 active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Date</button>
                              <button className="nav-link btn-1" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Date Range</button>
                            </div>
                          </nav>
                        </div>
                        <div className="tab-content" id="nav-tabContent">
                          <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div className="row col-12 mx-0 px-0 my-3 text-center">
                              <div className="col-10 col-sm-8 col-md-5 d-flex align-items-end">
                                <div className="col-10 me-2 date-1">
                                  <p className="date-report mb-0 text-white">End of Day Report of Date</p>
                                  <input type="date" id="birthday" name="birthday" className="form-control p-2" />
                                </div>
                                <div className="col-2">
                                  <button type="submit" className="btn-search text-white">Search</button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <div className="row col-12 mx-0 px-0 my-3 text-center justify-content-center justify-content-sm-start align-items-end">
                              <div className="col-8 col-sm-5 col-md-4">
                                <div className="col-12 date-1">
                                  <p className="date-report mb-0 text-white">Starting Date</p>
                                  <input type="date" id="birthday" name="birthday" className="form-control p-2" />
                                </div>
                              </div>
                              <div className="col-8 col-sm-5 col-md-4 mt-3 mt-sm-0">
                                <div className="col-12 date-1">
                                  <p className="date-report mb-0 text-white">End Date</p>
                                  <input type="date" className="form-control p-2" />
                                </div>
                              </div>
                              <div className="col-12 col-sm-2 mt-3 mt-sm-0 d-flex justify-content-center justify-content-sm-start">
                                <button type="submit" className="btn-search text-white">Search</button>
                              </div>
                            </div>

                          </div>


                          <div className="table-responsive" style={{ width: "100%" }}>
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
                                    Name
                                  </th>
                                  <th scope="col" className="border-top">
                                    Project
                                  </th>
                                  <th scope="col" className="border-top">
                                    Task
                                  </th>
                                  <th scope="col" className="border-top">
                                    Description
                                  </th>
                                  <th scope="col" className="border-top">
                                    Status
                                  </th>
                                  <th scope="col" className="border-top" style={{ borderRight: "1px solid #dee2e6" }}>
                                    T.W.T
                                  </th>
                                  {/* <th className="border-0" ></th> */}
                                </tr>
                              </thead>
                              <tbody className="">
                                <tr>
                                  <td style={{ borderLeft: "1px solid #dee2e6" }}>a</td>
                                  <td>b</td>
                                  <td>c</td>
                                  <td>d</td>
                                  <td>e</td>
                                  <td>f</td>
                                  <td>g</td>
                                  <td style={{ borderRight: "1px solid #dee2e6" }}>f</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container-fluid"> */}


      {/* <div className="container-fluid"> */}
      {/* <div className="row flex-nowrap bg-dark pt-3">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 py-3">
            <Sidebar />
          </div>
        </div> */}


      {/* </div> */}
    </>
  );
};

export default History;
