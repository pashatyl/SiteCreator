class CreateVideos < ActiveRecord::Migration
  def change
    create_table :videos do |t|
      t.string :url
      t.string :div_id
      t.integer :order
      t.belongs_to :page, index: true
      t.timestamps null: false
    end
  end
end
