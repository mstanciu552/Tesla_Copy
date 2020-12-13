import Menu from './Menu'
import { Link } from 'react-router-dom'

const Model = ({ type }) => {

    return (
        <div className={`model model-${type}`}>
            <Menu></Menu>

            <div className="model-page">
                <Link to="/" className="model-logo"></Link>
                <div className="model-text">
                    <h1 className="model-text-title">Model { type }</h1>
                    <p className="model-text-para"></p>
                </div>
                <div className="model-galery">
                    <div className="model-galery-img" id={`img-1-${type}`}></div>
                    <div className="model-galery-img" id={`img-2-${type}`}></div>
                    <div className="model-galery-img" id={`img-3-${type}`}></div>
                    <div className="model-galery-img" id={`img-4-${type}`}></div>
                    <div className="model-galery-img" id={`img-5-${type}`}></div>
                    <div className="model-galery-img" id={`img-6-${type}`}></div>
                    <div className="model-galery-img" id={`img-7-${type}`}></div>
                    <div className="model-galery-img" id={`img-8-${type}`}></div>
                    <div className="model-galery-img" id={`img-9-${type}`}></div>
                </div>
            </div>
        </div>
    )
}

export default Model
