import React, { useContext, useEffect, useState } from 'react';
import '../../App.css';
import { Link} from 'react-router-dom';
import axios from 'axios';
import userStateContext from '../../context/userContext';
const Dashboard = () =>{
    const { user } = useContext(userStateContext);
    const [Blog, setBlog] = useState([{
        BlogTitle : '',
        BlogContent : '',
        _id : ''
    }])
    useEffect(() =>{
        async function fetchData(){
        await axios.post("/api/getuserblog", {}, {
            headers : {
                "auth-token" : user
            }
        }).then((recvdata) =>{
            setBlog(recvdata.data);
        }).catch((err) =>{
            console.log(err);
        })
    }
    fetchData();
    }, [user])
    return(
        <div className="DashBoard">
            {Blog.length === 0 ? (
                <>
                    <h1>No Published blogs </h1>
                    <Link to="/write">
                        <button className="nav-btn">Publish First Blog </button>
                    </Link>
                </>
            )
            : (
                <>
            <h1>Your Publications </h1>
            {Blog.map((blog) =>{
                return(
                    <div key={blog._id} id={blog._id} className="Blog-list">
                        <div>
                            <h1>{blog.BlogTitle}</h1>
                        </div>
                        <div>
                            <Link to={`/readblog/${blog._id}`}><button className="nav-btn">Read</button></Link>
                            <button onClick={() =>{
                                axios.delete(`/api/deleteBlog/${blog._id}`).catch((err) =>{
                                    console.log("Error !")
                                })
                                alert("Blog deleted Successfully !")
                                document.getElementById(blog._id).style.display ="none";
                            }} className="nav-btn">Delete</button>
                        </div>
                    </div>
                )
            })}
            <Link to="/write">
                <button className="nav-btn">Publish New Blog</button>
            </Link>
            </>
            )}

        </div>
    )
}

export default Dashboard;