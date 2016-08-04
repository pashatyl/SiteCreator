class Page < ActiveRecord::Base
	belongs_to :site
	belongs_to :template
	has_many :markdown_texts
	has_and_belongs_to_many :pictures
	accepts_nested_attributes_for :markdown_texts, :pictures
end
