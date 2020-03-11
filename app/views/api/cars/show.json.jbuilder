json.partial! 'api/cars/car', car: @car

json.first_name "#{@car.owner.first_name}"
json.ownerId "#{@car.owner.id}"
