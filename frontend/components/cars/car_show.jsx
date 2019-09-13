import React from 'react';
import { Link } from 'react-router-dom';

class CarShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.car;
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteCar(this.props.car.id);
        this.returnToIdx();
    }

    returnToIndex() {
        this.props.history.push('/cars/');
    }

    render() {



        return (

        )
    }
}

export default CarShow;