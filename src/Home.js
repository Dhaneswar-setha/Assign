import React from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <center>
          <section className="vh-100">
            <div className="container-fluid h-custom">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-9 col-lg-6 col-xl-5">
                  <img
                    style={{ width: "150px", height: "70px" }}
                    src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png"
                    className="img-fluid"
                    alt="Sample image"
                  />
                </div>
                <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                  <form>
                    <h1 style={{ MozTextBlink: "blink" }}>WELLCOME</h1>

                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example3"
                        className="form-control form-control-lg"
                        placeholder="Enter a valid email address"
                      />
                      <label className="form-label" for="form3Example3">
                        Email address
                      </label>
                    </div>

                    <div className="form-outline mb-3">
                      <input
                        type="password"
                        id="form3Example4"
                        className="form-control form-control-lg"
                        placeholder="Enter password"
                      />
                      <label className="form-label" for="form3Example4">
                        Password
                      </label>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                      <div className="form-check mb-0">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3"
                        />
                        <label className="form-check-label" for="form2Example3">
                          Remember me
                        </label>
                      </div>
                    </div>

                    <div className="text-center text-lg-start mt-4 pt-2">
                      <button
                        type="button"
                        className="btn btn-primary btn-lg"
                        style={{
                          paddingleft: "2.5rem",
                          paddingright: "2.5rem"
                        }}
                      >
                        {" "}
                        <Link className="nav-link" to="/about">
                          Login
                        </Link>
                      </button>
                      <p class="small fw-bold mt-2 pt-1 mb-0">
                        <Link className="nav-link" to="/register">
                          Don't have an account?
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </center>
      </div>
    );
  }
}
