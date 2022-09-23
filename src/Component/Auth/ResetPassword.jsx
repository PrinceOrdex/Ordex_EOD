import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import "../../css/reset-password.css";

const ResetPassword = () => {

    let [cpass, setCPass] = useState("");
    let [npass, setNPass] = useState("");

    let navigate = useNavigate();
    const passValidations = () => {

        if (npass != cpass) {
            alert("New Password and Confirm Password does not match!")
            return false;
        } else {
            var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
            if (npass.match(decimal)) {
                return true;
            }
            else {
                alert(`password must be of 8 to 15 characters.
                 At least one lowercase and uppercase letter, one numeric digit, and one special character`)
                return false;
            }
        }
    }




    const changePass = async (e) => {
        e.preventDefault();
        try {
            if (passValidations()) {
                const queryParams = new URLSearchParams(window.location.search);
                const user_id = queryParams.get("user_id");
                const token = queryParams.get("token");

                const res = await axios.patch("http://localhost:8000/forgot/password", {
                    "user_idF": user_id,
                    "tokenF": token,
                    "password": npass,
                    "password2": cpass
                });
                console.log(res);
                if (res.status == 200) {
                    alert("Your password Changed Successfully!");
                    navigate('/');
                } else {
                    alert("Unable to change Password! Please try again.");
                    navigate('/forgotpassword');

                }

            }
        } catch (err) {
            navigate('/forgotpassword');
            console.log(err);
        }
    }

    return (
        <>
            <div
                className="main d-flex justify-content-center align-items-center"
            >
                <div className="box text-center ms-3 me-3 me-sm-5 p-4">
                    <div className="d-flex justify-content-center" style={{ "position": "relative" }}>
                        <div className="btn-top d-flex justify-content-between" id="btn-top">
                            <p className="mb-0">Reset Password?</p>
                        </div>

                    </div>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div className="image mt-4 mb-3">
                                <img src="./image/Logo.png" alt="" srcset="" />
                            </div>
                            <form className="mt-3">
                                {/* <!-- Email input --> */}
                                <div className="row px-0 mx-0 d-flex justify-content-center">
                                    <div className="col-12">
                                        <div className="floating-label-group">
                                            <input
                                                type="password"
                                                id="password"
                                                name='npass'
                                                value={npass}
                                                onChange={(e) => { setNPass(e.target.value) }}
                                                className="form-control"
                                                autoComplete="off"
                                                required
                                            />
                                            <label className="floating-label">New Password</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="floating-label-group">
                                            <input
                                                type="password"
                                                id="password"
                                                className="form-control"
                                                autoComplete="off"
                                                name='cpass'
                                                value={cpass}
                                                onChange={(e) => { setCPass(e.target.value) }}
                                                required
                                            />
                                            <label className="floating-label">Confirm Password</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="container">
                                    <p>password must be of 8 to 15 characters. <br />
                                        At least one lowercase and uppercase letter,<br /> one numeric digit, and one special character.</p>
                                </div>

                                {/* <!-- Submit button --> */}
                                <button
                                    type="submit"
                                    onClick={changePass}
                                    className="btn btn-primary btn-block mb-3 px-5 py-1 fw-500 login"
                                >
                                    Done
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResetPassword