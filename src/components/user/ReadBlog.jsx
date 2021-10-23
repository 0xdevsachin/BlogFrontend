import axios from "axios";
import React, {useEffect, useState} from "react";
import "../../App.css";
import { Link } from "react-router-dom";

const ReadBlog = ({match}) =>{
    const [readblogs, setBlogs] = useState([{
        BlogTitle : '',
        BlogContent : '',
        BlogImage :'',
        _id :'',
        msg : '',
        code : ''
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
                {(readblogs.code) ? (
                    <div style={{textAlign:"center", marginTop: "120px"}}>
                    <h1>Error {readblogs.code}</h1>
                    <h3 style={{margin:"50px auto"}}>{readblogs.msg} 😟</h3>
                    <Link to ="/work"><button className="nav-btn">Go Back</button></Link>
                    </div>
                ) : (
                    <>
                    <h1>{readblogs.BlogTitle}</h1>
                    {readblogs.BlogImage !== '' ? <img src={readblogs.BlogImage} style={{height:"50vh", width:"100%", objectFit:"contain", margin:"20px auto"}} alt="Blog" /> : <p></p>}
                    <p>{readblogs.BlogContent}</p>
                    <p>Published By : {readblogs._id}</p>
                    </>
                )}
            </div>
        </div>
    )
}

export default ReadBlog;