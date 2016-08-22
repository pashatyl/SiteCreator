class AddAchievementsToUsers < ActiveRecord::Migration
  def change
  	add_column :users, :achievement, :integer, default: 0
  end
end
