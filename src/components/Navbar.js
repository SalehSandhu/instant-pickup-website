import React from 'react'

const navbar = () => {
    return (
        <div className="wrapper-header">
            <div className="logo">Instant Pickup</div>
            
            <div className="navbar">

                <nav className="navbar-item">
                        <a href="/" className="navbar-item">Home</a>
                        <a href="/ourMission" className="navbar-item">Our Mission</a>
                        <a href="/services" className="navbar-item">Services</a>
                        <a href="/blog" className="navbar-item">Blog</a>
                        <a href="/becomeADriver" className="navbar-item">Become A Driver</a>     
                        <a href="/aboutUs" className="navbar-item">About us</a>     
                </nav>                
            </div>
                
        </div>

        
    )
}

export default navbar
