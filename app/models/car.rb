class Car < ApplicationRecord

    has_many_attached :photos

    validates :rate, :make, :model, :year, :color, :transmission, presence: true
    validates :seats, :description, :plate, :address, :city, :state, :zip, :doors, presence: true




    belongs_to :owner,
    foreign_key: :owner_id, 
    class_name: :User

end
