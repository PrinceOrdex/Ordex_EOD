import { React, useEffect, useState } from "react";
import Edit_emp_details from "./Edit_emp_details";
import edit_emp from "./../../Image/EditIcon.svg";
import axios from "axios";

const Employee_list = () => {
  const [empData, setEmpData] = useState([]);

  const getEmpData = async () => {
    try {
      let res = await axios.get("http://localhost:8000/employee");
      // console.log(res.data[0].email);
      setEmpData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlesubmit = () => {};

  useEffect(() => {
    getEmpData();
  }, []);

  return (
    <>
      <div class="row col-12 mx-0 px-0 text-center border-bottom">
        <h3 class="text-uppercase">edit details</h3>
      </div>
      <div class="row col-12 mx-0 px-0 justify-content-center mt-3">
        <div className="table-responsive" style={{ width: "80%" }}>
          <table className="table border-end-0">
            <thead>
              <tr className="border-start">
                <th scope="col" className="border-top">
                  Sr No.
                </th>
                <th scope="col" className="border-top">
                  Emp. code
                </th>
                <th scope="col" className="border-top">
                  Name
                </th>
                <th scope="col" className="border-top">
                  E-mail
                </th>
                <th scope="col" className="border-top">
                  Type
                </th>
                <th
                  scope="col"
                  className="border-top"
                  style={{ borderRight: "1px solid #dee2e6" }}
                >
                  Status
                </th>
                <th className="border-0"></th>
              </tr>
            </thead>
            <tbody className="">
              {empData.map((data) => {
                return (
                  <>
                    <tr className="border-start">
                      <th scope="row">{data.emp_id}</th>
                      <td>{data.emp_code}</td>
                      <td>{data.emp_fname + " " + data.emp_lname}</td>
                      <td>{data.email}</td>

                      <td>{data.emp_type}</td>

                      <td
                        style={{ borderRight: "1px solid #dee2e6" }}
                        className="text-center"
                      >
                        {data.status == "ACTIVE" ? (
                          <i
                            className="fa-solid fa-circle"
                            style={{ color: "green", fontSize: "11px" }}
                            onClick={handlesubmit}
                          ></i>
                        ) : (
                          <i
                            className="fa-solid fa-circle"
                            style={{ color: "#fcba03", fontSize: "11px" }}
                          ></i>
                        )}
                      </td>
                      <td className="border-0">
                        <img src={edit_emp} alt="" width={20} height={20} />
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Employee_list;
