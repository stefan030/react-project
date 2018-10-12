import React from 'react';


const Vehicles = (props) => {
    const { vehicles } = props;
    const vehiclesList = vehicles.map(vehicle => {
        return vehicle.speed >= 210 ? (
            <div key={vehicle.id}>
                <div>{vehicle.name}</div>
                <div>{vehicle.speed}</div>
                <div>{vehicle.range}</div>
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