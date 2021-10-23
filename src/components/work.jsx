import axios from "axios";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import '../App.css';
const Work = () =>{
    const [blog,setBlog] = useState([])
    const fetchBlogData = async () =>{
        await axios.get('/api/Getblog').then((data) =>{
            setBlog(data.data);
        })
    }
    useEffect(() => {
        fetchBlogData();
    }, [])
    return(
        <>
        <div className="Work-bg">
            {blog.map((myblog)=>{
                return(
                    <div key={myblog._id}>
                        <h3>{myblog.BlogTitle}</h3>
                        <Link to={`readblog/${myblog._id}`}><button className="Work-btn">Read</button></Link>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Work;