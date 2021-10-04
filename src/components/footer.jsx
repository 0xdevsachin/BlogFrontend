import React from "react";


const Footer = () =>{
    return(
        <>
        <div className='Footer-Area'>
        <div className='Footer'>
            <div><h3>Logo</h3></div>
            <div>
                <ul className='Social-Footer-li'>
                    <li>icon</li>
                    <li>icon</li>
                    <li>icon</li>
                    <li>icon</li>
                    <li>icon</li>
                </ul>
            </div>
        </div>
        <div className='Footer-hr'>
        <hr  />
        <p style={{textAlign:'center',color:'white',margin:'12px 0'}}>&#169;2021. All rights Reserved</p>
        <p style={{textAlign:'center',color:'white',margin:'12px 0'}}>Created by <a rel='noreferrer' href="https://github.com/0xdevsachin" style={{color:'white'}} target='_blank'>Dev Sachin</a></p>
        </div>
        </div>
        </>
    )
}

export default Footer;