import { connect } from "react-redux";
import { fetchCars } from "../../actions/car_actions";
import CarIndex from "./car_index";


const mapStateToProps = (state) => {
    // debugger;
    return {
    cars: Object.values(state.entities.cars)
    };
};

const mapDispatchToProps = (dispatch) => ({
    fetchCars: () => dispatch(fetchCars())
});

export default connect(mapStateToProps, mapDispatchToProps)(CarIndex);