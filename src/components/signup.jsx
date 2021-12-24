import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
const Signup = () => {
  var history = useHistory();
  const [uname, setuname] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [cpass, setcpass] = useState("");
  const Register = async (e) => {
    e.preventDefault();
    if(uname.length < 4){
      alert("Username should be at least 4 characters");
      return;
    }
    if (pass.length < 6) {
      alert("Password should be at least 6 characters");
      return;
    }
    if (pass === cpass) {
      var FormData = {
        username: uname,
        email,
        password: pass,
        cpassword: cpass,
      };
      console.log(FormData);
      axios
        .post("/api/auth/signup", FormData)
        .then((data) => {
          console.log(data);
          alert(data.data.msg);
          if (data.data.success) {
            history.push("/signin");
            setuname("");
            setemail("");
            setpass("");
            setcpass("");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Password & Confirm Password must be same");
    }
  };
  return (
    <>
      <div className="Signin">
        <div className="Sign-in-form">
          <form onSubmit={Register} method="POST" className="input-form">
            <h1>Sign Up</h1>
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
              placeholder="Username"
              required
              className="inputs"
              onChange={(e) => {
                setuname(e.target.value);
              }}
            />
            <br />
            <label htmlFor="">
              <i className="fa fa-envelope icon"> </i>
            </label>
            <input
              type="email"
              autoComplete="username"
              placeholder="Email"
              required
              className="inputs"
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <br />
            <label htmlFor="">
              <i className="fa fa-key icon"> </i>
            </label>
            <input
              type="password"
              autoComplete="new-password"
              placeholder="Password"
              required
              className="inputs"
              onChange={(e) => {
                setpass(e.target.value);
              }}
            />
            <br />
            <label htmlFor="">
              <i className="fa fa-key icon"> </i>
            </label>
            <input
              type="password"
              autoComplete="new-password"
              placeholder="Confirm Password"
              required
              className="inputs"
              onChange={(e) => {
                setcpass(e.target.value);
              }}
            />
            <br />
            <div className="form-link">
              <Link to="/signin">
                <p className="form-link2">Already have an account</p>
              </Link>
            </div>
            <button className="Sign-btn">Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
