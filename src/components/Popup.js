import React, { useState, useEffect } from 'react'

const Popup = ({ name, id, setOpen }) => {
    

    return (
        <div className="popup">
            <div className="popup-content">
                <button onClick={ () => setOpen(false) } className="popup-close">x</button>
                <div className={`popup-content-img popup-content-img-${id}`}></div>
                <div className="popup-content-text">
                    <h1 className="popup-content-text-title">{ id + ":" + name }</h1>
                    <div className="popup-content-text-para">
                        <span>Top speed: 295</span>
                        <span>foo: bar</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup
