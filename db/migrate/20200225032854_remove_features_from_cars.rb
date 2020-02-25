class RemoveFeaturesFromCars < ActiveRecord::Migration[5.2]
  def change
    remove_column :cars, :mpg
    remove_column :cars, :audio_input
    remove_column :cars, :bike_rack
  end
end
