import React from "react";
import '../App.css';
import axios from 'axios';
import { Link } from "react-router-dom";
const Signup = () =>{
    const Register = async (e) =>{
        e.preventDefault();
        axios.post('/api').then((data)=>{
            console.log(data.data);
        }).catch((err)=>{
            console.log(err);
        })
    }
    return(
        <>
        <div className="Signin">
            <div className="Sign-in-form">
                <form  onSubmit={Register} method="POST" className="input-form">
                    <h1>Sign Up</h1>
                    <hr style={{width:'90%', margin:'auto', marginTop:'20px', marginBottom:'50px'}} />
                    <label htmlFor=""><i className="fa fa-user icon"> </i></label>
                    <input type="text" placeholder="Username" />
                    <br />
                    <label htmlFor=""><i className="fa fa-envelope icon"> </i></label>
                    <input type="text" placeholder="Email" />
                    <br />
                    <label htmlFor=""><i className="fa fa-key icon"> </i></label>
                    <input type="password" placeholder="Password" />
                    <br />
                    <label htmlFor=""><i className="fa fa-key icon"> </i></label>
                    <input type="password" placeholder="Confirm Password" />
                    <br />
                    <div className="form-link">
                        <Link to="/signin"><p className="form-link2">Already have an account</p></Link>
                    </div>
                    <button className="Sign-btn">Sign Up</button>
                </form>
            </div>

        </div>
        </>
    )
}

export default Signup;