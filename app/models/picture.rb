class Picture < ActiveRecord::Base
	has_many :pages, :through => :picture_roles
	has_many :picture_roles
	belongs_to :user
	belongs_to :site, inverse_of: :picture
	validates :public_id, :url, :user, presence: true

	def to_html(action, height=139, mode='c_scale')
		result = "<img src='http://res.cloudinary.com/dg1a2dx9d/image/upload/#{mode},h_#{height}/v1470742403/#{public_id}'"
		if action == "edit"
			result << " data-id='#{id.to_s}' data-public='#{public_id}' "
		elsif action == "show"
			result << "class = 'img-responsive'"
		end
		result << '/>'
	end

	
end
