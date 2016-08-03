class Page < ActiveRecord::Base
	belongs_to :site
	belongs_to :template
	has_many :markdown_texts
	accepts_nested_attributes_for :markdown_texts
end
