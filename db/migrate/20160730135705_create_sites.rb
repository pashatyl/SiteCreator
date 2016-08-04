class CreateSites < ActiveRecord::Migration
  def change
    create_table :sites do |t|
      t.string :name, null: false
      t.text :description
      t.integer :theme, null: false
      t.integer :menu, null: false
      t.string :logo

      t.timestamps null: false
    end
  end
end
