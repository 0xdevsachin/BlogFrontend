import React, {useState} from "react";
import { Link } from "react-router-dom";
import '../App.css';
const Work = () =>{
    const [blog] = useState([
        {
            'title':"Blog 1",
            'about': "This is Some Random Text",
            'link' : "/work"
        },
        {
            'title':"Blog 2",
            'about': "This is Some Random Text",
            'link' : "/work"
        },
        {
            'title':"Blog 3",
            'about': "This is Some Random Text",
            'link' : "/work"
        },
        {
            'title':"Blog 4",
            'about': "This is Some Random Text",
            'link' : "/work"
        },
        {
            'title':"Blog 5",
            'about': "This is Some Random Text",
            'link' : "/work"
        },
        {
            'title':"Blog 6",
            'about': "This is Some Random Text",
            'link' : "/work"
        }
    ])
    return(
        <>
        <div className="Work-bg">
            {blog.map((myblog)=>{
                return(
                    <div>
                        <h3>{myblog.title}</h3>
                        <p>{myblog.about}</p>
                        <Link to={myblog.link}><button className="Work-btn">Read</button></Link>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Work;