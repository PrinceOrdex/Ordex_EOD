import axios from 'axios';
import React, { useState } from 'react'
import "../../css/forgot-password.css";

const ForgotPassword = () => {

    let [email, setEmail] = useState("");
    let [msg, setMsg] = useState(false);

    function ValidateEmail() {

        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (email.match(validRegex)) {
            return true;
        } else {
            return false;
        }
    }



    const sendForgotPassMail = async () => {
        try {
            if (ValidateEmail()) {
                const res = await axios.post("http://localhost:8000/send/email", { Email: email });
                setMsg(true);


                // console.log(res);

            } else {
                alert("Invalid email address!");
            }
        } catch (err) {
            setMsg(true);
            console.log(err);
        }
    }

    return (
        <>
            <div
                className="main d-flex justify-content-center justify-content-sm-end align-items-center"
            >
                <div className="box text-center ms-3 me-3 me-sm-5 p-4">
                    <div className="d-flex justify-content-center" style={{ "position": "relative" }}>
                        <div className="btn-top d-flex justify-content-between" id="btn-top">
                            <p className="mb-0">Forgot Password?</p>
                        </div>
                    </div>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div className="image mt-4 mb-3">
                                <img src="./image/Logo.png" alt="" srcSet='' />
                            </div>
                            <div className="heading">
                                <h4>Reset Password in two quick steps</h4>
                            </div>
                            <form className="mt-3">
                                {/* <!-- Email input --> */}
                                <div className="row px-0 mx-0 d-flex justify-content-center">
                                    <div className="col-12 px-0">
                                        <div className="floating-label-group">
                                            <input type="email" id="email" name='email' className="form-control" autoComplete="off" required value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                            <label className="floating-label">Email address</label>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Submit button --> */}
                                <button
                                    type="button"
                                    className="btn btn-primary btn-block mb-3 px-5 py-1 fw-500 login"
                                    onClick={sendForgotPassMail}
                                >
                                    Reset
                                </button>

                                {(msg ? <div className="container text-center text-success">
                                    <p>If a matching account was found an email was sent to user@email.com to allow you to reset your password.</p>
                                </div> : null)}

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword