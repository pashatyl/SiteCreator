class Picture < ActiveRecord::Base
	has_many :pages, :through => :picture_roles
	has_many :picture_roles
	

	def to_html
		'<img src="http://res.cloudinary.com/dg1a2dx9d/image/upload/c_scale,w_139/v1470742403/' + public_id + '" data-id="' + id.to_s + '" data-public="' + public_id + '"/>'
	end

	
end
