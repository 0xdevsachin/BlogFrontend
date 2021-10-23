import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../App.css';
const Navbar = ({ index }) =>{
    const history = useHistory();
    console.log(`NavBar Index : ${index}`)
    const loginStatus = localStorage.getItem('Bloglogin');
    const [navState] = useState([
        [{
            title : "Home",
        },
        {
            title2 : "About",
            link : "/about"
        },
        {
            title3 : "Blogs"
        },
        {
            title4 : "Contact",
        },
    ],[
        {
            title : "DashBoard",
        },
        {
            title2 : "Write",
            link : "/write"
        },
        {
            title3 : "Blogs"
        },
        {
            title4 : "Contact",
        }
    ]
    ]);
    console.log(loginStatus);
    console.log(navState)
    const removeItem = () =>{
        localStorage.removeItem('Bloglogin')
        window.location.reload();
        history.push('/signin')
    }
    const NavActive =  () =>{
        const navlink = document.querySelector('.nav-links');
        navlink.classList.toggle('nav-active');
        const lists = document.querySelector('ul');
        lists.addEventListener('click', ()=>{
            navlink.classList.remove('nav-active');
        })
    }
    return(
        <>
        <nav>
            <div className='nav-logo'>
                <h4>Logo</h4>
            </div>
            <ul className="nav-links">
            <Link to="/">
                        <li>{navState[index][0].title}</li>
                    </Link>
                    <Link to={navState[index][1].link}>
                        <li>{navState[index][1].title2}</li>
                    </Link>
                    <Link to="/blogs">
                        <li>{navState[index][2].title3}</li>
                    </Link>
                    <Link to="/contact">
                        <li>{navState[index][3].title4}</li>
                    </Link>
                    {index == 1 ? (
                        <>
                            <li><button onClick={removeItem} className="nav-btn">Sign Out</button></li>
                        </>
                    ) : (
                        <>
                        <Link to="/signin">
                            <li><button className="nav-btn">Sign In</button></li>
                        </Link>
                        </>
                    )}
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

export default Navbar;