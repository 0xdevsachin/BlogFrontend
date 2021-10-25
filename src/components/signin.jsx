import React from "react";
import '../App.css';
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
const Signin = () =>{
    const history = useHistory()
    var FormData = {
        username:"",
        password:"",
    }
    const userSignin = (e) =>{
        e.preventDefault();
        if(FormData.username !== '' && FormData.password !== '' ){
            axios.post("/api/auth/signin", FormData).then((data)=>{
                console.log(data);
                alert(data.data.msg)
                localStorage.setItem('Bloglogin', data.data.user._id);
                window.location.reload();
                history.push('/');
            }).catch((err)=>{
                console.log(err);
                localStorage.removeItem('Bloglogin');
            })
        }
        else{
            alert("Something Went Wrong :(")
            localStorage.removeItem('Bloglogin');
            history.push('/signin')
        }
    }
    return(
        <>
        <div className="Signin">
            <div className="Sign-in-form">
                <form action="" onSubmit={userSignin} className="input-form">
                    <h1>Sign In</h1>
                    <hr style={{width:'90%', margin:'auto', marginTop:'20px', marginBottom:'50px'}} />
                    <label htmlFor=""><i className="fa fa-user icon"> </i></label>
                    <input type="text" placeholder="Email" required onChange={(e) =>{FormData.username = e.target.value}} />
                    <br />
                    <label htmlFor=""><i className="fa fa-key icon"> </i></label>
                    <input type="password" placeholder="Password" onChange={(e) =>{FormData.password = e.target.value}} required />
                    <br />
                    <div className="form-link">
                        <Link to="/signup"><p className="form-link2">Create new account</p></Link>
                    </div>
                    <button className="Sign-btn">Sign In</button>
                </form>
            </div>

        </div>
        </>
    )
}

export default Signin;