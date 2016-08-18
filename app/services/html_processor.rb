class HtmlProcessor

  def initialize(page, action)
    @html = page.template.html
    @elements = []
    @elements += page.markdown_texts
    @elements += page.picture_roles
    @elements += page.videos
    @action = action
  end

  def process
    res = @html % add_keys(@html, group_elements(@elements))
    puts res
    res
  end


private
  def wrap(element)
    result = "<div class='#{@action}-class" 
    if @action == "edit"
      result << "' data-type='" + element.class.name.underscore + "' data-id='" + element.id.to_s
    end
    result << "'>" + "<button class='close'>X</button>" + element.to_html(@action) + "</div>"
  end 

  def add_keys(html, elements)
    reg = /col\d+/
    keys_array = html.scan(reg).uniq.map(&:to_sym)
    hash = Hash[keys_array.collect { |item| [item, ""] } ]
    hash.merge elements
  end

  def group_elements(elements)
    grouped_elements = elements.group_by(&:div_id)
    grouped_elements.transform_values! { |value| value.sort_by(&:order)}
    grouped_elements.transform_values! do |value|
      value.inject("") { |res, el| res + wrap(el) }
    end
    grouped_elements.transform_keys! { |key| key.to_sym }
    
  end


 
end