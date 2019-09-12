import * as CarAPIUtil from "../util/car_api_util";

export const RECEIVE_CARS = "RECEIVE_CARS";
export const RECEIVE_CAR = "RECEIVE_CAR";
export const DELETE_CAR = "DELETE_CAR";
export const RECEIVE_CAR_ERRORS = "RECEIVE_CAR_ERRORS";

export const receiveCars = (cars) => ({
  type: RECEIVE_CARS,
  cars
});

export const receiveCar = (car) => ({
  type: RECEIVE_CAR,
  car
});

export const removeCar = (car) => ({
  type: DELETE_CAR,
  carId: car.id
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_CAR_ERRORS,
  errors
});

export const fetchCars = () => dispatch =>
  CarAPIUtil.fetchCars().then(cars => dispatch(receiveCars(cars)));

export const fetchCar = (id) => dispatch =>
  CarAPIUtil.fetchCar(id).then(car => dispatch(receiveCar(car)));

export const createCar = (car) => dispatch =>
  CarAPIUtil.createCar(car).then(
    car => (dispatch(receiveCar(car)), 
    errors => dispatch(receiveErrors(errors)))
  );

export const editCar = (car, carId) => dispatch =>
  CarAPIUtil.editCar(car, carId).then(car => dispatch(receiveCar(car)));

export const deleteCar = (id) => dispatch =>
  CarAPIUtil.deleteCar(id).then(car => dispatch(removeCar(car)));
