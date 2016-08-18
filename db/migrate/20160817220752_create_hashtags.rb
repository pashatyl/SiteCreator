class CreateHashtags < ActiveRecord::Migration
  def change
    create_table :hashtags do |t|
      t.string :tag, null: false
      t.integer :weight, :default => 1
      t.timestamps null: false
    end
  end
end
