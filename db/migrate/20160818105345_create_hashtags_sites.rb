class CreateHashtagsSites < ActiveRecord::Migration
  def change
    create_table  :hashtags_sites, id: false do |t|
      t.belongs_to :site, index: true
      t.belongs_to :hashtag, index: true
    end
  end
end
