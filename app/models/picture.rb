class Picture < ActiveRecord::Base
	has_and_belongs_to_many :pages
	#dragonfly_accessor :image
	mount_uploader :image, ImageUploader

	def to_html
		'<img src=' + image.thumb('200x200#').url + ' />'
	end
end
