import React, { useContext, useState } from "react";
import "../App.css";
import { Link, useHistory } from "react-router-dom";
import userStateContext from "../context/userContext.js";
import axios from "axios";
const Signin = () => {
  const history = useHistory();
  const { setuser } = useContext(userStateContext);
  const [luser, setlUser] = useState("");
  const [password, setpassword] = useState("");
  const userSignin = async (e) => {
    e.preventDefault();
    if (luser !== "" && password !== "") {
      let payload = { username: luser, password };
      axios.post("/api/auth/signin", payload).then((data) => {
        localStorage.setItem("auth-token", data.data.authtoken);
        setuser(data.data.authtoken);
        alert(data.data.msg);
        if(data.data.success){
            history.push("/");
        }
      });
      setlUser("");
      setpassword("");
    } else {
      setuser(null);
      setlUser("");
      setpassword("");
      alert("Something Went Wrong :(");
    }
  };
  return (
    <>
      <div className="Signin">
        <div className="Sign-in-form">
          <form action="" onSubmit={userSignin} className="input-form">
            <h1>Sign In</h1>
            <hr
              style={{
                width: "90%",
                margin: "auto",
                marginTop: "20px",
                marginBottom: "50px",
              }}
            />
            <label htmlFor="">
              <i className="fa fa-user icon"> </i>
            </label>
            <input
              type="text"
              autoComplete="username"
              value={luser}
              placeholder="Email"
              required
              onChange={(e) => {
                setlUser(e.target.value);
              }}
            />
            <br />
            <label htmlFor="">
              <i className="fa fa-key icon"> </i>
            </label>
            <input
              type="password"
              autoComplete="current-password"
              value={password}
              placeholder="Password"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              required
            />
            <br />
            <div className="form-link">
              <Link to="/signup">
                <p className="form-link2">Create new account</p>
              </Link>
            </div>
            <button className="Sign-btn">Sign In</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
