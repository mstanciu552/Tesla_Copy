import React from 'react'
import Navbar from './Navbar'

const About = () => {
    return (
        <React.Fragment>
            <Navbar></Navbar>    
            <div className="about">
                <div className="about-header">
                    <div className="about-header-img"></div>
                    <div className="about-header-text">
                        <h1 className="about-header-text-title">The road to the future</h1>
                        <p className="about-header-text-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, illo.</p>
                    </div>
                </div>
                <div className="about-info">
                    <div className="about-info-text">
                        <h2 className="about-info-text-title">Inovation</h2> <br/><br/>
                        <h3 className="about-info-text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, ipsa magni quisquam laborum cum ad dolorum praesentium itaque harum ut rerum libero rem non nobis natus architecto? Eius ratione numquam magni reiciendis! Atque cupiditate modi, iste, debitis sed reiciendis officia accusamus laborum maiores sequi nisi expedita facilis quidem soluta non. <br/><br/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium qui ducimus eveniet laudantium consequuntur autem ad adipisci? Maxime, reprehenderit, dignissimos impedit, ea debitis non maiores totam at ab quasi iure! <br/><br/>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate quaerat dolorem, soluta quae at consequatur est nostrum vero enim beatae earum, molestias facere quasi aliquid repellat eveniet debitis, minima quam.</h3>
                    </div>
                    <div className="about-info-img about-info-img1"></div>
                    <div className="about-info-img about-info-img2"></div>
                    <div className="about-info-img about-info-img3"></div>
                </div>
                <div className="about-wind">
                    <div className="about-wind-img"></div>
                    <div className="about-wind-text">
                        <h2 className="about-wind-text-title">Clean energy</h2>
                        <p className="about-wind-text-subtitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo velit culpa molestias deserunt nam asperiores voluptate odit perferendis cupiditate itaque. <br/><br/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quasi modi ducimus rerum fugit, vitae minima in nobis nihil? Explicabo, ad? Error explicabo neque nulla obcaecati nihil vel odio dolorem! <br/><br/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi recusandae laborum corporis, esse, quas minus nostrum doloremque, excepturi beatae iure dicta repellat ullam saepe quibusdam! At, neque? Esse dicta modi labore incidunt at quidem dolorum, omnis iste porro voluptatum consequatur debitis aliquam aperiam explicabo, eius nobis necessitatibus optio voluptates a. <br/><br/></p>
                        <div className="about-wind-text-cards">
                            <div className="about-wind-text-cards-card">
                                <h1 className="card-title">Wind Power</h1>
                                <p className="card-para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nostrum perspiciatis reprehenderit distinctio? Porro laborum saepe aliquam impedit modi recusandae.</p>
                            </div>
                            <div className="about-wind-text-cards-card">
                                <h1 className="card-title">Solar Power</h1>
                                <p className="card-para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nostrum perspiciatis reprehenderit distinctio? Porro laborum saepe aliquam impedit modi recusandae.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default About
