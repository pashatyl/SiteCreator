class MarkdownText < ActiveRecord::Base
	belongs_to :page
  before_save :escape_javascript
	def to_html(action)
		#'<div class="edit_area" data-content="' + markdown + '">' + markdown_to_html(markdown) + "</div>"
    '<div class="edit_area">' + markdown + '</div>'
	end

  searchable do
    text :markdown
  end

  MARKDOWNSIZE = 100

  def header
    page.site.header
  end

  def text
    markdown[0..MARKDOWNSIZE]
  end

  def link
    [page.site, page]
  end

  def img
    page.site.img
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

  def escape_javascript
    self.markdown = markdown.gsub(/</, "&lt;").gsub(/>/, "&gt;")
  end

end
