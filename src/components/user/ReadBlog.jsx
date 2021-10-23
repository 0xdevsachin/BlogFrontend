import axios from "axios";
import React, {useEffect, useState} from "react";
import "../../App.css";


const ReadBlog = () =>{
    const [readblogs, setBlogs] = useState([{
        BlogTitle : '',
        BlogContent : '',
        _id :''
    }]);
    const getblog = async () =>{
        await axios.get('/api/Getblog').then((data) =>{
            console.log(data.data);
            setBlogs(data.data);
        })
    }
    useEffect(() =>{
        getblog();
    },[])
    return(
        <div className ="ReadBlog">
            <div className="ReadBlogContent">
                <h1>{readblogs[0].BlogTitle}</h1>
                <p>{readblogs[0].BlogContent}</p>
                <p>Published By : {readblogs[0]._id}</p>
            </div>
        </div>
    )
}

export default ReadBlog;