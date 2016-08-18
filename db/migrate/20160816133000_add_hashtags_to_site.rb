class AddHashtagsToSite < ActiveRecord::Migration
  def change
    add_reference :sites, :hashtag, index: true
  end
end
