import { Link } from 'react-router-dom'

const SolarPanel = () => {
    return (
        <div className="solar-panel">
            <div className="solar-panel-img"></div>
            <div className="solar-panel-text">
                <h1 className="solar-panel-text-title">The future.<br/>Regenerable energy.</h1>
                <p className="solar-panel-text-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, at!
                </p>
            </div>  
            <Link to="/solar_panels" className="solar-panel-btn">Learn More</Link>
        </div>
    )
}

export default SolarPanel