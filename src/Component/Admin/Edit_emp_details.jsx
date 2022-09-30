import React, { useEffect } from "react";

import _image_75 from "./../../Image/75.jpg";
import BACK from "./../../Image/Back-Button.svg";
import "./../../css/profile.css";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import axios from "axios";
import { useState } from "react";
import Employee_list from "./Employee_list";

const Edit_emp_details = (props) => {
  const [loader, setLoader] = useState(false);
  const [tValue, setTValue] = useState("fdfds");

  const [empData, setEmpData] = useState({});

  const getEmpData = async () => {

    const res = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/employee`, {
      params: {
        emp_id: props.empId,
      },
    });
    setEmpData(res.data[0]);

    setLoader(false)
  };


  let name, value;
  const getData = (e) => {
    name = e.target.name;
    value = e.target.value;

    setEmpData({ ...empData, [name]: value });
  };

  const getFullName = () => {
    return `${empData.emp_fname} ${empData.emp_midname} ${empData.emp_lname}`
  }


  const todayDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    return today;
  }

  const updateEmployee = async (e) => {

    // e.preventDefault();
    setLoader(true)
    try {
      const res = await axios.patch(`${process.env.REACT_APP_BACKEND_BASE_URL}/employee`, {
        fname: empData.emp_fname,
        mname: empData.emp_midname,
        lname: empData.emp_lname,
        email: empData.email,
        phoneno: empData.phoneno,
        post: empData.post,
        type: empData.emp_type,
        status: empData.status,
        update_at: todayDate(),
        // skill_id: empData.emp_skill_id,
        // project_id: 4,
        emp_id: empData.emp_id,
      }
      );

      if (res.status == 200) {
        setLoader(false)
        alert("Emp Updated Successfully");
        // window.location.reload();
      } else {
        setLoader(false)
        alert("Updation failed")
      }
    } catch (err) {
      setLoader(false)
      console.log(err);
    }

  }

  useEffect(() => {
    getEmpData();
  }, []);

  return (
    <>

      <div className="fixed-left">
        <div id="wrapper">
          {/* <Sidebar /> */}
          <div className="content-page">
            <div className="content">
              {/* <Header /> */}
              <div className="page-content-wrapper">
                <div className="container-fluid">
                  <div className="row col-12 px-0 mx-0">
                    <div className="col-sm-12 px-0">
                      <div className="page-title-box">
                        <div className="row col-12 mx-0 px-0 text-center border-bottom align-items-center">
                          <div className="col-1 px-0 d-flex justify-content-start">
                            <img src={BACK} alt="" style={{ width: "33px", height: "33px" }} />
                          </div>
                          <div className="col-11 d-flex justify-content-center">
                            <h3 className="text-uppercase">edit details</h3>
                          </div>

                        </div>
                        <div className="row col-12 mx-0 px-0 justify-content-center mt-3">
                          {/* <div className="col-12 col-md-4 bg-image">
                            <img src={_image_75} alt="" />
                            <div className="Empname ms-4 text-center mt-3">
                              <h5 style={{ "textTransform": "capitalize" }}>{getFullName()}</h5>
                              <p className="mb-0">Employee Profile</p>
                            </div>
                          </div> */}


                          <div class="col-8 col-sm-5 col-md-6 col-lg-3 px-0 bg-image">
                            <img src={_image_75} alt="" />
                            <div class="row col-12 Empname mx-auto text-center d-flex align-items-center">
                              <h5 style={{ "textTransform": "capitalize" }}>{getFullName()}</h5>
                              <p class="mb-0">Employee Profile</p>
                            </div>
                          </div>

                          <div className="col-12 col-lg-8 mt-3 mt-lg-0">
                            <form className="admin-edit">
                              {/* <div className="row col-12 mx-0 px-0 mb-3"> */}
                              {/* <div className="col-12 col-sm-8">
                                  <label className="mb-1">Employee Code</label>
                                  <input
                                    type="text"
                                    name="emp_code"
                                    id="Empcode"
                                    value={empData.emp_code}
                                    className="form-control"
                                    onChange={getData}
                                  />
                                </div> */}
                              {/* <div className="col-12 col-sm-4 mt-3 mt-sm-0">
                                  <label className="mb-1">Status</label>
                                  <select
                                    className="form-select"
                                    name="status"
                                    value={empData.status}
                                    onChange={getData}
                                    defaultValue={empData.status}
                                  > */}
                              {/* <option>select option</option> */}
                              {/* <option value="ACTIVE">ACTIVE</option>
                                    <option value="INACTIVE">INACTIVE</option>
                                  </select>
                                </div> */}
                              {/* </div> */}
                              <div class="row col-12 mx-0 px-0 mb-3">
                                <div class="col-12 col-sm-8">
                                  <label class="mb-1">Employee Code</label>
                                  <input
                                    type="text"
                                    name="emp_code"
                                    id="Empcode"
                                    value={empData.emp_code}
                                    className="form-control"
                                    onChange={getData}
                                  />
                                </div>
                                <div class="col-12 col-sm-4 mt-3 mt-sm-0">
                                  <label class="mb-1">Status</label>
                                  <select
                                    className="form-select"
                                    name="status"
                                    value={empData.status}
                                    onChange={getData}
                                    defaultValue={empData.status}
                                  >
                                    <option value="ACTIVE">ACTIVE</option>
                                    <option value="INACTIVE">INACTIVE</option>
                                  </select>
                                </div>
                              </div>
                              <div className="row col-12 mx-0 px-0 mb-3">
                                <div className="col-12 col-sm-8">
                                  <label className="mb-1">Name</label>
                                  <input
                                    type="text"
                                    name="emp_fname"
                                    id="Empname"
                                    value={empData.emp_fname}
                                    className="form-control"
                                    onChange={getData}
                                  />
                                </div>
                                <div className="col-12 col-sm-4 mt-3 mt-sm-0">
                                  <label className="mb-1">Type</label>
                                  <select className="form-select" name="emp_type" value={empData.emp_type} defaultValue={empData.emp_type}
                                    onChange={getData}>
                                    <option value="intern">Intern</option>
                                    <option value="employee">Employee</option>
                                    <option value="consultant">Consultant</option>
                                    <option value="admin">admin</option>

                                  </select>
                                </div>
                              </div>
                              {/* <div className="row col-12 mx-0 px-0 mb-3">
                                <div className="col-12 col-sm-8">
                                  <label className="mb-1">E-mail Id</label>
                                  <input
                                    type="email"
                                    name="email"
                                    value={empData.email}
                                    onChange={getData}
                                    className="form-control"
                                    id="inputEmail"
                                    required
                                  />
                                </div>
                              </div> */}
                              {/* <div className="row col-12 mx-0 px-0 mb-3">
                                <div className="col-12 col-sm-8">
                                  <label className="mb-1">Post</label>
                                  <input
                                    type="text"
                                    name="post"
                                    id="Emppost"
                                    value={empData.post}
                                    onChange={getData}
                                    className="form-control"
                                  />
                                </div>
                              </div> */}


                              <div class="row col-12 mx-0 px-0 mb-3">
                                <div class="col-12 col-sm-8">
                                  <label class="mb-1">E-mail Id</label>
                                  <input
                                    type="email"
                                    name="email"
                                    value={empData.email}
                                    onChange={getData}
                                    className="form-control"
                                    id="inputEmail"
                                    required
                                  />
                                </div>
                                <div class="col-12 col-sm-4 mt-3 mt-sm-0">
                                  <label class="mb-1">Post</label>
                                  <input
                                    type="text"
                                    name="post"
                                    id="Emppost"
                                    value={empData.post}
                                    onChange={getData}
                                    className="form-control"
                                  />
                                </div>
                              </div>

                              <div className="row col-12 mx-0 px-0 mb-3">
                                <div className="col-12 col-md-8"></div>
                                <div className="col-12 col-md-4 mt-3 mt-sm-0 d-flex justify-content-center justify-content-md-end">

                                  <button type="submit" className="btn-done text-white" onClick={(e) => { updateEmployee(e) }}>
                                    Done
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div className="row col-12 mx-0 px-0 justify-content-center admin-edit">
                          <div className="col-12 col-md-4 col-lg-3 px-3 px-md-0">
                            <label className="mb-1">Skills</label>
                            <div className="skill">
                              {/* <input
                                type="text"
                                name="skill"
                                id="Skill"
                                className="form-control"
                              /> */}
                              <Stack style={{width: "100%"}}>
                                <Autocomplete
                                  freeSolo
                                  id="free-solo-2-demo"
                                  disableClearable
                                  
                                  options={top100Films.map((option) => option.title)}
                                  onChange={(event, value) => setTValue(value)}
                                  renderInput={(params) => (
                                    <TextField
                                      {...params}
                                      variant="standard"
                                      onChange={(e) => { setTValue(e.target.value) }}
                                      value={tValue}
                                      
                                    />
                                  )}
                                />
                              </Stack>
                              <i className="fas fa-circle-plus"></i>
                            </div>
                            <div className="row col-12 mx-0 px-0 mb-0 mb-md-3 mt-0 mt-lg-3">
                              <div className="col mt-3 px-1 ps-0 ps-sm-1">
                                <div className="skill-box p-2">
                                  <p className="mb-0">PowerPoint</p>
                                  <i className="fas fa-circle-xmark"></i>
                                </div>
                              </div>
                              <div className="col mt-3 px-1 pe-0 pe-sm-1">
                                <div className="skill-box p-2">
                                  <p className="mb-0">PowerPoint</p>
                                  <i className="fas fa-circle-xmark"></i>
                                </div>
                              </div>
                            </div>
                            <div className="row col-12 mx-0 px-0 mb-0 mb-md-3 mt-3">
                              <div className="col mb-3 px-1 ps-0 ps-sm-1">
                                <div class="skill-box p-2">
                                  <p class="mb-0">PowerPoint</p>
                                  <i class="fas fa-circle-xmark"></i>
                                </div>
                              </div>
                              <div className="col  px-1 pe-0 pe-sm-1">
                                <div className="skill-box p-2">
                                  <p className="mb-0">PowerPoint</p>
                                  <i className="fas fa-circle-xmark"></i>
                                </div>
                              </div>
                            </div>
                            {/* <!-- <div class="col-6 mt-3">
            <div class="skill-box p-2">
              <p class="mb-0">PowerPoint</p>
              <i class="fas fa-circle-xmark"></i>
            </div>
          </div> --> */}
                          </div>
                          <div className="col-12 col-md-8 px-0 px-sm-1">
                            <div className="row col-12 mx-0 px-0 mb-3">
                              <div className="col-12 col-lg-8 ps-3 pe-2">
                                <div className="emp-project">
                                  <label className="mb-1">Project</label>
                                  <select className="form-select">
                                    <option selected>select option</option>
                                    <option value="1">Intern</option>
                                    <option value="2">Employee</option>
                                    <option value="3">Consultant</option>
                                  </select>
                                </div>
                                <div className="row col-12 mx-0 px-0 mb-0 mb-md-3 mt-0 mt-lg-3">
                                  <div className="col mt-3  px-1 ps-0 ps-sm-1">
                                    <div className="skill-box p-2">
                                      <p className="mb-0">PowerPoint</p>
                                      <i className="fas fa-circle-xmark"></i>
                                    </div>
                                  </div>
                                  <div className="col mt-3 px-1 pe-0 pe-sm-1">
                                    <div className="skill-box p-2">
                                      <p className="mb-0">PowerPoint</p>
                                      <i className="fas fa-circle-xmark"></i>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12 col-lg-4 mt-3 mt-lg-0 px-1 px-lg-0">
                                <div className="row mx-0 px-0">
                                  <div class="col-12 col-sm-6 col-md-12 P-name">
                                    <label className="mb-1">Project Name</label>
                                    <input type="text" name="pname" id="PName" className="form-control" />
                                  </div>
                                  <div className="col-12 col-sm-6 col-md-12 Mentor mt-2 mt-sm-0 mt-md-2">
                                    <label className="mb-1">Mentor</label>
                                    <select className="form-select">
                                      <option selected="">select option</option>
                                      <option> Active</option>
                                      <option> Inactive</option>
                                    </select>
                                  </div>
                                </div>


                                <div className="mt-3 me-2 d-flex justify-content-center justify-content-md-end">
                                  <button type="submit" className="btn-done text-white">Add Project</button>
                                </div>
                              </div>
                            </div>

                            {/* <!-- <div class="row col-12 mx-0 px-0 mb-3">
              <div class="col-12 col-md-8"></div>
              <div
                class="col-12 col-md-4 mt-3 mt-sm-0 d-flex justify-content-center justify-content-md-end"
              >
                <button type="submit" class="btn-done text-white">Done</button>
              </div>
            </div> --> */}

                            {/* <!-- <div class="row col-12 mx-0 px-0 mb-3">
              <div class="col-12 col-sm-8">
                <label class="mb-1">Name</label>
                <input
                  type="text"
                  name="empName"
                  id="Empname"
                  class="form-control"
                />
              </div>
              <div class="col-12 col-sm-4 mt-3 mt-sm-0">
                <label class="mb-1">Type</label>
                <select class="form-select">
                  <option selected>select option</option>
                  <option value="1">Intern</option>
                  <option value="2">Employee</option>
                  <option value="3">Consultant</option>
                </select>
              </div>
            </div>
            <div class="row col-12 mx-0 px-0 mb-3">
              <div class="col-12 col-sm-8">
                <label class="mb-1">E-mail Id</label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail"
                  required
                />
              </div>
              <div class="col-12 col-sm-4 mt-3 mt-sm-0">
                <label class="mb-1">Post</label>
                <input
                  type="text"
                  name="empPost"
                  id="Emppost"
                  class="form-control"
                />
              </div>
            </div> --> */}
                            {/* <!-- <div class="row col-12 mx-0 px-0 mb-3">
              <div class="col-12 col-md-8"></div>
              <div
                class="col-12 col-md-4 mt-3 mt-sm-0 d-flex justify-content-center justify-content-md-end"
              >
                <button type="submit" class="btn-done text-white">Done</button>
              </div>
            </div> --> */}

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
    </>
  );
};

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
      title: 'The Lord of the Rings: The Return of the King',
      year: 2003,
  },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  {
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      year: 2001,
  },
  {
      title: 'Star Wars: Episode V - The Empire Strikes Back',
      year: 1980,
  },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  {
      title: 'The Lord of the Rings: The Two Towers',
      year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  {
      title: 'Star Wars: Episode IV - A New Hope',
      year: 1977,
  },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
  { title: 'Casablanca', year: 1942 },
  { title: 'City Lights', year: 1931 },
  { title: 'Psycho', year: 1960 },
  { title: 'The Green Mile', year: 1999 },
  { title: 'The Intouchables', year: 2011 },
  { title: 'Modern Times', year: 1936 },
  { title: 'Raiders of the Lost Ark', year: 1981 },
  { title: 'Rear Window', year: 1954 },
  { title: 'The Pianist', year: 2002 },
  { title: 'The Departed', year: 2006 },
  { title: 'Terminator 2: Judgment Day', year: 1991 },
  { title: 'Back to the Future', year: 1985 },
  { title: 'Whiplash', year: 2014 },
  { title: 'Gladiator', year: 2000 },
  { title: 'Memento', year: 2000 },
  { title: 'The Prestige', year: 2006 },
  { title: 'The Lion King', year: 1994 },
  { title: 'Apocalypse Now', year: 1979 },
  { title: 'Alien', year: 1979 },
  { title: 'Sunset Boulevard', year: 1950 },
  {
      title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
      year: 1964,
  },
  { title: 'The Great Dictator', year: 1940 },
  { title: 'Cinema Paradiso', year: 1988 },
  { title: 'The Lives of Others', year: 2006 },
  { title: 'Grave of the Fireflies', year: 1988 },
  { title: 'Paths of Glory', year: 1957 },
  { title: 'Django Unchained', year: 2012 },
  { title: 'The Shining', year: 1980 },
  { title: 'WALL·E', year: 2008 },
  { title: 'American Beauty', year: 1999 },
  { title: 'The Dark Knight Rises', year: 2012 },
  { title: 'Princess Mononoke', year: 1997 },
  { title: 'Aliens', year: 1986 },
  { title: 'Oldboy', year: 2003 },
  { title: 'Once Upon a Time in America', year: 1984 },
  { title: 'Witness for the Prosecution', year: 1957 },
  { title: 'Das Boot', year: 1981 },
  { title: 'Citizen Kane', year: 1941 },
  { title: 'North by Northwest', year: 1959 },
  { title: 'Vertigo', year: 1958 },
  {
      title: 'Star Wars: Episode VI - Return of the Jedi',
      year: 1983,
  },
  { title: 'Reservoir Dogs', year: 1992 },
  { title: 'Braveheart', year: 1995 },
  { title: 'M', year: 1931 },
  { title: 'Requiem for a Dream', year: 2000 },
  { title: 'Amélie', year: 2001 },
  { title: 'A Clockwork Orange', year: 1971 },
  { title: 'Like Stars on Earth', year: 2007 },
  { title: 'Taxi Driver', year: 1976 },
  { title: 'Lawrence of Arabia', year: 1962 },
  { title: 'Double Indemnity', year: 1944 },
  {
      title: 'Eternal Sunshine of the Spotless Mind',
      year: 2004,
  },
  { title: 'Amadeus', year: 1984 },
  { title: 'To Kill a Mockingbird', year: 1962 },
  { title: 'Toy Story 3', year: 2010 },
  { title: 'Logan', year: 2017 },
  { title: 'Full Metal Jacket', year: 1987 },
  { title: 'Dangal', year: 2016 },
  { title: 'The Sting', year: 1973 },
  { title: '2001: A Space Odyssey', year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: 'Toy Story', year: 1995 },
  { title: 'Bicycle Thieves', year: 1948 },
  { title: 'The Kid', year: 1921 },
  { title: 'Inglourious Basterds', year: 2009 },
  { title: 'Snatch', year: 2000 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty Python and the Holy Grail', year: 1975 },
];

export default Edit_emp_details;
