import Section from "../components/Section.jsx";
import useAppContext from "../context/AppContext.jsx";
import Card from "../components/Card.jsx";
import { Navbar } from "../components/Navbar.jsx";

function Home () { 
    const {store: {people, vehicles, planets}} = useAppContext();

    return(
        <div>
            <Navbar/>
            <Section  title="Characters">{people.map((person, index) => {return (<Card name={person.name} type={person.type} id={person.id} key={index}><p><strong>Height: </strong>{person.height}</p><p><strong>Mass: </strong>{person.mass}</p><p><strong>Hair Color: </strong>{person.hair_color}</p><p><strong>Skin Color: </strong>{person.skin_color}</p><p><strong>Eye Color: </strong>{person.eye_color}</p><p><strong>Birth year: </strong>{person.birth_year}</p><p><strong>Gender: </strong>{person.gender}</p></Card>)})}</Section>
            <Section  title="Vehicles">{vehicles.map((vehicle, index) => {return (<Card name={vehicle.name} type={vehicle.type} id={vehicle.id} key={index}><p><strong>Model: </strong>{vehicle.model}</p><p><strong>Vehicle Class: </strong>{vehicle.vehicle_class}</p><p><strong>Manufacturer: </strong>{vehicle.manufacturer}</p><p><strong>Cost in credits: </strong>{vehicle.cost_in_credits}</p><p><strong>Length: </strong>{vehicle.length}</p><p><strong>Crew: </strong>{vehicle.crew}</p><p><strong>Passengers: </strong>{vehicle.passengers}</p><p><strong>Speed: </strong>{vehicle.max_atmosphering_speed}</p><p><strong>Cargo Capacity: </strong>{vehicle.cargo_capacity}</p></Card>)})}</Section>
            <Section  title="Planets">{planets.map((planet, index) => {return (<Card name={planet.name} type={planet.type} id={planet.id} key={index}><p><strong>Diamater: </strong>{planet.diamater}</p><p><strong>Rotation Period: </strong>{planet.rotation_period}</p><p><strong>Orbital Period: </strong>{planet.orbital_period}</p><p><strong>Gravity: </strong>{planet.gravity}</p><p><strong>Population: </strong>{planet.population}</p><p><strong>Climate: </strong>{planet.climate}</p><p><strong>Terrain: </strong>{planet.terrain}</p><p><strong>Surface Water: </strong>{planet.surface_water}</p></Card>)})}</Section>
        </div>
    )
}

export default Home;