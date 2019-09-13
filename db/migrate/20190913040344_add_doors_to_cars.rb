class AddDoorsToCars < ActiveRecord::Migration[5.2]
  def change
    add_column :cars, :doors, :integer, null: false
  end
end
