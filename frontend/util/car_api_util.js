

export const fetchCars = () => (
  $.ajax({
    method: "GET",
    url: "api/cars"
  })
);

export const fetchCar = (id) => (
  $.ajax({
    method: "GET",
    url: `api/cars/${id}`
  })
);

export const createCar = (car) => (
  $.ajax({
    method: "POST",
    url: "api/cars",
    data: car,
    contentType: false,
    processData: false   
  })
);

export const editCar = (car) => (
  $.ajax({
    method: "PATCH",
    url: `api/cars/${car.id}`,
    data: car
  })
);

export const deleteCar = (id) => (
  $.ajax({
    method: "DELETE",
    url: `api/cars/${id}`
  })
);