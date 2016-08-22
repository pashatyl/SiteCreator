class MarkdownText < ActiveRecord::Base
	belongs_to :page
  validates :markdown, :page, :div_id, :order, presence: true
  validates :order, numericality: { only_integer: true }
  before_save :escape_javascript
	def to_html(action)
    text = action == "show" ? markdown_to_html(markdown) : markdown
    "<div class='#{action}_area'>" + text + "</div>"
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
