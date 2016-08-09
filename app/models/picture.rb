class Picture < ActiveRecord::Base
	has_and_belongs_to_many :pages

	def to_html
		'<img src="" data-src="' + + public_id + '"data-width="200"/>'
	end
end
