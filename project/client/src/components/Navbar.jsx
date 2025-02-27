import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUserDetails } from "../userDetails";
import Cookies from "js-cookie";
import { Ability } from "../role/Ability";
const Navbar = () => {
  const nav = useNavigate();
  let user = getUserDetails();
  console.log(user);
  const logOut = () => {
    Cookies.remove("token");
    nav("/login");
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            {Ability(["admin"]) ? (
              <li className="nav-item">
                <Link className="nav-link" to="/assign">
                  Assign
                </Link>
              </li>
            ) : null}

            <li className="nav-item">
              {user ? (
                <p
                  className="nav-link"
                  onClick={logOut}
                  style={{ cursor: "pointer" }}
                >
                  logout
                </p>
              ) : (
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              )}
            </li>
            <li className="nav-item">
              {user ? (
                <p className="nav-link"> {user.name}</p>
              ) : (
                <Link className="nav-link" to="/signup">
                  Signup
                </Link>
              )}
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
