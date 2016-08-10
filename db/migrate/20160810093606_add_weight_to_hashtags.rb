class AddWeightToHashtags < ActiveRecord::Migration
  def change
    add_column :hashtags, :weight, :integer
  end
end
