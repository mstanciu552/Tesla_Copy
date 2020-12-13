import { Link } from 'react-router-dom'

const Card = ({ name, img, sub, id, btn, border, popup, func }) => {
    let model = "";

    if (id === "1")
        model = "3";
    else if (id === "2")
        model = "s";
    else if (id === "3")
        model = "x";
    else
        model = "y";


    return (
        <div  className={`card ${ border === "none" ? "border-rad-none" : undefined }`}>
            {
                btn === "false" ?
                undefined
                :
                <div className={`card-img card-img-${ img } ${ border === "none" ? "border-rad-none" : undefined }`} ></div>
                
            }
            <div className="card-text">
                <div className="card-text-title">{ name }</div>
                <div className="card-text-subtitle">{ sub }</div>
                {
                    popup === "true" ? <button className="card-btn" onClick={() => func(name, id)}>More</button> :
                    <Link id={ id } to={ `/model-${model}` } className="card-btn">More</Link>
                }
            </div>
        </div>
    )
}

export default Card
