import React from 'react';
import { withRouter, Redirect } from "react-router-dom";


class CarCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.formFields;
        this.handleSubmit = this.handleSubmit.bind(this);
    }
 
    handleInput(field) {
        return (e) => this.setState({
            [field]: e.target.value
        });
    }

    handleCheckbox(field) {
        return e => {
            this.setState({
                [field]: e.target.checked
            });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        // console.log("state before submit", this.state)
        const formData = new FormData();

        // formData.append("car[address]", this.state.address);
        // formData.append("car[rate]", this.state.rate);
        // formData.append("car[make]", this.state.make);
        // formData.append("car[model]", this.state.model);
        // formData.append("car[year]", this.state.year);
        // formData.append("car[color]", this.state.color);
        // formData.append("car[transmission]", this.state.transmission);
        // formData.append("car[seats]", this.state.seats);
        // formData.append("car[doors]", this.state.doors);
        // formData.append("car[mpg]", this.state.mpg);
        // formData.append("car[description]", this.state.description);
        // formData.append("car[plate]", this.state.plate);
        // formData.append("car[address]", this.state.address);
        // formData.append("car[city]", this.state.city);
        // formData.append("car[state]", this.state.state);
        // formData.append("car[zip]", this.state.zip);
        // formData.append("car[lat]", this.state.lat);
        // formData.append("car[lng]", this.state.lng);

        formData.append('car[test_key]', "testvalue");

        for (let key in this.state) {
            if (key != "photos") {
              formData.append(`car[${key}]`, this.state[`${key}`]);
            }
        }
        
        
        if (this.state.photos) {
            for (let i = 0; i < this.state.photos.length; i++) {
                formData.append('car[photos][]', this.state.photos[i]);
            }
        }

        console.log("form data before submit", formData);

        this.props.createCar(formData)
            .then((payload) => this.props.history.push(`/cars/${payload.car.id}`));
    }

    renderErrors() {
        return (
        <ul className="car-create-errors">
            {this.props.errors.map((error, i) => (
            <li key={`error-car-${i}`}>
                {error}
            </li>
            ))}
        </ul>
        );
    }

    render() {
        console.log(this.props)
        console.log(this.state);
        return (
            <div className="create-car-container">
                <div className="create-car-banner">
                    <h3 className="create-banner-text">List your car</h3>
                </div>

            <form className="create-car-form" onSubmit={this.handleSubmit}>

                <h2>Your Car</h2>
                    <br />
                <h3>Where is your car located?</h3>
                    <br />

                <label>Address
                    <input type="text" placeholder="Address" value={this.state.address} onChange={this.handleInput("address")}></input>
                </label>

                <label>City
                    <input type="text" placeholder="City" value={this.state.city} onChange={this.handleInput("city")}></input>
                </label>

                <label>State
                    <input type="text" placeholder="State" value={this.state.state} onChange={this.handleInput("state")}></input>
                </label>

                <label>Zip
                    <input type="text" placeholder="Zip" value={this.state.zip} onChange={this.handleInput("zip")}></input>
                </label>

                <br />

                <h3>Which car do you have?</h3>

                <br />

                <label>Year
                    <input type="text" placeholder="Year" value={this.state.year} onChange={this.handleInput("year")} />
                </label>

                <label>Make
                    <input type="text" placeholder="Make" value={this.state.make} onChange={this.handleInput("make")} />
                </label>

                <label>Model
                    <input type="text" placeholder="Model" value={this.state.model} onChange={this.handleInput("model")} />
                </label>

                <label>Color
                    <input type="text" placeholder="Color" value={this.state.color} onChange={this.handleInput("color")} />
                </label>

                <label>Doors
                    <input type="text" placeholder="Number of doors" value={this.state.doors} onChange={this.handleInput("doors")} />
                </label>

                <label>Seats
                    <input type="text" placeholder="Number of seats" value={this.state.seats} onChange={this.handleInput("seats")} />
                </label>

                <label>License plate
                    <input type="text" placeholder="License plate" value={this.state.plate} onChange={this.handleInput("plate")} />
                </label>

                <br />

                <label>Transmission
                <br />
                    <input type="radio" value="automatic" name="transmission" onChange={this.handleInput("transmission")} />Automatic
                    <input type="radio" value="manual" name="transmission" onChange={this.handleInput("transmission")} />Manual
                    <input type="radio" value="none" name="transmission" onChange={this.handleInput("transmission")} />N/A
                </label>
                <br />

                <h2>Car Details</h2>

                <br />
                <br />

                <label>Daily Rate
                <br />
                    <input type="text" placeholder="Daily Rate in (USD)" value={this.state.rate} onChange={this.handleInput("rate")} />
                </label>

                <br />

                <label>Description
                <br />
                    <textarea placeholder="A detailed description will get you more trips!" value={this.state.description} onChange={this.handleInput("description")}></textarea>
                </label>

                <h3>Features</h3>
                    <div className="features-wrapper">
                    <div>
                    <label><input type="checkbox" value={this.state.awd} onChange={this.handleCheckbox("awd")} /> All-wheel-drive</label>
                        <br/>
                        <label><input type="checkbox" value={this.state.audioInput} onChange={this.handleCheckbox("audioInput")} /> Audio input</label>
                        <br />
                        <label><input type="checkbox" value={this.state.bikeRack} onChange={this.handleCheckbox("bikeRack")} /> Bike rack</label>
                        <br />
                    </div>
                    <div>              
                        <label><input type="checkbox" value={this.state.bluetooth} onChange={this.handleCheckbox("bluetooth")} /> Bluetooth</label>
                        <br />
                        <label><input type="checkbox" value={this.state.childSeat} onChange={this.handleCheckbox("childSeat")} /> Child seat</label>
                        <br />
                        <label><input type="checkbox" value={this.state.convertible} onChange={this.handleCheckbox("convertible")} /> Convertible</label>
                        <br />
                    </div>
                    <div>            
                        <label><input type="checkbox" value={this.state.gps} onChange={this.handleCheckbox("gps")} /> GPS</label>
                        <br />
                        <label><input type="checkbox" value={this.state.heatedSeats} onChange={this.handleCheckbox("heatedSeats")} /> Heated seats</label>
                        <br/>
                        <label><input type="checkbox" value={this.state.longtermCar} onChange={this.handleCheckbox("longtermCar")} /> Longterm car</label>
                        <br />
                    </div>
                    <div>            
                        <label><input type="checkbox" value={this.state.petFriendly} onChange={this.handleCheckbox("petFriendly")} /> Pet friendly</label>
                        <br />
                        <label><input type="checkbox" value={this.state.skiRack} onChange={this.handleCheckbox("skiRack")} /> Ski rack</label>
                        <br/>
                        <label><input type="checkbox" value={this.state.snowTiresChains} onChange={this.handleCheckbox("snowTiresChains")} /> Snow tires/Chains</label>
                        <br />
                    </div>
                    <div>            
                        <label><input type="checkbox" value={this.state.sunroof} onChange={this.handleCheckbox("sunroof")} /> Sunroof</label>
                        <br />
                        <label><input type="checkbox" value={this.state.tollPass} onChange={this.handleCheckbox("tollPass")} /> Toll pass</label>
                        <br />
                        <label><input type="checkbox" value={this.state.usbInput} onChange={this.handleCheckbox("usbInput")} /> USB input</label>
                        <br />
                    </div>
                    </div>
                <br/>

                <br />

                <input type="file" onChange={e => this.setState({ photos: e.target.files })} multiple />

                <br />

                <input className="car-finish-btn" type="submit" value="Finish" />

                <span className="car-errors">{this.renderErrors()}</span>

            </form>


            </div>
        )
    }
}

export default CarCreate;