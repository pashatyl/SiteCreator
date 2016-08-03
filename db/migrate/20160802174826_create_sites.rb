class CreateSites < ActiveRecord::Migration
  def change
    create_table :sites do |t|
      t.string :theme
      t.string :menu_type
      t.string :title

      t.timestamps null: false
    end
  end
end
