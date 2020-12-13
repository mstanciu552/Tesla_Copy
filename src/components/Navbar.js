import { Link } from "react-router-dom"

const Navbar = () => {

    return (
        <nav>
            <Link className="nav-icon" to="/"><div className="nav-icon-img"></div></Link>
            <ul className="navbar">
                <li className="navbar-item"><Link to="/" className="navbar-link">Home</Link></li>
                <li className="navbar-item"><Link to="/about" className="navbar-link">About</Link></li>
                <li className="navbar-item"><Link to="/products" className="navbar-link">Products</Link></li>
            </ul>
            <div className="nav-center"></div>       
        </nav>
    )
}

export default Navbar;