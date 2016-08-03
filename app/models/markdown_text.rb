class MarkdownText < ActiveRecord::Base
	belongs_to :page
	def to_html
		markdown
	end
end
