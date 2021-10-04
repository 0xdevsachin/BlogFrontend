import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
const navbar = () =>{
    const NavActive =  () =>{
        const navlink = document.querySelector('.nav-links');
        navlink.classList.toggle('nav-active');
    }
    return(
        <>
        <nav>
            <div className='nav-logo'>
                <h4>Logo</h4>
            </div>
            <ul className="nav-links">
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to="/work">
                    <li>Work</li>
                </Link>
                <Link to="/contact">
                    <li>Contact</li>
                </Link>
                <Link to="/signin">
                    <li><button className="nav-btn">Sign In</button></li>
                </Link>
            </ul>
           <div className='nav-menu' onClick={NavActive}>
               <div className='line1'></div>
               <div className='line2'></div>
               <div className='line3'></div>
           </div>
        </nav>
        </>
    );
}

export default navbar;