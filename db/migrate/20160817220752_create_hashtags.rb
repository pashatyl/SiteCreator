class CreateHashtags < ActiveRecord::Migration
  def change
    create_table :hashtags do |t|
      t.string :tag, null: false
      t.integer :weight
      t.timestamps null: false
    end
  end
end
