class AddSiteToPicture < ActiveRecord::Migration
  def change
    add_reference :pictures, :site, index: true
  end
end
