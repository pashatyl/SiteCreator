class HtmlProcessor

  def initialize(page)
    @page = page
    @elements = []
    @elements += @page.markdown_texts
    @elements += @page.pictures
    @elements += @page.videos
  end

  def process

    grouped_elements = @elements.group_by(&:div_id)
    puts grouped_elements
    grouped_elements.transform_values! { |value| value.sort_by(&:order)}
    grouped_elements.transform_values! do |value|
      value.inject("") { |res, el| res + wrap(el) }

    end
    grouped_elements.transform_keys! { |key| key.to_sym }
    puts grouped_elements
    @page.template.html % grouped_elements
    #column_ids = @page.markdown_texts.map(&:div_id).uniq 
  end

private
  def wrap(element)
    '<div class="dragbox" data-type="' + element.class.name.underscore + '" data-id="'+ element.id.to_s + '">' + element.to_html + '</div>'
  end 


 
end