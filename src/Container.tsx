import React, {useState} from "react";
import Car from "./Car/Car";

function Container() {
    const [car, setCar] = useState<Car>(new Car('Ford', 'Mustang', '2024'))

    const handleManufacturerChange = (event:React.ChangeEvent<HTMLInputElement>) => setCar(prevCar => new Car(event.target.value, prevCar.model, prevCar.year));
    const handleModelChange = (event:React.ChangeEvent<HTMLInputElement>) => setCar(prevCar => new Car(prevCar.manufacturer, event.target.value, prevCar.year));
    const handleYearChange = (event:React.ChangeEvent<HTMLInputElement>) => setCar(prevCar => new Car(prevCar.manufacturer, prevCar.model, event.target.value));
    return(
        <div>
            <p>Seu carro favorito é: {car.manufacturer} {car.model} {car.year}</p>

            <input type="text" value={car.manufacturer} onChange={handleManufacturerChange}/> <br/>
            <input type="text" value={car.model} onChange={handleModelChange}/> <br/>
            <input type="text" value={car.year} onChange={handleYearChange}/> <br/>
        </div>
    );
}
export default Container;