import React, { useState } from "react";
import useValidation from "../Hooks/useValidation";
import useFetch from "../Hooks/useFetch";
import swal from "sweetalert";
import axios from "axios";

import { endpoint } from "../utils/endpoint";

import join from "../Images/join.jpg";

const Register = () => {
  const [payload, setPayload] = useState({
    firstname: null,
    lastname: null,
    phone: null,
    email: null,
    country: null,
    city: null,
    password: null,
    file: null,
  });
  const [imageUpload, setImageUpload] = useState();

  const handlePayload = () => {
    const validate = useValidation(payload);
    console.log(validate);
    if (validate) {
      const fd = new FormData();
      fd.append("image", imageUpload);
      axios
        .post(endpoint + "upload", fd, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res);
        });

      useFetch("register", "POST", payload)
        .then((res) => {
          swal(res.data.data);
        })
        .catch((err) => {
          console.log(err);
          swal(err.response.data.data);
        });
    } else {
      swal("Please fill in all field");
    }
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-sm-6">
          <h2>Register Here, Join Us!</h2>
        </div>
      </div>
      <div className="row mt-5 mb-5">
        <div className="col-sm-6">
          <div className="mb-3">
            <label htmlFor="FirstName" className="form-label ">
              <b>First Name</b>
            </label>
            <input
              id="FirstName"
              type="text"
              className="form-control"
              placeholder="Enter your firstname"
              onChange={(e) => {
                setPayload({ ...payload, firstname: e.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              <b>Last Name</b>
            </label>
            <input
              id="lastName"
              type="text"
              className="form-control"
              placeholder="Enter your lastname"
              onChange={(e) => {
                setPayload({ ...payload, lastname: e.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              <b>Phone</b>
            </label>
            <input
              id="phone"
              type="number"
              className="form-control"
              placeholder="Enter your number"
              onChange={(e) => {
                setPayload({ ...payload, phone: e.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              <b>Email address</b>
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              onChange={(e) => {
                setPayload({ ...payload, email: e.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              <b>Country</b>
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              name="country"
              id="counrty"
              onChange={(e) => {
                setPayload({ ...payload, country: e.target.value });
              }}
            >
              <option value="Turkey">Turkey</option>
              <option value="Usa">Usa</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              <b>City</b>
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              name="city"
              id="city"
              onChange={(e) => {
                setPayload({ ...payload, city: e.target.value });
              }}
            >
              <option value="Ankara">Ankara</option>
              <option value="İzmir">İzmir</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              <b>Password</b>
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              onChange={(e) => {
                setPayload({ ...payload, password: e.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              <b>Upload Photo</b>
            </label>
            <input
              type="file"
              className="form-control"
              placeholder=""
              accept=".png, .jpg"
              onChange={(e) => {
                setImageUpload(e.target.files[0]);
                setPayload({ ...payload, file: e.target.files[0].name });
              }}
            />
          </div>
          <button onClick={handlePayload} className="btn btn-primary">
            Join Us !
          </button>
        </div>
        <div className="col-sm-6">
          <div id="contactgeneral">
            <img className="ecommerceImge" src={join} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
