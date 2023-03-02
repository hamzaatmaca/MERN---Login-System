import React, { useEffect } from "react";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const handleLogin = () => {
    window.location.pathname = "login";
  };

  const handleLogout = () => {
    localStorage.removeItem("ai.token");
    window.location.pathname = "/";
  };

  const handleRegister = () => {
    window.location.pathname = "register";
  };

  const { loginStatus } = useAuth();

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Login System
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <div className="d-flex" role="search">
              &nbsp;
              <button
                onClick={loginStatus === true ? handleLogout : handleLogin}
                className="btn btn-outline-primary"
                type="submit"
              >
                {loginStatus !== true ? "Login" : "Logout"}
              </button>
              &nbsp;
              <button
                onClick={handleRegister}
                className="btn btn-outline-warning"
                type="submit"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
