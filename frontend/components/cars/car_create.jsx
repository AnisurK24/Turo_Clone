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

        const formData = new FormData();
        this.props.createCar(formData)
            .then((payload) => this.props.history.push(`/cars/${payload.car.id}`));

        if (this.state.photos) {
            for (let i = 0; i < this.state.photos.length; i++) {
                formData.append('car[photos][]', this.state.photos[i]);
            }
        }
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

    navigateToIdx() {
        this.props.history.push('/cars/');
    }

    render() {

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
                    <input type="text" placeholder="Address" value={this.props.address} onChange={this.handleInput("address")}></input>
                </label>

                <label>City
                    <input type="text" placeholder="City" value={this.props.city} onChange={this.handleInput("city")}></input>
                </label>

                <label>State
                    <input type="text" placeholder="State" value={this.props.state} onChange={this.handleInput("state")}></input>
                </label>

                <label>Zip
                    <input type="text" placeholder="Zip" value={this.props.zip} onChange={this.handleInput("zip")}></input>
                </label>

                <br />

                <h3>Which car do you have?</h3>

                <br />

                <label>Year
                    <input type="text" placeholder="Year" value={this.props.year} onChange={this.handleInput("year")} />
                </label>

                <label>Make
                    <input type="text" placeholder="Make" value={this.props.make} onChange={this.handleInput("make")} />
                </label>

                <label>Model
                    <input type="text" placeholder="Model" value={this.props.model} onChange={this.handleInput("model")} />
                </label>

                <label>Color
                    <input type="text" placeholder="Color" value={this.props.color} onChange={this.handleInput("color")} />
                </label>

                <label>Doors
                    <input type="text" placeholder="Number of doors" value={this.props.doors} onChange={this.handleInput("doors")} />
                </label>

                <label>Seats
                    <input type="text" placeholder="Number of seats" value={this.props.seats} onChange={this.handleInput("seats")} />
                </label>

                <label>License plate
                    <input type="text" placeholder="License plate" value={this.props.plate} onChange={this.handleInput("plate")} />
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
                    <input type="text" placeholder="Daily Rate in (USD)" value={this.props.rate} onChange={this.handleInput("rate")} />
                </label>

                <br />

                <label>Description
                <br />
                    <textarea placeholder="A detailed description will get you more trips!" value={this.props.description} onChange={this.handleInput("description")}></textarea>
                </label>

                <h3>Features</h3>
                    <div className="features-wrapper">
                    <div>
                    <label><input type="checkbox" value={this.state.awd} onChange={this.updateCheckbox("awd")} /> All-wheel-drive</label>
                        <br/>
                        <label><input type="checkbox" value={this.state.audioInput} onChange={this.updateCheckbox("audioInput")} /> Audio input</label>
                        <br />
                        <label><input type="checkbox" value={this.state.bikeRack} onChange={this.updateCheckbox("bikeRack")} /> Bike rack</label>
                        <br />
                    </div>
                    <div>              
                        <label><input type="checkbox" value={this.state.bluetooth} onChange={this.updateCheckbox("bluetooth")} /> Bluetooth</label>
                        <br />
                        <label><input type="checkbox" value={this.state.childSeat} onChange={this.updateCheckbox("childSeat")} /> Child seat</label>
                        <br />
                        <label><input type="checkbox" value={this.state.convertible} onChange={this.updateCheckbox("convertible")} /> Convertible</label>
                        <br />
                    </div>
                    <div>            
                        <label><input type="checkbox" value={this.state.gps} onChange={this.updateCheckbox("gps")} /> GPS</label>
                        <br />
                        <label><input type="checkbox" value={this.state.heatedSeats} onChange={this.updateCheckbox("heatedSeats")} /> Heated seats</label>
                        <br/>
                        <label><input type="checkbox" value={this.state.longtermCar} onChange={this.updateCheckbox("longtermCar")} /> Longterm car</label>
                        <br />
                    </div>
                    <div>            
                        <label><input type="checkbox" value={this.state.petFriendly} onChange={this.updateCheckbox("petFriendly")} /> Pet friendly</label>
                        <br />
                        <label><input type="checkbox" value={this.state.skiRack} onChange={this.updateCheckbox("skiRack")} /> Ski rack</label>
                        <br/>
                        <label><input type="checkbox" value={this.state.snowTiresChains} onChange={this.updateCheckbox("snowTiresChains")} /> Snow tires/Chains</label>
                        <br />
                    </div>
                    <div>            
                        <label><input type="checkbox" value={this.state.sunroof} onChange={this.updateCheckbox("sunroof")} /> Sunroof</label>
                        <br />
                        <label><input type="checkbox" value={this.state.tollPass} onChange={this.updateCheckbox("tollPass")} /> Toll pass</label>
                        <br />
                        <label><input type="checkbox" value={this.state.usbInput} onChange={this.updateCheckbox("usbInput")} /> USB input</label>
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