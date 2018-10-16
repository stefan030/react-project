import React from 'react';


const Vehicles = (props) => {
    const { vehicles, removeVehicle } = props;
    const vehiclesList = vehicles.map(vehicle => {
        return vehicle.speed >= 210 ? (
            <div key={vehicle.id}>
                <div>{vehicle.name}</div>
                <div>{vehicle.speed}</div>
                <div>{vehicle.range}</div>
                <button onClick={() => {removeVehicle(vehicle.id)}}>Remove</button>
            </div>
        ) : null
    });
    return(
        <div>
            {vehiclesList}
        </div>
    )
}

export default Vehicles;