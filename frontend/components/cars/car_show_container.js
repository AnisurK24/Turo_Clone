import { connect } from "react-redux";
import {fetchCar, deleteCar} from '../../actions/car_actions';
import CarShow from './car_show';

const mapStateToProps = (state, ownProps)=> ({
  car: state.entities.cars[ownProps.match.params.id],
  currentUserId: state.session.id
});

const mapDispatchToProps = dispatch => ({
  fetchCar: id => dispatch(fetchCar(id)),
  deleteCar: carId => dispatch(deleteCar(carId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CarShow);

