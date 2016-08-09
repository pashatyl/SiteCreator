class RemoveColumnsFromPicture < ActiveRecord::Migration
  def up
    remove_column :pictures, :image_uid
    remove_column :pictures, :image_name
  end
 
  def down
    add_column :pictures, :image_uid,  :string
    add_column :pictures, :image_name, :string
  end
end
