import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const count = useSelector((state) => state.counter.value);
  return (
    <div className="navbar">
      <img src="./logo192.png" alt="" style={{ width: "100px" }} />
      <ul>
        <li>{count}</li>
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          to={"/product"}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          <li>Products</li>
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          <li>About</li>
        </NavLink>
        <NavLink
          to={"/contact"}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          <li>Contact</li>
        </NavLink>
        <NavLink
          to={"/jobs"}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          <li>Jobs</li>
        </NavLink>
      </ul>
      <button onClick={() => navigate("/about", { replace: true })}>
        Get Started
      </button>
    </div>
  );
};

export default Navbar;
