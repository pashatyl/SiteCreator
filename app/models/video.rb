class Video < ActiveRecord::Base
	belongs_to :page
	def to_html
		#'<div class="edit_area" data-content="' + markdown + '">' + markdown_to_html(markdown) + "</div>"
    if url == "New video"
    	return '<div class="edit_area">New video</div>'
    else 
    	return'<iframe src="' + url + '" frameborder="0" allowfullscreen></iframe>'
    end

	end
end
