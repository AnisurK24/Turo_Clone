import React from 'react';
import CarIndexItem from './car_index_item';

class CarIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchCars();
        window.scrollTo(0, 0);
    }



    render() {
        const carTile = this.props.cars.map(car => (
            <div key={car.id}>
                <CarIndexItem car={car} />
            </div>
            )
        )



        return (
            <div className="car-index-container">
            <div className="filter-navbar">
                {/* <button>Sort by</button>
                <button>Book instantly</button>
                <button>Price</button>
                <button>Delivery</button>
                <button><img src={window.filters}/>More Filters</button> */}
            </div>

            <div className="car-index">
            <div className="car-list">
                {carTile}
            </div>
            </div>

            <div className="car-map">
                {/* <img src={window.map}/> */}
            </div>

            </div >
        )
    }
}

export default CarIndex;