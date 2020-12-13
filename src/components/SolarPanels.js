import React from 'react'
import Menu from './Menu'

const SolarPanels = () => {
    return (
        <React.Fragment>
            <Menu></Menu>
            <div className="solar-panels">
                <div className="solar-panels-container">
                    <div className="solar-panels-container-left">
                        <h1 className="solar-panels-container-left-title"><span>Savings</span><br/>Energy for less.</h1>
                        <p className="solar-panels-container-left-para">Use solar energy to power your home and reduce your dependence on the grid. Purchase solar at the lowest price of any national provider with Tesla's price match guarantee and take control of your monthly electricity bill.</p>
                        <svg className="solar-panels-container-left-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3>Economy</h3>
                    </div>
                    <div className="solar-panels-container-right"></div>
                </div>
                <div className="solar-panels-container flex flex-col flex-around bg-black">
                    <h1>Solar Panel Specs</h1>
                    <p className="solar-panels-container-specs">
                        <br/><hr/>
                        Wattage<br/>
                        340 W<br/>
                        <br/><hr/>
                        Weight<br/>
                        47.4 lbs<br/>
                        <br/><hr/>
                        Ingress Protection Rating<br/>
                        IP56<br/>
                        <br/><hr/>
                        Warranty<br/>
                        25 year performance guarantee<br/><br/><br/><br/>
                        <br/><hr/>
                        Dimensions<br/>
                        68.5" x 40.6" x 1.57"<br/>
                        (including frame)<br/>
                        <br/><hr/>
                        Frame Type<br/>
                        Black anodized aluminum<br/>
                        <br/><hr/>
                        Certifications<br/>
                        UL 1703, CE-Compliant,<br/>
                        IEC 61215 (Ed. 2),<br/>
                        IEC 61730 (Ed. 1)<br/>
                        <br/><hr/>
                        Operating Temperature<br/>
                        -40°F up to +185°F<br/>
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SolarPanels
