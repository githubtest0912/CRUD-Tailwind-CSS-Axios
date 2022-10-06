import React from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <div className="container">
      <div className="flex justify-center py-5 align-content-center">
        <form>
          <div className="mb-3 w-60">
            <label for="username" className="form-label fw-bold">
              Username:
            </label>
            <input type="email" className="form-control" id="username" />
          </div>
          <div className="mb-3 w-60">
            <label for="exampleInputEmail1" className="form-label fw-bold">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            
          </div>
          <div className="mb-3 w-60">
            <label for="exampleInputPassword1" className="form-label fw-bold">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <NavLink to="/login">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default Register;
