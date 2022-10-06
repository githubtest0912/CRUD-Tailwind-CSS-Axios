import React, { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "./Context/AuthProvider";
import { NavLink } from "react-router-dom";
import axios from "./api/axios";

const LOGIN_URL = "/auth";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  // ref for user and error
  const userRef = useRef();
  const errRef = useRef();

  // useState

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  // error message when user change any username or password
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  // handleSubmit the form

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(user, pwd);
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ userName: user, password: pwd }),
        {
          headers: { "content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data))
      console.log(JSON.stringify(response))
      const accessToken = response?.data?.accessToken;
      console.log('accessToken', accessToken)
      const roles = response?.data?.roles;
      console.log('roles', roles)
      setAuth({user, pwd, roles, accessToken})
      setUser("");
      setPwd("");
      setSuccess(true);
    } catch (err) {
      if(!err?.response){
        setErrMsg('No server response')
      }else if(err.response?.status === 400) {
        setErrMsg('Missing Username or Password')
      }else if(err.response?.status === 401) {
        setErrMsg('Unauthorized')
      }else {
        setErrMsg('Login Failed')
      }
      errRef.current.focus()
    }
  };

  return (
    <>
      {/* // if user successfully logged in */}
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="/">Go to Home</a>
          </p>
        </section>
      ) : (
        <section>
          {/* // Accessible Rich Internet Applications (aria) - more accessible to people with disabilities.  */}
          {/* aria-live = screen reader */}

          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 w-60">
              <label htmlFor="username" className="form-label fw-bold">
                Username:
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />
            </div>
            <div className="mb-3 w-60">
              <label htmlFor="password" className="form-label fw-bold">
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Sign In
            </button>
          </form>
          <div className="py-2">
            <p>
              Need an Account?
              <NavLink to="/register">
                <span>Sign Up</span>
              </NavLink>
            </p>
          </div>
        </section>
      )}
    </>
  );
};

export default Login;
