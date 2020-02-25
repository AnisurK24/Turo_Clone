class AddMoreFeaturesToCars < ActiveRecord::Migration[5.2]
  def change
    add_column :cars, :awd, :boolean, default: false, null: false
    add_column :cars, :bluetooth, :boolean, default: false, null: false
    add_column :cars, :child_seat, :boolean, default: false, null: false
    add_column :cars, :convertible, :boolean, default: false, null: false
    add_column :cars, :gps, :boolean, default: false, null: false
    add_column :cars, :heated_seats, :boolean, default: false, null: false
    add_column :cars, :longterm_car, :boolean, default: false, null: false
    add_column :cars, :pet_friendly, :boolean, default: false, null: false
    add_column :cars, :ski_rack, :boolean, default: false, null: false
    add_column :cars, :snow_tires_chains, :boolean, default: false, null: false
    add_column :cars, :sunroof, :boolean, default: false, null: false
    add_column :cars, :toll_pass, :boolean, default: false, null: false
    add_column :cars, :usb_input, :boolean, default: false, null: false
  end
end
