class MarkdownText < ActiveRecord::Base
	belongs_to :page
	def to_html
		#'<div class="edit_area" data-content="' + markdown + '">' + markdown_to_html(markdown) + "</div>"
    '<div class="edit_area">' + markdown + '</div>'
	end

	private
	def markdown_to_html(text)
    renderer = Redcarpet::Render::HTML.new(hard_wrap: true, filter_html: true)
    options = {
      autolink: true,
      no_intra_emphasis: true,
      fenced_code_blocks: true,
      lax_html_blocks: true,
      strikethrough: true,
      superscript: true,
      space_after_headers: true
    }
    Redcarpet::Markdown.new(renderer, options).render(text).html_safe
  end

end
