import React from 'react';
import '../../App.css';
import { Link} from 'react-router-dom';
import axios from 'axios';
const Dashboard = () =>{
    return(
        <div className="DashBoard">
            <div key="0">
                <h1>No Published blogs </h1>
                <Link to="/write">
                    <button className="nav-btn">Publish First Blog </button>
                </Link>
            </div>
            <>
            <h1>Your Publications </h1>
                <div key="1" id="1" className="Blog-list">
                    <div>
                        <h1>title</h1>
                    </div>
                    <div>
                        <Link to={`/readblog/`}><button className="nav-btn">Read</button></Link>
                        <button onClick={() =>{
                            axios.delete(`/api/deleteBlog/"1`).catch((err) =>{
                                console.log("Error !")
                            })
                            alert("Blog deleted Successfully !")
                            document.getElementById('1').style.display ="none";
                            }} className="nav-btn">Delete</button>
                    </div>
                </div>
            <Link to="/write">
                <button className="nav-btn">Publish New Blog</button>
            </Link>
            </>
        </div>
    )
}

export default Dashboard;