import React from "react";
import { Link } from "react-router-dom";
const HomePage = () =>{
    return(
       <>
       <div className='Home'>
           <h1>"Don't focus on having a great blog. Focus on producing a blog that's great for your readers."</h1>
           <span>Brian Clark</span>
           <Link to="/signin"><button className="nav-btn">Publish Your blog</button></Link>
       </div>
       </>
    )
}

export default HomePage;