class CreateHelos < ActiveRecord::Migration
  def change
    create_table :helos do |t|
      t.string :titel
      t.string :content

      t.timestamps
    end
  end
end
