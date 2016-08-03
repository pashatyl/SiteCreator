class HtmlProcessor

  def initialize(page)
    @page = page
    @elements = []
    @elements += @page.markdown_texts
  end

  def process

    grouped_elements = @elements.group_by(&:div_id)
    puts grouped_elements
    grouped_elements.transform_values! { |value| value.sort_by(&:order)}
    grouped_elements.transform_values! do |value|
      value.inject("") { |res, el| res + el.to_html }

    end
    grouped_elements.transform_keys! { |key| key.to_sym }
    puts grouped_elements
    @page.template.html % grouped_elements
    #column_ids = @page.markdown_texts.map(&:div_id).uniq 
  end

private



  attr_reader :checkout_service
end