import '../App.css';
const navbar = () =>{
    return(
        <nav>
            <p>logo</p>
            <ul className="nav-links">
                <li>Home</li>
                <li>About</li>
                <li>read</li>
                <li>contact</li>
            </ul>
           <button className="nav-btn">Sign in</button>
        </nav>
    );
}

export default navbar;