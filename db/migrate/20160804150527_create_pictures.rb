class CreatePictures < ActiveRecord::Migration
  def change
    create_table :pictures do |t|
      t.string :div_id
      t.integer :order
      t.timestamps null: false
    end

    create_table :pages_pictures, id: false do |t|
      t.belongs_to :page, index: true
      t.belongs_to :picture, index: true
    end

    add_column :pictures, :image_uid,  :string
	add_column :pictures, :image_name, :string

  end
end
