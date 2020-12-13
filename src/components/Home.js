import Header from './Header'
import CarModels from './CarModels'
import Navbar from './Navbar'
import SolarPanel from './SolarPanel'

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <CarModels></CarModels>
            <SolarPanel></SolarPanel>  
        </div>
    )
}

export default Home
