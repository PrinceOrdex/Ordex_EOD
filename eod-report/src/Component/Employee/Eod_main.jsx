import React from "react";

const Eod_main = () => {
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
            name="birthday"
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
              name="Poject"
              id="Project"
              placeholder="Project title here"
            />
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
                name="Poject"
                id="Project"
                placeholder="Project task here"
              />
            </div>
          </div>
          <div className="col-12 col-lg-6 d-flex mt-3 mt-lg-0">
            <div className="col-6 ms-0 ms-lg-3 me-3">
              <p className="mb-1">Total Working Time</p>
              <div className="cs-form">
                <input
                  type="time"
                  className="form-control"
                  value="hours:minutes"
                />
              </div>
            </div>
            <div className="col-6">
              <p className="mb-1">Status</p>
              <select className="form-select" required>
                <option selected disabled>select option</option>
                <option value="1">Task in Progress</option>
                <option value="2">Task Completed</option>

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
              id="exampleFormControlTextarea1"
              placeholder="Description here"
            ></textarea>
          </div>
        </div>
      </div>

      <div className="row mx-0 px-0 my-3 ms-5 justify-content-center">
        <div className="col-10 d-flex ms-5 justify-content-end align-items-center added">
          <i className="fas fa-check me-2"></i>
          <p className="mb-0">Task 3 Added Successfully</p>
          <button className="px-4 add-button ms-3">Add</button>
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
            <div className="position-absolute table-edit"><i class="fa-regular fa-pen-to-square"></i></div>
            <tr>
              <th scope="row">1</th>
              <td>XYZ Project</td>
              <td>Task Project</td>
              <td>Brief Info About Project</td>
              <td>
                <i class="fa-solid fa-hourglass-half"></i>
              </td>
              <td>1hr 20min</td>
            </tr>
            <div className="position-relative table-delete"><i class="fa-solid fa-trash"></i></div>
            <div className="position-absolute table-edit"><i class="fa-regular fa-pen-to-square"></i></div>
            <tr className="position-relative">
              <th scope="row">1</th>
              <td>XYZ Project</td>
              <td>Task Project</td>
              <td>Brief Info About Project</td>
              <td><i class="fa-solid fa-calendar-check"></i></td>
              <td>1hr 20min</td>
            </tr>

          </tbody>
        </table>
      </div>
      {/* </div> */}
    </>
  );
};

export default Eod_main;
