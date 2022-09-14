import { React, useEffect, useState } from "react";
import axios from "axios";

const Eod_main = () => {
  const [userData, setData] = useState({
    createdate: "",
    project: "",
    task: "",
    time: "",
    status: "",
    description: "",
  });

  const [temp, setTemp] = useState([]);
  const [editindex, setEditIndex] = useState(null);
  const [isedit, setIsEdit] = useState(true);
  const [dataNum, setDataNum] = useState(0);
  const [hasData, setHasData] = useState(false);

  const [options, setOptions] = useState([]);
  const [tasks, getTasks] = useState("");

  const getAllTasks = () => {
    axios
      .get("http://localhost:8000/eod/task", {
        params: {
          empid: 1,
          eoddate: "2022-09-14",
        },
      })
      .then((response) => {
        const allTasks = response.data;
        // getTasks(allTasks);
        console.log("----fatched data----");
        console.log(allTasks);
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    async function fetchProject() {
      // Fetch data
      const { data } = await axios.get("http://localhost:8000/eod/projects", {
        params: {
          empid: 1,
        },
      });
      const results = [];
      // Store results in the results array
      data.forEach((value) => {
        results.push({
          key: value.Project_name,
          value: value.empid,
        });
      });
      // Update the options state
      setOptions([{ key: "Select Project", value: "" }, ...results]);
    }

    //   async function fetchTask ()
    //   {
    //     const { taskData } = await axios.get("http://localhost:8000/eod/task")
    //     const task_results = [];
    //     // Store results in the results array
    //     taskData.forEach((value) => {
    //       task_results.push({
    //         key: value.Project_name,
    //         value: value.empid,
    //       });
    //     });
    //     // Update the options state
    //     setOptions([{ key: "Select Project", value: "" }, ...task_results]);
    // }
    // Trigger the fetch
    fetchProject();
  }, []);

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const currentDate = new Date();

      const currentDayOfMonth = String(currentDate.getDate()).padStart(2, "0");
      const currentMonth = String(currentDate.getMonth() + 1).padStart(2, "0");
      const currentYear = currentDate.getFullYear();

      const dateString =
        currentYear + "-" + currentMonth + "-" + currentDayOfMonth;

      let userdta = JSON.parse(localStorage.getItem("userData"));

      var date = true;
      if (userData.createdate == "") {
        alert("EOD Date is Empty, plz select");
        date = false;
      }
      if (date) {
        await axios.post("http://localhost:8000/eod", {
          empId: userdta.empId,
          eoddate: userData.createdate,
          createdAt: dateString,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  let name, value;
  const getInput = (e) => {
    name = e.target.name;
    value = e.target.value.trim();
    setData({ ...userData, [name]: value });

    console.log(userData);
  };

  const getTableData = (e) => {
    if (
      userData.project == "" ||
      userData.task === "" ||
      userData.time === "" ||
      userData.status === "" ||
      userData.description === ""
    ) {
      alert("Plz Fill Data first");
    } else {
      const all_data = { id: new Date().getTime().toString(), name: userData };

      setTemp([...temp, all_data]);
      setData({
        project: "",
        task: "",
        time: "",
        status: "",
        description: "",
      });
      setDataNum(dataNum + 1);
      setHasData(true);
    }

    const eodd = {
      project: userData.project,
      task: userData.task,
      time: userData.time,
      status: userData.status,
      description: userData.description,
    };

    e.preventDefault();

    axios
      .post("http://localhost:8000/eod/task", {
        project: userData.project,
        task: userData.task,
        time: userData.time,
        status: userData.status,
        description: userData.description,
      })
      .then((response) => {
        console.log(response.data);
        console.log(eodd);
        if (response.status === 404) {
          alert("EOD Task insertion failed");
          console.log(response);
        } else if (response.status === 200) {
          alert("Task Added Successfully");
          console.log(eodd);
        } else if (response.status === 500) {
          alert("Insertion Failed");
        } else {
          alert("Data not found");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const edititem = (ind) => {
    const item_to_edit = temp.find((curElem) => {
      return curElem.id == ind;
    });
    console.log(item_to_edit);
    setData(item_to_edit.name);
    setEditIndex(ind);
    setIsEdit(false);
  };

  const deleteitem = (ind) => {
    const updated_item = temp.filter((curElem, index) => {
      return ind != index;
    });
    setTemp(updated_item);
    setDataNum(dataNum - 1);
    setData({
      project: "",
      task: "",
      time: "",
      status: "",
      description: "",
    });
  };

  const ClearAllData = () => {
    setTemp([]);
    setEditIndex(null);
    setIsEdit(true);
    setDataNum(0);
    setHasData(false);
  };
  const demo = () => {
    getAllTasks();
  };
  return (
    <>
      {/* <div className="col py-3 bg-white h-100 mb-2"> */}
      <div className="row col-12 mx-0 px-0 text-center border-bottom">
        <h3>END OF DAY REPORT</h3>
      </div>
      <div className="row col-12 mx-0 px-0 my-3 text-center justify-content-center">
        <form className="col-4 d-flex date-1">
          <label className="date p-2" htmlFor="date">
            Date
          </label>
          <input
            type="date"
            id="birthday"
            name="createdate"
            className="form-control p-2"
            onChange={getInput}
          />
        </form>
      </div>
      <div className="row mx-0 px-0 justify-content-center">
        <div className="col-10">
          <p className="mb-1">Project</p>
          <div className="project col-6">
            <select
              name="project"
              id="Project"
              // value={userData.project}
              className="form-select project col-6"
              // onChange={getInput}
              required
            >
              {options.map((option) => {
                return (
                  <option key={option.value} value={option.value}>
                    {option.key}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
      <div className="row mx-0 px-0 mt-3 justify-content-center">
        <div className="col-10 d-lg-flex justify-content-center">
          <div className="col-12 col-lg-6">
            <p className="mb-1">Task</p>
            <div className="project col-12">
              <input
                className="form-control"
                type="text"
                name="task"
                value={userData.task}
                id="Project"
                placeholder="Project task here"
                onChange={getInput}
                required
              />
            </div>
          </div>
          <div className="col-12 col-lg-6 d-flex mt-3 mt-lg-0">
            <div className="col-6 ms-0 ms-lg-3 me-3">
              <p className="mb-1">Total Working Time</p>
              <div className="cs-form">
                <input
                  type="time"
                  name="time"
                  value={userData.time}
                  className="form-control"
                  placeholder="Time"
                  onChange={getInput}
                  required
                  // step="1"
                />
              </div>
            </div>
            <div className="col-6">
              <p className="mb-1">Status</p>
              <select
                className="form-select"
                name="status"
                value={userData.status}
                onChange={getInput}
                required
              >
                <option defaultValue>select option</option>
                <option value="Task in Progress">Task in Progress</option>
                <option value="Task Completed">Task Completed</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="row mx-0 px-0 mt-3 justify-content-center">
        <div className="col-10">
          <p className="mb-1">Description</p>
          <div className="description">
            <textarea
              className="form-control"
              name="description"
              value={userData.description}
              id="exampleFormControlTextarea1"
              placeholder="Description here"
              onChange={getInput}
              required
            ></textarea>
          </div>
        </div>
      </div>

      <div className="row mx-0 px-0 my-3 ms-5 justify-content-center">
        <div className="col-10 d-flex ms-5 justify-content-end align-items-center added">
          <i className={hasData ? "fas fa-check me-2" : "d-none"}></i>
          <p className={hasData ? "mb-0" : "d-none"}>
            Task {dataNum} Added Successfully
          </p>
          <button className="px-4 add-button ms-3" onClick={demo}>
            Add
          </button>
        </div>
      </div>
      <hr className="mt-4" />

      <div className="container">
        <table className="table border">
          <thead>
            <tr>
              <th scope="col">Line</th>
              <th scope="col">Project</th>
              <th scope="col">Task</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
              <th scope="col">T.W.T</th>
            </tr>
          </thead>
          <tbody className="position-relative">
            {temp.map((data, index) => {
              return (
                <>
                  <div className="position-absolute table-edit" key={index}>
                    <i
                      className="fa-regular fa-pen-to-square"
                      onClick={() => edititem(data.id)}
                    ></i>
                  </div>
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{data.name.project}</td>
                    <td>{data.name.task}</td>
                    <td>{data.name.description}</td>

                    <td>
                      {data.name.status == "Task Completed" ? (
                        <i
                          className="fa-solid fa-calendar-check"
                          style={{ color: "green" }}
                        ></i>
                      ) : (
                        <i
                          className="fa-solid fa-hourglass-half"
                          style={{ color: "orange" }}
                        ></i>
                      )}
                    </td>

                    <td>{data.name.time}</td>
                  </tr>
                  <div className="position-relative">
                    <div className="position-absolute delete-icon">
                      <i
                        className="fa-solid fa-trash"
                        onClick={() => deleteitem(index)}
                      ></i>
                    </div>
                  </div>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="row flex-nowrap bg-dark">
        <div className="col-10 ms-auto d-flex justify-content-between p-3 bottom-background">
          <div>
            <button className="btn clear-btn px-3" onClick={ClearAllData}>
              Clear All
            </button>
          </div>
          <div>
            <button
              className="btn submit-data-btn px-5 "
              onClick={handlesubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Eod_main;

// import { React, useState, useEffect } from "react";
// import axios from "axios";

// const Eod_main = () => {
//   const [userData, setData] = useState({
//     project: "",
//     task: "",
//     time: "",
//     status: "",
//     description: "",
//   });

//   const [temp, setTemp] = useState([]);
//   const [editindex, setEditIndex] = useState(null);
//   const [isedit, setIsEdit] = useState(true);
//   const [dataNum, setDataNum] = useState(0);
//   const [hasData, setHasData] = useState(false);

//   useEffect(() => {
//     let res = fetch(`http://localhost:8000/eod/projects`, {
//       method: "GET",
//       mode: "cors",
//       body: {
//         empid: "1",
//       },
//     });
//     if (res) {
//       console.log(res.data);
//     }
//   }, []);

//   const handlesubmit = async (e) => {
//     // let res = await fetch("http://localhost:8000/eod", {
//     // //       // Enter your IP address here
//     //        method:"GET",
//     //       mode: "cors",
//     //       // body: JSON.stringify(userData.task), // body data type must match "Content-Type" header
//     //     });

//     //   // Send data to the backend via POST
//     //     // let res = await fetch("http://localhost:8000/eod/projects", {
//     //       // Enter your IP address here
//     //       //  method:"GET",
//     //       // method: "POST",
//     //       // mode: "cors",
//     //       // body:userData.task
//     //       // body: JSON.stringify(obj), // body data type must match "Content-Type" header
//     //     // });
//     //     // if (res) console.log(res);
//     //   };
//     // try {
//     //   e.preventDefault();
//     //   // console.log(task);
//     //   const res = axios.post("http://localhost:8000/eod", {
//     //     project: userData.project,
//     //     task: userData.task,
//     //     time: userData.time,
//     //     status: userData.status,
//     //     description: userData.description,
//     //   });
//     //   console.log(res.data);
//     //   if (res.status === 200) {
//     //     alert(res);
//     //     alert("Data inserted Successfully");
//     //     console.log(res);
//     //   } else if (res.status === 500) {
//     //     alert("Insertion Failed");
//     //   } else {
//     //     alert("Data not found");
//     //   }
//     // } catch (err) {
//     //   console.log(err);
//     //   console.log(err.response.data.error);
//     //   throw err;
//     // }

//     const eodd = {
//       project: userData.project,
//       task: userData.task,
//       time: userData.time,
//       status: userData.status,
//       description: userData.description,
//     };

//     e.preventDefault();

//     axios
//       .post("http://localhost:8000/eod", {
//         project: userData.project,
//         task: userData.task,
//         time: userData.time,
//         status: userData.status,
//         description: userData.description,
//       })
//       .then((response) => {
//         console.log(response.data);
//         console.log(eodd);
//         if (eodd == null && response.status === 200) {
//           alert("pls fill the data");
//           console.log(response);
//         } else if (response.status === 200 && eodd !== null) {
//           alert("Data inserted Successfully");
//           console.log(eodd);
//         } else if (response.status === 500) {
//           alert("Insertion Failed");
//         } else {
//           alert("Data not found");
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   let name, value;
//   const getInput = (e) => {
//     name = e.target.name;
//     value = e.target.value;

//     setData({ ...userData, [name]: value });
//   };

//   const getTableData = (e) => {
//     if (
//       userData.project === "" ||
//       userData.task === "" ||
//       userData.time === "" ||
//       userData.status === "" ||
//       userData.description === ""
//     ) {
//       alert("Plz Fill Data first");
//     } else if (!isedit) {
//       setTemp(
//         temp.map((curElem) => {
//           if (curElem.id == editindex) {
//             return { ...curElem, name: userData };
//           }
//           return curElem;
//         })
//       );
//       setData({
//         project: "",
//         task: "",
//         time: "",
//         status: "",
//         description: "",
//       });

//       setEditIndex(null);
//       setIsEdit(true);
//     } else {
//       const all_data = { id: new Date().getTime().toString(), name: userData };

//       setTemp([...temp, all_data]);
//       setData({
//         project: "",
//         task: "",
//         time: "",
//         status: "",
//         description: "",
//       });
//       setDataNum(dataNum + 1);
//       setHasData(true);
//     }

//     const eodd = {
//       project: userData.project,
//       task: userData.task,
//       time: userData.time,
//       status: userData.status,
//       description: userData.description,
//     };

//     e.preventDefault();

//     axios
//       .post("http://localhost:8000/eod/task", {
//         // project: userData.project,
//         // task: userData.task,
//         // time: userData.time,
//         // status: userData.status,
//         // description: userData.description,

//         emp_id: 1,
//         project_id: 1,
//         task_title: userData.task,
//         task_desc: userData.description,
//         status: userData.status,
//         worktime: userData.time,
//         created_at: Date().toLocaleDateString(),
//         eod_date: Date().toLocaleDateString(),
//       })
//       .then((response) => {
//         console.log(response.data);
//         console.log(eodd);
//         if (eodd === "" && response.status === 200) {
//           alert("pls fill the data");
//           console.log(response);
//         } else if (response.status === 200 && eodd !== "") {
//           alert("Task Added Successfully");
//           console.log(eodd);
//         } else if (response.status === 500) {
//           alert("Insertion Failed");
//         } else {
//           alert("Data not found");
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const edititem = (ind) => {
//     const item_to_edit = temp.find((curElem) => {
//       return curElem.id == ind;
//     });
//     console.log(item_to_edit);
//     setData(item_to_edit.name);
//     setEditIndex(ind);
//     setIsEdit(false);
//   };

//   const deleteitem = (ind) => {
//     const updated_item = temp.filter((curElem, index) => {
//       return ind != index;
//     });
//     setTemp(updated_item);
//     setDataNum(dataNum - 1);
//     setData({
//       project: "",
//       task: "",
//       time: "",
//       status: "",
//       description: "",
//     });
//   };

//   const ClearAllData = () => {
//     setTemp([]);
//     setEditIndex(null);
//     setIsEdit(true);
//     setDataNum(0);
//     setHasData(false);
//   };

//   return (
//     <>
//       {/* <div className="col py-3 bg-white h-100 mb-2"> */}
//       <div className="row col-12 mx-0 px-0 text-center border-bottom">
//         <h3>END OF DAY REPORT</h3>
//       </div>
//       <div className="row col-12 mx-0 px-0 my-3 text-center justify-content-center">
//         <form className="col-4 d-flex date-1">
//           <label className="date p-2" htmlFor="date">
//             Date
//           </label>
//           <input
//             type="date"
//             id="birthday"
//             name="date"
//             className="form-control p-2"
//           />
//         </form>
//       </div>
//       <div className="row mx-0 px-0 justify-content-center">
//         <div className="col-10">
//           <p className="mb-1">Project</p>
//           <div className="project col-6">
//             <select
//               name="project"
//               id="Project"
//               value={userData.project}
//               className="form-select project col-6"
//               onChange={getInput}
//               required
//             >
//               <option defaultValue>select option</option>
//               <option value="XYZ Project for ABC Company">
//                 XYZ Project for ABC Company
//               </option>
//               <option value="PQR Project for XYZ Company">
//                 PQR Project for XYZ Company
//               </option>
//               <option value="ABc Project for PQR Company">
//                 ABc Project for PQR Company
//               </option>
//             </select>
//           </div>
//           {/* <select name="" id="" className="project col-6">
//             <option value="">XYZ Project for ABC Company</option>
//           </select> */}
//         </div>
//       </div>
//       <div className="row mx-0 px-0 mt-3 justify-content-center">
//         <div className="col-10 d-lg-flex justify-content-center">
//           <div className="col-12 col-lg-6">
//             <p className="mb-1">Task</p>
//             <div className="project col-12">
//               <input
//                 className="form-control"
//                 type="text"
//                 name="task"
//                 value={userData.task}
//                 id="Project"
//                 placeholder="Project task here"
//                 onChange={getInput}
//                 required
//               />
//             </div>
//           </div>
//           <div className="col-12 col-lg-6 d-flex mt-3 mt-lg-0">
//             <div className="col-6 ms-0 ms-lg-3 me-3">
//               <p className="mb-1">Total Working Time</p>
//               <div className="cs-form">
//                 <input
//                   type="time"
//                   name="time"
//                   value={userData.time}
//                   className="form-control"
//                   placeholder="Time"
//                   onChange={getInput}
//                   required
//                   // step="1"
//                 />
//               </div>
//             </div>
//             <div className="col-6">
//               <p className="mb-1">Status</p>
//               <select
//                 className="form-select"
//                 name="status"
//                 value={userData.status}
//                 onChange={getInput}
//                 required
//               >
//                 <option defaultValue>select option</option>
//                 <option value="Task in Progress">Task in Progress</option>
//                 <option value="Task Completed">Task Completed</option>
//               </select>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="row mx-0 px-0 mt-3 justify-content-center">
//         <div className="col-10">
//           <p className="mb-1">Description</p>
//           <div className="description">
//             <textarea
//               className="form-control"
//               name="description"
//               value={userData.description}
//               id="exampleFormControlTextarea1"
//               placeholder="Description here"
//               onChange={getInput}
//               required
//             ></textarea>
//           </div>
//         </div>
//       </div>

//       <div className="row mx-0 px-0 my-3 ms-5 justify-content-center">
//         <div className="col-10 d-flex ms-5 justify-content-end align-items-center added">
//           <i className={hasData ? "fas fa-check me-2" : "d-none"}></i>
//           <p className={hasData ? "mb-0" : "d-none"}>
//             Task {dataNum} Added Successfully
//           </p>
//           <button className="px-4 add-button ms-3" onClick={getTableData}>
//             Add
//           </button>
//         </div>
//       </div>
//       <hr className="mt-4" />

//       <div className="container">
//         <table className="table border">
//           <thead>
//             <tr>
//               <th scope="col">Line</th>
//               <th scope="col">Project</th>
//               <th scope="col">Task</th>
//               <th scope="col">Description</th>
//               <th scope="col">Status</th>
//               <th scope="col">T.W.T</th>
//             </tr>
//           </thead>
//           <tbody className="position-relative">
//             {temp.map((data, index) => {
//               return (
//                 <>
//                   <div className="position-absolute table-edit" key={index}>
//                     <i
//                       className="fa-regular fa-pen-to-square"
//                       onClick={() => edititem(data.id)}
//                     ></i>
//                   </div>
//                   <tr>
//                     <th scope="row">{index + 1}</th>
//                     <td>{data.name.project}</td>
//                     <td>{data.name.task}</td>
//                     <td>{data.name.description}</td>

//                     <td>
//                       {data.name.status == "Task Completed" ? (
//                         <i
//                           className="fa-solid fa-calendar-check"
//                           style={{ color: "green" }}
//                         ></i>
//                       ) : (
//                         <i
//                           className="fa-solid fa-hourglass-half"
//                           style={{ color: "orange" }}
//                         ></i>
//                       )}
//                     </td>

//                     <td>{data.name.time}</td>
//                   </tr>
//                   <div className="position-relative">
//                     <div className="position-absolute delete-icon">
//                       <i
//                         className="fa-solid fa-trash"
//                         onClick={() => deleteitem(index)}
//                       ></i>
//                     </div>
//                   </div>
//                 </>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//       <div className="row flex-nowrap bg-dark">
//         <div className="col-10 ms-auto d-flex justify-content-between p-3 bottom-background">
//           <div>
//             <button className="btn clear-btn px-3" onClick={ClearAllData}>
//               Clear All
//             </button>
//           </div>
//           <div>
//             <button className="btn submit-data-btn px-5" onClick={handlesubmit}>
//               Submit
//             </button>
//           </div>
//         </div>
//       </div>
//       {/* </div> */}
//     </>
//   );
// };

// export default Eod_main;
