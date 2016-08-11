class Picture < ActiveRecord::Base
	has_and_belongs_to_many :pages

	def to_html
		'<img src="http://res.cloudinary.com/dg1a2dx9d/image/upload/c_scale,w_139/v1470742403/' + public_id + '"/>'
	end
end
