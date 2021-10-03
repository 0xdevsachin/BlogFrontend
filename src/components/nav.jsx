import '../App.css';

const navbar = () =>{
    const Hello =  () =>{
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
                <li>Home</li>
                <li>About</li>
                <li>Work</li>
                <li>Contact</li>
                <li><button className="nav-btn">Sign In</button></li>
            </ul>
           <div className='nav-menu' onClick={Hello}>
               <div className='line1'></div>
               <div className='line2'></div>
               <div className='line3'></div>
           </div>
        </nav>
        </>
    );
}

export default navbar;