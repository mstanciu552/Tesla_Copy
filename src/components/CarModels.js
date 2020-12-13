import Card from './Card'

const CarModels = () => {
    return (
        <div className="carmodel">
            <Card name="Model 3" img="3" sub="39500$" id="1"></Card>
            <Card name="Model S" img="s" sub="72600$" id="2"></Card>
            <Card name="Model X" img="x" sub="77700$" id="3"></Card>
            <Card name="Model Y" img="y" sub="89900$" id="4"></Card>
        </div>
    )
}

export default CarModels
