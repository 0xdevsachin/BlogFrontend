import axios from "axios";
import React, {useEffect, useState} from "react";
import "../../App.css";


const ReadBlog = ({match}) =>{
    const [readblogs, setBlogs] = useState([{
        BlogTitle : '',
        BlogContent : '',
        _id :''
    }]);
    const getblog = async () =>{
        const BlogData = await axios.get(`/api/Getblog/${match.params.id}`);
        setBlogs(BlogData.data);
        console.log(BlogData.data)
    }
    useEffect(() =>{
        getblog();
    },[])
    return(
        <div className ="ReadBlog">
            <div className="ReadBlogContent">
                <h1>{readblogs.BlogTitle}</h1>
                <p>{readblogs.BlogContent}</p>
                <p>Published By : {readblogs._id}</p>
            </div>
        </div>
    )
}

export default ReadBlog;