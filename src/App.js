import React, { Component } from 'react';
import './App.css';
import Vehicles from "./components/Vehicles";

class App extends Component {
  state = {
    vehicles: [
        {id: 1, name: 'Vehicle 1', speed: 200, range: '230 miles'},
        {id: 2, name: 'Vehicle 2', speed: 210, range: '230 miles'},
        {id: 3, name: 'Vehicle 3', speed: 220, range: '230 miles'}
    ]
  }


  render() {
    return (
      <div className="App">
        <Vehicles vehicles={this.state.vehicles} />
      </div>
    );
  }
}

export default App;
