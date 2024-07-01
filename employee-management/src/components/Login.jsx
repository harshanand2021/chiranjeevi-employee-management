// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./style.css";
import axios from "axios";
import { useNavigate } from "react-router";

const Login = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/adminlogin", value)
      .then((result) => {
        if (result.data.loginStatus) {
          navigate("/dashboard");
        } else {
          setError(result.data.Error);
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
      <div className="p-3 rounded w-25 border loginForm">
        <div className='text-danger'>{error && error}</div>
        <h2>Login</h2>
        <form onSubmit={() => handleSubmit()}>
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
              onChange={(e) => setValue({ ...value, email: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              {" "}
              <strong> Password : </strong>
            </label>
            <input
              type="password"
              autoComplete="off"
              placeholder="Password"
              className="form-control rounded-0"
              onChange={(e) => setValue({ ...value, password: e.target.value })}
            />
          </div>
          <button className="btn btn-success w-100 rounded-0 mb-2">
            Submit
          </button>
          <div className="mb-1">
            <input type="checkbox" name="tick" id="tick" className="ms-1" />
            <label htmlFor="agree">Agree to terms and conditions</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
