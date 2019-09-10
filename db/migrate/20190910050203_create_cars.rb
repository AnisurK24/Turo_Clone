class CreateCars < ActiveRecord::Migration[5.2]
  def change
    create_table :cars do |t|
      t.integer :owner_id, null: false
      t.integer :rate, null: false
      t.string :make, null: false
      t.string :model, null: false
      t.integer :year, null: false
      t.string :color, null: false
      t.string :transmission, null: false
      t.integer :seats, null: false
      t.text :description, null: false
      t.string :plate, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.integer :zip, null: false
      t.float :lat, null: false
      t.float :lng, null: false

      t.timestamps
    end
    add_index :cars, :owner_id
  end
end
