class Picture < ActiveRecord::Base
	has_many :pages, :through => :picture_roles
	has_many :picture_roles
	belongs_to :user
	belongs_to :site

	def to_html(action)
		result = "<img src='http://res.cloudinary.com/dg1a2dx9d/image/upload/c_scale,w_139/v1470742403/#{public_id}'"
		if action == "edit"
			result << " data-id='#{id.to_s}' data-public='#{public_id}' "
		elsif action == "show"
			result << "class = 'img-rounded center-block'"
		end
		result << '/>'
	end

	
end
