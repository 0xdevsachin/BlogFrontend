import React, { useContext, useState, useEffect } from "react";
import '../../App.css';
import axios from 'axios';
import userStateContext from "../../context/userContext.js";
import { useHistory } from "react-router-dom";
const Write = () =>{
    const { user, setuser } = useContext(userStateContext)
    const [BlogTitle, settitle] = useState('')
    const [BlogImage, setImage] = useState('')
    const [BlogContent, setcontent] = useState('')
    const history = useHistory();
    const SubmitBlog = (e) =>{
        e.preventDefault();
        console.log()
        if(BlogContent && BlogTitle && BlogImage){
            var payload = { BlogTitle, BlogContent, BlogImage};
            axios.post("/api/publishblog", payload, {headers : {
                "auth-token" : user
            }}).then((data) =>{
                console.log(data)
                alert(data.data.msg)
            })
            setImage('')
            setcontent('')
            settitle('')
        }
    }
    useEffect(() =>{
        const checkAuth = () =>{
            if(localStorage.getItem("auth-token") !== user){
                localStorage.removeItem("auth-token")
                setuser(null);
                alert("Please Login Again to Continue")
                history.push("/signin")
            }
        }
        checkAuth();
        // eslint-disable-next-line
    }, [])
    return(
        <div className="writeBlog">
            <form action="" onSubmit={SubmitBlog} className="writeBlog-form">
                <h2>Title </h2>
                <input type="text" value={BlogTitle} placeholder="Blog Title" required onChange={(e) =>{settitle(e.target.value)}}/>
                <h2>Image Link</h2>
                <input type="text" value={BlogImage} placeholder="Image Link" onChange={(e) => {setImage(e.target.value)}} />
                <h2>Blog Content</h2>
                <textarea name="" value={BlogContent} placeholder="Blog Content" cols="30" rows="10" required onChange={(e) => {setcontent(e.target.value)}}></textarea>
                <br />
                <button className="Sign-btn">Save</button>
                </form>
        </div>
    )
}
export default Write;