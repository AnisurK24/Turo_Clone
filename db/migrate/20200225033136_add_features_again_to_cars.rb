class AddFeaturesAgainToCars < ActiveRecord::Migration[5.2]
  def change
    add_column :cars, :mpg, :integer
    add_column :cars, :audio_input, :boolean, default: false, null: false
    add_column :cars, :bike_rack, :boolean, default: false, null: false
  end
end
