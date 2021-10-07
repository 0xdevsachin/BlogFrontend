import React from "react";
import '../App.css';
import { Link } from "react-router-dom";
const Signin = () =>{
    return(
        <>
        <div className="Signin">
            <div className="Sign-in-form">
                <form action="" onSubmit={(e)=>{
                    e.preventDefault();
                }} className="input-form">
                    <h1>Sign In</h1>
                    <hr style={{width:'90%', margin:'auto', marginTop:'20px', marginBottom:'50px'}} />
                    <label htmlFor=""><i className="fa fa-user icon"> </i></label>
                    <input type="text" placeholder="Email" />
                    <br />
                    <label htmlFor=""><i className="fa fa-key icon"> </i></label>
                    <input type="password" placeholder="Password" />
                    <br />
                    <div>
                        <Link to="/signup"><p className="form-link">Create new account</p></Link>
                    </div>
                    <button className="Sign-btn">Sign In</button>
                </form>
            </div>

        </div>
        </>
    )
}

export default Signin;