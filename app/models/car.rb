class Car < ApplicationRecord

    has_many_attached :photos
    # validate :ensure_photos

    # def ensure_photos
    #     errors[:photos].push("Photos are required!") unless self.photos.attached?
    # end

    validates :rate, :make, :model, :year, :color, :transmission, :doors, presence: true
    validates :seats, :description, :plate, :address, :city, :state, :zip, :doors, presence: true
    validates :transmission, inclusion: { in: %w(Automatic Manual None)}
    

    belongs_to :user,
    foreign_key: :owner_id, 
    class_name: :User

end
