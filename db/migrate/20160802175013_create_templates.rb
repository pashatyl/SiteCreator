class CreateTemplates < ActiveRecord::Migration
  def change
    create_table :templates do |t|
      t.text :html
      t.string :title
      t.timestamps null: false
    end

 
  end
end