import React from "react";
import '../../App.css';
// import axios from 'axios';
const Write = () =>{
    var BlogData = {
        BlogTitle : "",
        BlogImage:"",
        BlogContent:"",
        PublishName : ""
    }
    const SubmitBlog = (e) =>{
        e.preventDefault();
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
                <h2>Publisher Name</h2>
                <input type="text" placeholder="Enter Name" onChange={(e) => {BlogData.PublishName = e.target.value}} />
                <br />
                <button className="Sign-btn">Save</button>
                </form>
        </div>
    )
}
export default Write;