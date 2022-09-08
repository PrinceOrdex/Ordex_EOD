import { React, useState } from "react";

const Eod_main = () => {
  const [userData, setData] = useState({
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

  let name, value;
  const getInput = (e) => {
    name = e.target.name;
    value = e.target.value;

    setData({ ...userData, [name]: value });
  };

  const getTableData = () => {
    if (
      userData.project === "" ||
      userData.task === "" ||
      userData.time === "" ||
      userData.status === "" ||
      userData.description === ""
    ) {
      alert("Plz Fill Data first");
    } else if (!isedit) {
      setTemp(
        temp.map((curElem) => {
          if (curElem.id == editindex) {
            return { ...curElem, name: userData };
          }
          return curElem;
        })
      );
      setData({
        project: "",
        task: "",
        time: "",
        status: "",
        description: "",
      });

      setEditIndex(null);
      setIsEdit(true);
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
            name="date"
            className="form-control p-2"
          />
        </form>
      </div>
      <div className="row mx-0 px-0 justify-content-center">
        <div className="col-10">
          <p className="mb-1">Project</p>
          <div className="project col-6">
            <input
              className="form-control"
              type="text"
              name="project"
              value={userData.project}
              id="Project"
              placeholder="Project title here"
              onChange={getInput}
              required
            />
          </div>
          {/* <select name="" id="" className="project col-6">
            <option value="">XYZ Project for ABC Company</option>
          </select> */}
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
          <button className="px-4 add-button ms-3" onClick={getTableData}>
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
            <button className="btn submit-data-btn px-5 ">Submit</button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Eod_main;
