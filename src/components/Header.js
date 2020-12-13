import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <div className="header-img"></div>
            <h1 className="header-text header-title">Tehnology. Inovation. Evolution.</h1>
            <p className="header-text header-subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, odio!</p>
            <Link className="header-btn btn-order" to="/about">Order now</Link>
            <Link className="header-btn btn-more" to="/about">Learn more</Link>
            
            <svg class="w-6 h-6 arr-down" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
        </div>
    )
}

export default Header
