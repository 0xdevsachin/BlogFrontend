import React, { useEffect, useState } from 'react';
import '../../App.css';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
const Dashboard = () =>{
    const [Blog, setBlog] = useState([{
        BlogTitle : '',
        BlogContent : '',
        _id : ''
    }])
    const data = localStorage.getItem('Bloglogin')
    const history = useHistory();
    if(!data){
        alert("Oops something Went Wrong! Please Sign in Again")
        window.location.reload();
        history.push('/signin');
    }
    useEffect(() =>{
        async function fetchData(){
            var local = localStorage.getItem('Bloglogin');
        await axios.post(`/api/getuserblog/${local}`).then((recvdata) =>{
            setBlog(recvdata.data);
        }).catch((err) =>{
            console.log(err);
        })
    }
    fetchData();
    }, [])
    return(
        <div className="DashBoard">
            {Blog.length === 0 ? (
                <div key="0">
                    <h1>No Published blogs </h1>
                    <Link to="/write">
                        <button className="nav-btn">Publish First Blog </button>
                    </Link>
                </div>
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