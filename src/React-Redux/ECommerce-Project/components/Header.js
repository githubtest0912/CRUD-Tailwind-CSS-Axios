import React from "react";
import { NavLink } from "react-router-dom";
import CartBtn from "./buttons/CartBtn";
import Login from "./buttons/Login";
import SignUp from "./buttons/SignUp";

const Header = () => {
  return (
    <div>
      <nav className=" navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <NavLink className="text-white navbar-brand" to="/">
            TAB MART
          </NavLink>
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
            <ul className="mb-2 navbar-nav me-auto mb-lg-0">
              <li className="nav-item">
                <NavLink className="text-white nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="text-white nav-link" to="/product">
                  Products
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="text-white nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="text-white nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
           
            
            </ul>
           
          </div>
          <Login />
          <SignUp />
          <CartBtn />
        </div>
       
      </nav>
    </div>
  );
};

export default Header;
