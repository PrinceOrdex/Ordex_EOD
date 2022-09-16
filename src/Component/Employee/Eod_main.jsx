import { React, useState, useEffect, useContext } from "react";
import axios from "axios";
import { MenuContext } from "../../App";

const Eod_main = () => {

  const { state, dispatch } = useContext(MenuContext);
  let [options, setOptions] = useState([]);
  const [tasks, setTasks] = useState([]);



  const [userData, setData] = useState({
    project: "",
    task: "",
    time: "",
    status: "",
    description: "",
  });

  // Finding Today's Date.
  const todayDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    return today;
  }

  const getuserDetails = () => {
    let userData = JSON.parse(localStorage.getItem("userData"));
    return userData;
  }

  const [eodTaskData, setEodTaskData] = useState({
    // empId: getuserDetails().empId,
    projectId: "",
    taskTitle: "",
    status: "",
    taskDesc: "",
    workTime: "",
    // createdAt: todayDate(),
    eodDate: ""

  });


  const [temp, setTemp] = useState([]);
  const [editindex, setEditIndex] = useState(null);
  const [isedit, setIsEdit] = useState(true);
  const [dataNum, setDataNum] = useState(0);
  const [hasData, setHasData] = useState(false);





  const fetchProject = async () => {

    const empid = getuserDetails().empId;
    // const empId = userData.empId;
    const res = await axios.get("http://localhost:8000/eod/projects", {
      params: {
        empid
      },
    });

    setOptions([{ "project_id": "0", "project_name": "Select Project" }, ...res.data]);
  }


  useEffect(() => {
    fetchProject();
  }, []);

  let name, value;
  const getInput = (e) => {
    name = e.target.name;
    value = e.target.value;

    setEodTaskData({ ...eodTaskData, [name]: value });
  };

  // const edititem = (ind) => {
  //   const item_to_edit = temp.find((curElem) => {
  //     return curElem.id == ind;
  //   });
  //   console.log(item_to_edit);
  //   setData(item_to_edit.name);
  //   setEditIndex(ind);
  //   setIsEdit(false);
  // };

  // const deleteitem = (ind) => {
  //   const updated_item = temp.filter((curElem, index) => {
  //     return ind != index;
  //   });
  //   setTemp(updated_item);
  //   setDataNum(dataNum - 1);
  //   setData({
  //     project: "",
  //     task: "",
  //     time: "",
  //     status: "",
  //     description: "",
  //   });
  // };

  // const ClearAllData = () => {
  //   setTemp([]);
  //   setEditIndex(null);
  //   setIsEdit(true);
  //   setDataNum(0);
  //   setHasData(false);
  // };


  const fetchTask = async () => {
    try {
      const res = await axios.get("http://localhost:8000/eod/task", {
        params: {
          empid: getuserDetails().empId,
          eoddate: eodTaskData.eodDate,
        },
      });
      setTasks(res.data);

    } catch (err) {
      console.log(err);
    }
  }


  const putEodTaskData = async () => {
    try {

      const res = await axios
        .post("http://localhost:8000/eod/task", {
          empId: getuserDetails().empId,
          projectId: eodTaskData.projectId,
          taskTitle: eodTaskData.taskTitle,
          status: eodTaskData.status,
          taskDesc: eodTaskData.taskDesc,
          workTime: eodTaskData.workTime,
          createdAt: todayDate(),
          eodDate: eodTaskData.eodDate
        });

      console.log(">>>response");
      console.log(res);

      let eodDateTmp = eodTaskData.eodDate;

      if (res.status === 200) {
        alert("data inserted successfully!");
        fetchTask();
        setEodTaskData({
          // empId: getuserDetails().empId,
          projectId: "",
          taskTitle: "",
          status: "",
          taskDesc: "",
          workTime: "",
          // createdAt: todayDate(),
          eodDate: eodDateTmp
        })



      } else {
        alert("Data insertion failed");
      }

    } catch (err) {
      console.log(err);
    }
  }

  const getEodTaskData = (e) => {

    e.preventDefault();

    console.log(">>>>eodTaskData");
    console.log(eodTaskData);

    if (eodTaskData.projectId == "" ||
      eodTaskData.taskTitle == "" ||
      eodTaskData.status == "" ||
      eodTaskData.taskDesc == "" ||
      eodTaskData.workTime == "" ||
      eodTaskData.eodDate == "") {

      alert("Please enter all data");

    } else {
      putEodTaskData();
    }

  }


  const submitEod = async (e) => {

    e.preventDefault();

    try {
      const dateString = todayDate();

      const res = await axios.post("http://localhost:8000/eod", {
        empId: getuserDetails().empId,
        eoddate: eodTaskData.eodDate,
        createdAt: dateString,
      });

      if (res.status === 200) {
        alert("EOD Submitted Successfully");
      } else {
        alert("Problem in Submitting the EOD");
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* <div className="col py-3 bg-white h-100 mb-2"> */}
      <div className="row col-12 mx-0 px-0 text-center border-bottom">
        <h3>END OF DAY REPORT</h3>
      </div>
      <form>
        <div className="row col-12 mx-0 px-0 my-3 text-center justify-content-center">
          <div className="col-4 d-flex date-1">
            <label className="date p-2" htmlFor="date">
              Date
            </label>
            <input
              type="date"
              id="eodDate"
              name="eodDate"
              value={eodTaskData.eodDate}
              onChange={getInput}
              className="form-control p-2"
            />
          </div>
        </div>
        <div className="row mx-0 px-0 justify-content-center">
          <div className="col-10">
            <p className="mb-1">Project</p>
            <div className="project col-6">
              <select
                name="projectId"
                id="Project"
                value={eodTaskData.projectId}
                className="form-select project col-6"
                onChange={getInput}
                required
              >
                {options.map((elem, index) => {
                  return (
                    <option key={index} value={elem.project_id}>
                      {elem.project_name}
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
                  name="taskTitle"
                  value={eodTaskData.taskTitle}
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
                    name="workTime"
                    value={eodTaskData.workTime}
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
                  value={eodTaskData.status}
                  onChange={getInput}
                  required
                >
                  <option defaultValue>select option</option>
                  <option value="INPROGRESS">Task in Progress</option>
                  <option value="COMPLETED">Task Completed</option>
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
                name="taskDesc"
                value={eodTaskData.taskDesc}
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
            <button className="px-4 add-button ms-3" onClick={getEodTaskData}>
              Add
            </button>
          </div>
        </div>

      </form>


      <hr className="mt-4" />

      <div className="container">
        <table className="table border">
          <thead>
            <tr>
              <th scope="col">Sr.no</th>
              <th scope="col">Project</th>
              <th scope="col">Task</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
              <th scope="col">T.W.T</th>
            </tr>
          </thead>
          <tbody className="position-relative">
            {tasks.map((elem, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{elem.project_name}</td>
                <td>{elem.task_title}</td>
                <td>{elem.task_desc}</td>
                <td>{elem.status}</td>
                <td>{elem.worktime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="row flex-nowrap bg-dark">
        <div className="col-10 ms-auto d-flex justify-content-between p-3 bottom-background">
          <div>
            <button className="btn clear-btn px-3">
              Clear All
            </button>
          </div>
          <div>
            <button className="btn submit-data-btn px-5" onClick={submitEod}>
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