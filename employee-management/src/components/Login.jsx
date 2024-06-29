/* eslint-disable no-unused-vars */
import React from "react";
import './style.css'

const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
      <div className="p-3 rounded w-25 border loginForm">
        <h2>Login</h2>
        <form action="">
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email ID</strong>
            </label>
            <input
              type="email"
              name="email"
              autoComplete="off"
              placeholder="Enter Email ID"
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password"> <strong> Phone No : </strong></label>
            <input
              type="password"
              autoComplete="off"
              placeholder="Password"
              className="form-control rounded-0"
            />
          </div>
          <button className="btn btn-success w-100 rounded-0">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
