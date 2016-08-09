class AddDefaultTemplateToSite < ActiveRecord::Migration
  def change
  	add_reference :sites, :default_template, index: true
  end
end
