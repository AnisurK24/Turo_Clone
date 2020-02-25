json.extract! car, :id, :owner_id, :rate, :make, :model, :year, :color, :transmission, :seats, :description, :plate, :address, :city, :state, :zip, :doors, :lat, :lng, :mpg, :awd, :audio_input, :bike_rack, :bluetooth, :child_seat, :convertible, :gps, :heated_seats, :longterm_car, :pet_friendly, :ski_rack, :snow_tires_chains, :sunroof, :toll_pass, :usb_input

# json.photos url_for(car.photos) if car.photos.attached?
if car.photos.attachments
  json.photos car.photos.map { |photo| url_for(photo) }
end 