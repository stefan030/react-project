import React, { Component } from 'react';
import './App.css';
import Vehicles from "./components/Vehicles";
import AddVehicle from "./components/AddVehicle";

class App extends Component {
    state = {
        vehicles: [
            {id: 1, name: 'Vehicle 1', speed: 200, range: '230 miles'},
            {id: 2, name: 'Vehicle 2', speed: 210, range: '230 miles'},
            {id: 3, name: 'Vehicle 3', speed: 220, range: '230 miles'}
        ]
    }

    addVehicle = (vehicle) => {
        vehicle.id = Math.floor(Math.random() * 100); // Adding random ID
        let vehicles = [...this.state.vehicles, vehicle]; // Using spread operator we are copying previous state and adding another value (vehicle) at the end of array.
        this.setState({
           vehicles: vehicles // in order to re-render with updated state we use setState method
        })
        console.log(vehicles);
    }

    removeVehicle = (id) => {
        let vehicles = this.state.vehicles.filter(vehicle => { // .filter returns new array, we pass a callback function and in callback function we get access to individual vehicle that we are cycling through that particular moment in time
            return vehicle.id !== id; // if we return true, individual vehicle will remain in the array, if false, it will be filtered out which we want to do in this case
        }) // if we take current vehicle(id) that is passed as parameter to removeVehicle method, iterate through array and check too see if current vehicle id DOES NOT match id from array, it will return false and therefore that vehicle will be filtered out(removed) from array.
        this.setState({
            vehicles: vehicles // same as within addVehicle method, we re-render component with updated state
        })
    }


    render() {
        return (
            <div className="App">
                <h1>React App</h1>
                <p>Welcome! :)</p>
                <Vehicles removeVehicle={this.removeVehicle} vehicles={this.state.vehicles} />
                <AddVehicle addVehicle={this.addVehicle}/>
            </div>
        );
    }
}

export default App;
