import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import userStateContext from "../context/userContext";
const Navbar = () => {
  const Signout = () => {
    localStorage.removeItem("auth-token");
    setuser(null);
  };
  const { user, setuser } = useContext(userStateContext);
  const NavActive = () => {
    const navlink = document.querySelector(".nav-links");
    navlink.classList.toggle("nav-active");
    const lists = document.querySelector("ul");
    lists.addEventListener("click", () => {
      navlink.classList.remove("nav-active");
    });
  };
  return (
    <>
      <nav>
        <div className="nav-logo">
          <Link to="/" style={{textDecoration : "none", color: "white"}}>
            <h4>Blogger</h4>
          </Link>
        </div>
        <ul className="nav-links">
          {user ? (
            <>
              <Link to="/">
                <li>DashBoard</li>
              </Link>
              <Link to="/write">
                <li>Write</li>
              </Link>
              <Link to="/blogs">
                <li>Blogs</li>
              </Link>
              <Link to="/dev">
                <li>Dev</li>
              </Link>
              <Link to="/" onClick={Signout}>
                <li>
                  <button className="nav-btn">Sign Out</button>
                </li>
              </Link>
            </>
          ) : (
            <>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/blogs">
                <li>Blogs</li>
              </Link>
              <Link to="/dev">
                <li>Dev</li>
              </Link>
              <Link to="/signin">
                <li>
                  <button className="nav-btn">Sign In</button>
                </li>
              </Link>
            </>
          )}
        </ul>
        <div className="nav-menu" onClick={NavActive}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
