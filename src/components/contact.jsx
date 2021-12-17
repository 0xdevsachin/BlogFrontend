import React from "react";
import '../App.css'
const contact = () =>{
    return(
        <div className="Contact">
            <h1>About Development</h1>
            <div className="Contact-content">
                <div className="Contact-div">
                    <h2>Front-End Development</h2>
                    <p> <i className="fas fa-code"></i> HTML, CSS, JavaScript</p>
                    <p> <i className="fas fa-code"></i> FrameWork : ReactJS</p>
                </div>
                <div className="Contact-div">
                    <h2>Back-End Development</h2>
                    <p> <i className="fas fa-terminal"></i> FrameWork : NodeJS, ExpressJS</p>
                    <p> <i className="fas fa-database"></i> DataBase : MongoDB</p>
                </div>
                <div className="Contact-div">
                    <h2>Code Management</h2>
                    <p> <i className="fas fa-code-branch"></i> VC : Github</p>
                </div>
            </div>
            <h1>Connect With Me</h1>
            <h2 style={{margin:"30px auto"}}> <i className="fas fa-code"></i> Sachin Verma</h2>
            <span>
                <a href="http://github.com/0xdevsachin"><i className="fab fa-github-alt Footer-icons"></i></a>
                <a href="http://linkedin.com/in/0xsachin" style={{margin : "auto 10px"}}><i className="fab fa-linkedin Footer-icons"></i></a>
                <a href="mailto:0xsachinverma@gmail.com"><i className="fa fa-envelope Footer-icons"></i></a>
                
                </span>
        </div>
    )
}
export default contact;