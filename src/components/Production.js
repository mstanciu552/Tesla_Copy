import React, { useState } from 'react'
import Menu from './Menu'
import Card from './Card'
import Navbar from './Navbar'
import Popup from './Popup'

const Production = () => {
    const [isOpen, setOpen] = useState(false);
    const [id, setId] = useState(0);
    const [name, setName] = useState("Model 3");

    const openPopup = (name, id) => {
        setOpen(true);
        setId(id);
        setName(name);
    }
    return (
        <React.Fragment>
            
            <Menu color="white"></Menu>
            {
                isOpen ?
                <Popup name={ name } setOpen={setOpen} id={ id }></Popup>
                : 
                <></>
            }
            
            <div className="production">
                <div className="production-header">
                    <div className="production-header-img"></div>
                    <h1 className="production-header-title">Our work</h1> 
                    <div className="production-cars">
                        <Card popup="true" border="none" func={openPopup} name="Model 3" img="3" sub="39.500$" id="1"></Card>
                        <Card popup="true" border="none" func={openPopup} name="Model X" img="x" sub="77.700$" id="3"></Card>
                        <Card popup="true" border="none" func={openPopup} name="Model S" img="s" sub="72.600$" id="2">                    </Card>
                        <Card popup="true" border="none" func={openPopup} name="Model Y" img="y" sub="89.900$" id="4"></Card>    
                    </div> 
                </div>
                <div className="production-energy">
                    <div className="production-energy-section">
                        <div className="production-energy-section-img production-energy-section-img-1"></div>
                        <div className="production-energy-section-text">
                            <h1>Solar power</h1>
                            <p>Solar power is the conversion of energy from sunlight into electricity, either directly using photovoltaics (PV), indirectly using concentrated solar power, or a combination. Concentrated solar power systems use lenses or mirrors and solar tracking systems to focus a large area of sunlight into a small beam. Photovoltaic cells convert light into an electric current using the photovoltaic effect.
                            <br/><br/>
                            Photovoltaics were initially solely used as a source of electricity for small and medium-sized applications, from the calculator powered by a single solar cell to remote homes powered by an off-grid rooftop PV system. Commercial concentrated solar power plants were first developed in the 1980s. As the cost of solar electricity has fallen, the number of grid-connected solar PV systems has grown into the millions and utility-scale photovoltaic power stations with hundreds of megawatts are being built. Solar PV is rapidly becoming an inexpensive, low-carbon technology to harness renewable energy from the Sun. The current largest photovoltaic power station in the world is the Pavagada Solar Park, Karnataka, India with a generation capacity of 2050 MW.
                            </p>
                        </div>
                    </div>
                    <div className="production-energy-section flex-row-reverse">
                        <div className="production-energy-section-img production-energy-section-img-2"></div>
                        <div className="production-energy-section-text">
                            <h1 className="text-align-right">Wind power</h1>
                            <p>Wind power or wind energy is the use of wind to provide mechanical power through wind turbines to turn electric generators for electrical power. Wind power is a popular sustainable, renewable source of power that has a much smaller impact on the environment compared to burning fossil fuels.
                            <br/><br/>
                            Wind farms consist of many individual wind turbines, which are connected to the electric power transmission network. Onshore wind is an inexpensive source of electric power, competitive with or in many places cheaper than coal or gas plants. Onshore wind farms have a greater impact on the landscape than other power stations, as they need to be spread over more land and need to be built away from dense population. Offshore wind is steadier and stronger than on land and offshore farms have less visual impact, but construction and maintenance costs are significantly higher. Small onshore wind farms can feed some energy into the grid or provide power to isolated off-grid locations. <br/><br/>

                            The wind is an intermittent energy source, which cannot be dispatched on demand. Locally, it gives variable power, which is consistent from year to year but varies greatly over shorter time scales. Therefore, it must be used together with other power sources to give a reliable supply. 
                            </p>
                        </div>
                    </div>
                    <div className="production-energy-section">
                        <div className="production-energy-section-img production-energy-section-img-3"></div>
                        <div className="production-energy-section-text">
                            <h1>Water power</h1>
                            <p>Hydropower or water power (from Greek: ὕδωρ, "water") is power derived from the energy of falling or fast-running water, which may be harnessed for useful purposes. Since ancient times, hydropower from many kinds of watermills has been used as a renewable energy source for irrigation and the operation of various mechanical devices, such as gristmills, sawmills, textile mills, trip hammers, dock cranes, domestic lifts, and ore mills. A trompe, which produces compressed air from falling water, is sometimes used to power other machinery at a distance.
                            <br/><br/>
                            In the late 19th century, hydropower became a source for generating electricity. Cragside in Northumberland was the first house powered by hydroelectricity in 1878 and the first commercial hydroelectric power plant was built at Niagara Falls in 1879. In 1881, street lamps in the city of Niagara Falls were powered by hydropower.
                            <br/><br/>
                            Since the early 20th century, the term has been used almost exclusively in conjunction with the modern development of hydroelectric power. International institutions such as the World Bank view hydropower as a means for economic development without adding substantial amounts of carbon to the atmosphere,but dams can have significant negative social and environmental impacts.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Production
