import React from "react";
import '../../App.css';
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
const Write = () =>{
    const history = useHistory();
    var BlogData = {
        BlogTitle : "",
        BlogImage:"",
        BlogContent:"",
    }
    const SubmitBlog = (e) =>{
        e.preventDefault();
        if(BlogData.BlogTitle !== '' && BlogData.BlogContent !== ''){
            axios.post("/api/PublishBlog", BlogData).then((data) =>{
                alert("Blog Published Successfully !");
                history.push('/dashboard')
            }).catch((err) =>{
                alert(err);
            })
        }else{
            alert("Something Went Wrong !")
            history.push('/write');
        }
    }
    return(
        <div className="writeBlog">
            <form action="" onSubmit={SubmitBlog} className="writeBlog-form">
                <h2>Title </h2>
                <input type="text" placeholder="Blog Title" required onChange={(e) =>{BlogData.BlogTitle = e.target.value}}/>
                <h2>Image Link</h2>
                <input type="text" placeholder="Enter Public Image Link (if any)" onChange={(e) => {BlogData.BlogImage = e.target.value}} />
                <h2>Blog Content</h2>
                <textarea name="" placeholder="Write Content" cols="30" rows="10" required onChange={(e) => {BlogData.BlogContent = e.target.value}}></textarea>
                <br />
                <button className="Sign-btn">Save</button>
                </form>
        </div>
    )
}
export default Write;