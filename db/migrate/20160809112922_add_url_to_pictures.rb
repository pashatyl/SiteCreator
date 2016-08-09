class AddUrlToPictures < ActiveRecord::Migration
  def change
  	#add_column :pictures, :url, :string
  	add_column :pictures, :public_id, :string
  end
end
