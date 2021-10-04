import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';
const About = ()=>{
    return(
        <>
        <div className="About">
        <div className='About-header'>
            <h1>About Blogger</h1>
        </div>
        <div className="About-Content">
            <div>
                <p>Online Publishing Platform. Where you can Read about job opportunities, career advice, expert's insights, new features and products.
                We got you covered with fact-based articles Gwoth and career guides.</p>
            </div>
            <div className="cardDiv">
                <div className='card'>
                    <p>Technology</p>
                    <span className='card-content'>
                        Read about Latest Technology released in market.
                    </span>
                </div>
                <div className='card'>
                    <p>Jobs</p>
                    <span className='card-content'>
                        Get Updated with Latest jobs.
                    </span>
                </div>
                <div className='card'>
                    <p>Carrers</p>
                    <span className='card-content'>
                        Read About Some Carrer Tips
                    </span>
                </div>
                <div className='card'>
                    <p>Write</p>
                    <span className='card-content'>
                        Write and share your blogs with the world.
                    </span>
                </div>
            </div>   
        </div>
        <div>
           <Link to="/about"> <button className="About-btn">Write blog</button></Link>
        </div>
        </div>
        </>
    );
}

export default About;