import { useState } from 'react'
import { Link } from 'react-router-dom'

const Menu = ({ color }) => {
    const [display, setDisplay] = useState(false)


    return (
        <div className="menu">
            <span style={ color === "white" ? { color: "#fff" } : {}} onClick={ () => setDisplay(true) } className="menu-icon">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>    
            </span>
            <ul style={ display ? { display: "flex" } : { display: "none" } } className="menu-list">
                <svg onClick={ () => setDisplay(false) } className="menu-close" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <li className="menu-item">
                    <Link to="/" className="menu-link">
                        <svg className="menu-link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <span>Home</span>
                        <div className="centering"></div>
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to="/about" className="menu-link">
                        <svg className="menu-link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>About</span>
                        <div className="centering"></div>
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to="/production" className="menu-link">
                        <svg className="menu-link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                        <span>Products</span>
                        <div className="centering"></div>
                    </Link>
                </li>
                <div className="centering"></div>
            </ul>
        </div>
    )
}

export default Menu
