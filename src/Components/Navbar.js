import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

  return (
      <header className="header">
        <NavLink className="head" to={"/"}>
          <h1>Fabrik</h1>
        </NavLink>
          <div>
            <NavLink to={"/login"}>
            <button className="btn login">Login</button>
            </NavLink>
            <NavLink to={"/SignUp"}>
            <button className="btn signup">Sign Up</button>
            </NavLink>
          </div>
      </header>
  );
};

export default Navbar;