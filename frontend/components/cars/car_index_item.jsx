import React from 'react';
import { Link } from 'react-router-dom';


class CarIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {


        return (
        <div className="car-tile-container">
            <div>
            <Link to={`/cars/${this.props.car.id}`}>
                <div className="index-photo-container">
                    <img className="car-index-photo" src={this.props.car.photos} />
                </div>
            </Link>
            </div>
            
            <div className="car-price-card">
                <span className="bold-proce">${this.props.car.rate}</span>
                <div className="per-day-card">/day</div>
            </div>

            <div className="make-model-year-tile">
                <span className="make-model-tile">{this.props.car.make} {this.props.car.model}</span>
                <span className="year-tile">{this.props.car.year}</span>
            </div>

            <div className="star-card">
                <span className="fas fa-star"></span>
                <span className="fas fa-star"></span>
                <span className="fas fa-star"></span>
                <span className="fas fa-star"></span>
                <span className="fas fa-star"></span>
            </div>
        </div>
        )
    }
}
export default (CarIndexItem);