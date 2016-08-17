class Video < ActiveRecord::Base
	belongs_to :page
	def to_html(action)
		#'<div class="edit_area" data-content="' + markdown + '">' + markdown_to_html(markdown) + "</div>"
    	return'<iframe src="' + url + '" frameborder="0" allowfullscreen></iframe>'  
	end
end
