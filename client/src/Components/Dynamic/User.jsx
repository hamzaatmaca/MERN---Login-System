import React from "react";
import useAuth from "../../Hooks/useAuth";
import { staticEndpoint } from "../../utils/endpoint";

const User = () => {
  const { loginStatus, userInfo } = useAuth();

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-5">
          <section>
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="card" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-4">
                    <div className="d-flex text-black">
                      <div>
                        <img
                          src={staticEndpoint + userInfo.photo}
                          alt="Generic placeholder image"
                          className="img-fluid"
                          style={{ width: "180px", borderRadius: "10px" }}
                        />
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h5 className="mb-1">
                          {userInfo.name + " " + userInfo.surname}
                        </h5>
                        <p className="mb-2 pb-1" style={{ color: "#2b2a2a" }}>
                          {userInfo.email}
                        </p>
                        <div
                          className="d-flex justify-content-start rounded-3 p-2 mb-2"
                          style={{ backgroundColor: "#efefef" }}
                        >
                          <div>
                            <p className="small text-muted mb-1">Country</p>
                            <p className="mb-0">{userInfo.country}</p>
                          </div>
                          <div className="px-3">
                            <p className="small text-muted mb-1">City</p>
                            <p className="mb-0">{userInfo.city}</p>
                          </div>
                          <div>
                            <p className="small text-muted mb-1">Phone</p>
                            <p className="mb-0">{userInfo.phone} </p>
                          </div>
                        </div>
                        {/* <div className="d-flex pt-1">
                            <button
                              type="button"
                              className="btn btn-outline-primary me-1 flex-grow-1"
                            >
                              Chat
                            </button>
                            <button
                              type="button"
                              className="btn btn-primary flex-grow-1"
                            >
                              Follow
                            </button>
                          </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="col-sm-1"></div>
        <div className="col-sm-5">
          <section>
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="card" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-4">
                    <div className="d-flex text-black">
                      <div className="flex-grow-1 ms-3">
                        <h5 className="mb-1">
                          {userInfo.name + " " + userInfo.surname}
                        </h5>
                        <p className="mb-2 pb-1" style={{ color: "#2b2a2a" }}>
                          {userInfo.email}
                        </p>
                        <div
                          className="d-flex justify-content-start rounded-3 p-2 mb-2"
                          style={{ backgroundColor: "#efefef" }}
                        >
                          <div>
                            <p className="small text-muted mb-1">Country</p>
                            <p className="mb-0">{userInfo.country}</p>
                          </div>
                          <div className="px-3">
                            <p className="small text-muted mb-1">City</p>
                            <p className="mb-0">{userInfo.city}</p>
                          </div>
                          <div>
                            <p className="small text-muted mb-1">Phone</p>
                            <p className="mb-0">{userInfo.phone} </p>
                          </div>
                        </div>
                        {/* <div className="d-flex pt-1">
                            <button
                              type="button"
                              className="btn btn-outline-primary me-1 flex-grow-1"
                            >
                              Chat
                            </button>
                            <button
                              type="button"
                              className="btn btn-primary flex-grow-1"
                            >
                              Follow
                            </button>
                          </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default User;
