import React, { useContext, useState } from "react";
import '../../App.css';
import axios from 'axios';
import userStateContext from "../../context/userContext.js";
const Write = () =>{
    const { user } = useContext(userStateContext)
    const [BlogTitle, settitle] = useState('')
    const [BlogImage, setImage] = useState('')
    const [BlogContent, setcontent] = useState('')
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
    return(
        <div className="writeBlog">
            <form action="" onSubmit={SubmitBlog} className="writeBlog-form">
                <h2>Title </h2>
                <input type="text" value={BlogTitle} placeholder="Blog Title" required onChange={(e) =>{settitle(e.target.value)}}/>
                <h2>Image Link</h2>
                <input type="text" value={BlogImage} placeholder="Enter Public Image Link (if any)" onChange={(e) => {setImage(e.target.value)}} />
                <h2>Blog Content</h2>
                <textarea name="" value={BlogContent} placeholder="Write Content" cols="30" rows="10" required onChange={(e) => {setcontent(e.target.value)}}></textarea>
                <br />
                <button className="Sign-btn">Save</button>
                </form>
        </div>
    )
}
export default Write;