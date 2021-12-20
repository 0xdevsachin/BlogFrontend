import React, { useContext, useEffect, useState } from 'react';
import '../../App.css';
import { Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import userStateContext from '../../context/userContext';
const Dashboard = () =>{
    const { user, setuser } = useContext(userStateContext);
    const history = useHistory();
    const [Blog, setBlog] = useState([{
        BlogTitle : '',
        BlogContent : '',
        _id : ''
    }])
    useEffect(() =>{
        async function fetchData(){
        if(localStorage.getItem("auth-token") === user){
            await axios.post("/api/getuserblog", {}, {
                headers : {
                    "auth-token" : user
                }
            }).then((recvdata) =>{
                setBlog(recvdata.data);
                if(recvdata.data.authError){
                    setuser(null);
                    history.push('/signin')
                }
            }).catch((err) =>{
                console.log(err);
            })
        }else{
            localStorage.removeItem("auth-token")
            alert("Please Login Again to Continue")
            setuser(null);
            history.push('/signin')
        }
    }
    fetchData();
    // eslint-disable-next-line
    }, [])
    const DeleteBlog = async(id) =>{
        if(localStorage.getItem("auth-token") !== user){
            localStorage.removeItem("auth-token")
            alert("Please Login Again to Continue")
            setuser(null);
            history.push('/signin')
            return
        }
        if(!window.confirm("Are you Sure ?")) return
        const updatedblog = Blog.filter((index,_id) => index._id !== id )
        setBlog(updatedblog)
        await axios.delete(`/api/deleteBlog/${id}`, {
            headers : {
                "auth-token" : user
            }
        })
        alert("Blog deleted Successfully !")
    }
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
                            <Link to={`/updateblog/${blog._id}`}><button className="nav-btn">Update</button></Link>
                            <button onClick={() => { DeleteBlog(blog._id)}} className="nav-btn">Delete</button>
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