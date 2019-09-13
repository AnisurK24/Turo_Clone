@cars.each do |car|
  json.set! car.id do 
    # json.extract! car, :owner_id, :id, :rate, :make, :model, :year, :color, :transmission, :seats, :doors, :description, :plate, :address, :city, :state, :zip, :lat, :lng 

    json.partial! 'car', car: car

    if car.photos.attachments
      json.photos url_for(car.photos.first) 
    end 
  end
end