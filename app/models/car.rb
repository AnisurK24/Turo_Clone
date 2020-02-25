class Car < ApplicationRecord

    has_many_attached :photos
    # validate :ensure_photos

    # def ensure_photos
    #     errors[:photos].push("Photos are required!") unless self.photos.attached?
    # end

    TRANSMISSION_TYPE = %w(automatic manual none).freeze

    validates :rate, :make, :model, :year, :color, :transmission, :seats, :description, :plate, :address, :city, :state, :zip, :doors, presence: true

    validates :awd, :audio_input, :bike_rack, :bluetooth, :child_seat, :convertible, :gps, :heated_seats, :longterm_car, :pet_friendly, :ski_rack, :snow_tires_chains, :sunroof, :toll_pass, :usb_input, inclusion: [true, false]

    validates :transmission, inclusion: TRANSMISSION_TYPE, unless: -> { transmission.blank? }
    

    belongs_to :user,
    foreign_key: :owner_id, 
    class_name: :User

end
