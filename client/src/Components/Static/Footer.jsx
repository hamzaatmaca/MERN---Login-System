import React from "react";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Login System</span>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-lowercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>hamzatmaca.net
              </h6>
              <p>Where Reality Turns Into Codes ...</p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Pages</h6>
              <p>
                <a href="/" className="text-reset">
                  Home Page
                </a>
              </p>

              <p>
                <a href="contact" className="text-reset">
                  Contact
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i>Denizli, Turkey
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                hamzatmacatr@gmail.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> + 01 234 567 88
              </p>
              <p>
                <i className="fas fa-print me-3"></i> + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4">
        © 2021 Copyright:
        <a
          target="_blank"
          className="text-reset fw-bold"
          href="https://hamzaatmaca.net"
        >
          Hamza Atmaca
        </a>
      </div>
    </footer>
  );
};

export default Footer;
