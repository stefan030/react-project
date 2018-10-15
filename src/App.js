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
        vehicle.id = Math.floor(Math.random() * 100);
        let vehicles = [...this.state.vehicles, vehicle];
        this.setState({
           vehicles: vehicles
        })
        console.log(vehicles);
    }

    render() {
        return (
            <div className="App">
                <h1>React App</h1>
                <p>Welcome! :)</p>
                <Vehicles vehicles={this.state.vehicles} />
                <AddVehicle addVehicle={this.addVehicle}/>
            </div>
        );
    }
}

export default App;
