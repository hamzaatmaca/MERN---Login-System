import React, { useEffect, useState } from "react";
import useFetch from "../Hooks/useFetch";
import swal from "sweetalert";
import { staticEndpoint } from "../utils/endpoint";
import * as faceapi from "face-api.js";

import defaultImage from "../Images/user.png";
import keyImg from "../Images/key.jpg";

const Login = () => {
  const [photo, setPhoto] = useState(null);

  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  const handlePayload = () => {
    useFetch("login/loginPhoto", "POST", {
      email: emailRef.current.value,
    })
      .then((res) => {
        setPhoto(res.data.data);
      })
      .catch((err) => {
        setPhoto(null);
        swal(err.response.data.error);
      });

    useFetch("login", "POST", {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    })
      .then((res) => {
        localStorage.setItem("ai.token", res.data.data);
        window.location.href = "/";
      })
      .catch((err) => {
        swal(err.response.data.error);
      });
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-sm-6">
          <h2>Login Here, Join Us!</h2>
        </div>
      </div>
      <div className="row mt-5 mb-5">
        <div className="col-sm-5">
          <div className="row">
            <div className="col-sm-6">
              <img
                width={100}
                height={100}
                style={{
                  borderRadius: "50%",
                  boxShadow: "0 0 20px grey",
                }}
                src={
                  photo === null ? defaultImage : `${staticEndpoint}${photo}`
                }
              />
            </div>
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              <b>Email address</b>
            </label>
            <input
              ref={emailRef}
              type="email"
              className="form-control mt-4"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              <b>Password</b>
            </label>
            <input
              ref={passwordRef}
              type="password"
              className="form-control"
              placeholder="Enter your password"
            />
          </div>
          <button onClick={handlePayload} className="btn btn-primary mt-4">
            Login
          </button>
        </div>
        <div className="col-sm-1"></div>
        <div className="col-sm-5">
          <div>
            <img src={keyImg} className="ecommerceImge" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
