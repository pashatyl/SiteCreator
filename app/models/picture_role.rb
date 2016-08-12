class PictureRole < ActiveRecord::Base
	belongs_to :picture
	belongs_to :page
	accepts_nested_attributes_for :picture

	def to_html
		picture.to_html
	end
end