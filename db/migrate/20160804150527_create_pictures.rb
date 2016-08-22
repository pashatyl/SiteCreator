class CreatePictures < ActiveRecord::Migration
  def change
    create_table :pictures do |t|
      t.string :public_id
      t.string :url
      t.timestamps null: false
    end

    create_table :picture_roles do |t|
      t.belongs_to :picture, index: true
      t.belongs_to :page, index: true
      t.string :div_id
      t.integer :order
      t.timestamps
    end


  end
end
