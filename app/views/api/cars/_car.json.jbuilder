json.extract! car, :id, :owner_id, :rate, :make, :model, :year, :color, :transmission, :seats, :description, :plate, :address, :city, :state, :zip, :doors, :lat, :lng

# json.photos url_for(car.photos) if car.photos.attached?
if car.photos.attachments
  json.photos car.photos.map { |photo| url_for(photo) }
end 