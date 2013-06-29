class CreateHotels < ActiveRecord::Migration
  def change
    create_table :hotels do |t|
      t.string :url
      t.string :name
      t.string :thumbnail
      t.string :address
      t.integer :price
      t.float :lat
      t.float :lng
      t.timestamps
    end
  end
end
