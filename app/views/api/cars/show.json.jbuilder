json.partial! 'api/cars/car', car: @car

json.first_name "#{@car.owner.fname}"
json.ownerId "#{@car.owner.id}"
