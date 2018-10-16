    import React, { Component } from 'react';


class AddVehicle extends Component {
    state = {
        name: null,
        speed: null,
        range: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addVehicle(this.state);
    }


    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Vehicle name:</label>
                    <input type="text" id="name" onChange={this.handleChange}/>
                    <label htmlFor="speed">Vehicle top speed:</label>
                    <input type="text" id="speed" onChange={this.handleChange}/>
                    <label htmlFor="range">Vehicle range:</label>
                    <input type="text" id="range" onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddVehicle;