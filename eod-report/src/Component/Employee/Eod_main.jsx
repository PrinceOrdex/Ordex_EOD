import { React, useState } from "react";

const Eod_main = () => {
  const [userData, setData] = useState({
    project: "",
    task: "",
    time: "",
    status: "",
    description: "",
    showicon: "",
  });

  const [temp, setTemp] = useState([]);
  const [icon, seticon] = useState(true);

  let name, value;
  const getInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    if (value == "Task in Progress") {
      seticon(false);
    } else {
      seticon(true);
    }
    setData({ ...userData, [name]: value, showicon: icon });
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
    } else {
      setTemp([...temp, userData]);
      setData({
        project: "",
        task: "",
        time: "",
        status: "",
        description: "",
      });
    }
  };

  console.log(userData);
  console.log(temp);
  return (
    <>
      {/* <div className="col py-3 bg-white h-100 mb-2"> */}
      <div className="row col-12 mx-0 px-0 text-center border-bottom">
        <h3>END OF DAY REPORT</h3>
      </div>
      <div className="row col-12 mx-0 px-0 my-3 text-center justify-content-center">
        <form className="col-4 d-flex date-1">
          <label className="date p-2" for="date">
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
                <option selected>select option</option>
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
          <i className="fas fa-check me-2"></i>
          <p className="mb-0">Task 3 Added Successfully</p>
          <button className="px-4 add-button ms-3" onClick={getTableData}>
            Add
          </button>
        </div>
      </div>

      {/* <p className="lead">
          An example 2-level sidebar with collasible menu items. The menu
          functions like an "accordion" where only a single menu is be open at a
          time. While the sidebar itself is not toggle-able, it does
          responsively shrink in width on smaller screens.
        </p>
        <ul className="list-unstyled">
          <li>
            <h5>Responsive</h5>
            shrinks in width, hides text labels and collapses to icons only on
            mobile
          </li>
        </ul> */}
      <div className="container">
        <table class="table border">
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
                  <div className="position-absolute table-edit">
                    <i class="fa-regular fa-pen-to-square"></i>
                  </div>
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{data.project}</td>
                    <td>{data.task}</td>
                    <td>{data.description}</td>
                    <td>
                      <i
                        class="fa-solid fa-calendar-check"
                        style={{ color: "green" }}
                      ></i>
                      {/* <i
                          class="fa-solid fa-hourglass-half"
                          style={{ color: "orange" }}
                        ></i> */}
                    </td>
                    <td>{data.time}</td>
                  </tr>
                  <div className="position-relative">
                    <div className="position-absolute delete-icon">
                      <i class="fa-solid fa-trash"></i>
                    </div>
                  </div>
                </>
              );
            })}

            {/* <div className="position-absolute table-edit">
              <i class="fa-regular fa-pen-to-square"></i>
            </div>
            <tr>
              <th scope="row">1</th>
              <td>XYZ Project</td>
              <td>Task Project</td>
              <td>Brief Info About Project</td>
              <td>
                <i
                  class="fa-solid fa-hourglass-half"
                  style={{ color: "orange" }}
                ></i>
              </td>
              <td>1hr 20min</td>
            </tr> */}
            {/* <div className="position-relative">
              <div className="position-absolute delete-icon">
                <i class="fa-solid fa-trash"></i>
              </div>
            </div>
            <div className="position-absolute table-edit">
              <i class="fa-regular fa-pen-to-square"></i>
            </div>
            <tr className="position-relative">
              <th scope="row">1</th>
              <td>XYZ Project</td>
              <td>Task Project</td>
              <td>Brief Info About Project</td>
              <td>
                <i
                  class="fa-solid fa-calendar-check"
                  style={{ color: "green" }}
                ></i>
              </td>
              <td>1hr 20min</td>
            </tr>
            <div className="position-relative">
              <div className="position-absolute delete-icon">
                <i class="fa-solid fa-trash"></i>
              </div>
            </div> */}
            {/* <div className="position-absolute bottom-0">
              <i class="fa-solid fa-trash"></i>
            </div> */}
          </tbody>
        </table>
      </div>
      {/* </div> */}
    </>
  );
};

export default Eod_main;
