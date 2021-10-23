import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
const Dashboard = () =>{
    return(
        <div className="DashBoard">
            {/* <h1>No Published blogs </h1>
            <button className="nav-btn">Start Writing</button> */}
            <h1>Your Publications </h1>
            <div className="Blog-list">
                <div>
                    <h1>Blog title</h1>
                    <p>This is Some Random Content of the Blog </p>
                </div>
                <div>
                    <button className="nav-btn">Read</button>
                    <button className="nav-btn">Edit</button>
                    <button className="nav-btn">Delete</button>
                </div>
            </div>
            <Link to="/write">
                <button className="nav-btn">Publish New Blog</button>
            </Link>
        </div>
    )
}

export default Dashboard;