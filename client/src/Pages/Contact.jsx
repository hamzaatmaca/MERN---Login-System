import React, { useState } from "react";
import useFetch from "../Hooks/useFetch";
import useValidation from "../Hooks/useValidation";

import swal from "sweetalert";

import ecommerce from "../Images/e-commerce.jpg";

const Contact = React.memo(() => {
  const [payload, setPayload] = useState({
    firstname: null,
    lastname: null,
    phone: null,
    email: null,
    message: null,
  });

  const handlePayload = () => {
    const validate = useValidation(payload);

    if (validate) {
      useFetch("contact", "POST", payload)
        .then((res) => {
          console.log(res);
          swal(res.data.data);
        })
        .catch((err) => {
          console.log(err);
          swal("Message Not Send");
        });
    } else {
      swal(err.response.data.data);
    }
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-sm-6">
          <h2>Contact With Us</h2>
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
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              <b>Message</b>
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={(e) => {
                setPayload({ ...payload, message: e.target.value });
              }}
            ></textarea>
          </div>
          <button onClick={handlePayload} className="btn btn-primary">
            Send Mail
          </button>
        </div>
        <div className="col-sm-6">
          <div id="contactgeneral">
            <img className="ecommerceImge" src={ecommerce} />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Contact;
