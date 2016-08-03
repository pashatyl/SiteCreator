class MarkdownText < ActiveRecord::Base
	belongs_to :page
	def to_html
		"<p>" + markdown + "</p>"
	end
end
