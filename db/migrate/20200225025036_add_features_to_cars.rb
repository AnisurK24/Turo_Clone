class AddFeaturesToCars < ActiveRecord::Migration[5.2]
  def change
    add_column :cars, :mpg, :integer
    add_column :cars, :audio_input, :boolean
    add_column :cars, :bike_rack, :boolean
  end
end
