class AddSiteToHashtags < ActiveRecord::Migration
  def change
    add_reference :hashtags, :site, index: true
  end
end
