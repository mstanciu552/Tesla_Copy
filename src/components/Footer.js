import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <p>
                    Contact us at...<br/><br/>
                    <span>Phone</span>: 07xx-xxx-xxx <br/><br/>  
                    <span>Mail</span>: tesla.contact@gmail.com <br/><br/>
                    <b>Mihai Stanciu &copy; 2020</b> 
                </p>
            </div>
            <div className="footer right">
                <div className="footer-nav-container">
                    <ul className="footer-nav">
                        <li className="footer-item"><Link to="/" className="footer-link">Home</Link></li>
                        <li className="footer-item"><Link to="/about" className="footer-link">About</Link></li>
                        <li className="footer-item"><Link to="/products" className="footer-link">Products</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
