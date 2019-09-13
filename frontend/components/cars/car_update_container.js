import {connect} from 'react-redux';
import {editCar, fetchCar} from '../../actions/car_actions';
import CarUpdate from './car_update';

const mapStateToProps = (state, ownProps) => ({
    car: state.entities.cars[ownProps.match.params.id],
    errors: state.errors.session,
    formType: "update",
    currentUserId: state.session.id,
    photos: []
});

const mapDispatchToProps = (dispatch) => ({
  fetchCar: id => dispatch(fetchCar(id)),
  editCar: car => dispatch(editCar(car))
});

export default connect(mapStateToProps, mapDispatchToProps)(CarUpdate);