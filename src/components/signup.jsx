import React from "react";
import '../App.css';
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";
const Signup = () =>{
    var history = useHistory();
    var FormData = {
        username:"",
        email:"",
        password:"",
        cpassword:""
    } 
    const Register = async (e) =>{
        e.preventDefault();
        if(FormData.cpassword === FormData.password){
            console.log(FormData);
            axios.post("/api/auth/signup", FormData).then((data)=>{
                console.log(data);
                alert(data.data.msg);
                if(data.data.redirect){
                    history.push("/signin")
                }
            }).catch((err)=>{
                console.log(err);
            })
        }
        else{
            alert("Password & Confirm Password must be same")
        }
    }
    return(
        <>
        <div className="Signin">
            <div className="Sign-in-form">
                <form  onSubmit={Register} method="POST" className="input-form">
                    <h1>Sign Up</h1>
                    <hr style={{width:'90%', margin:'auto', marginTop:'20px', marginBottom:'50px'}} />
                    <label htmlFor=""><i className="fa fa-user icon"> </i></label>
                    <input type="text" placeholder="Username" required className="inputs" onChange={(e)=>{FormData.username = e.target.value;}} />
                    <br />
                    <label htmlFor=""><i className="fa fa-envelope icon"> </i></label>
                    <input type="email" placeholder="Email" required className="inputs" onChange={(e)=>{FormData.email = e.target.value;}} />
                    <br />
                    <label htmlFor=""><i className="fa fa-key icon"> </i></label>
                    <input type="password" placeholder="Password" required className="inputs" onChange={(e)=>{FormData.password = e.target.value;}} />
                    <br />
                    <label htmlFor=""><i className="fa fa-key icon"> </i></label>
                    <input type="password" placeholder="Confirm Password" required className="inputs" onChange={(e)=>{FormData.cpassword = e.target.value;}} />
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